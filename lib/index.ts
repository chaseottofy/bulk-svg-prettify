import * as fs from 'node:fs';
import * as path from 'node:path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as svgParser from 'svg-parser';
import { ArgumentVInterface } from './types';
import treeToSvg from './core/tree-to-svg';

import {
  TrackProgress,
  StepVerifier,
  HandleState,
} from './helpers';

import logHelp from './cli/log-help';
import {
  handleReadFile,
  verifyInput,
  verifyDirectoryExists,
} from './utils/file-utils';

const rootDirectory = process.cwd();

const argumentsV = yargs(hideBin(process.argv))
  .options({
    f: {
      // alias: 'input',
      describe: 'path to input directory from root',
      type: 'string',
      desc: '-f ./icons',
    },
    o: {
      // alias: 'output',
      describe: 'path to output directory from root',
      type: 'string',
      desc: '-o ./result',
    },
    h: {
      // alias: 'help',
      describe: 'show help',
      type: 'boolean',
      desc: '-h',
    },
  })
  .demandOption(
    ['f', 'o'],
    'Please provide both input and output directories',
  )
  .check((argv) => {
    if (argv.h) {
      logHelp();
      process.exit(0);
    }
    if (!argv.f) { throw new Error('Input directory is required'); }
    if (!argv.o) { throw new Error('Output directory is required'); }
    return true;
  })
  .argv as ArgumentVInterface;

/** ****************************************************** */
/** HANDLE STATE: VERIFICATION */
const verifier = new StepVerifier(4);
const progress = new TrackProgress();
const jsonState = new HandleState('{}');

async function reset(): Promise<void> {
  verifier.reset();
  progress.reset();
  jsonState.reset();
}

async function processFile(
  inputDirectory: string,
  outputDirectory: string,
  outputFilename: string,
): Promise<void> {
  try {
    // 1. Reset verifier, progress, and temporary json file
    await reset();
    verifier.verifyStep(1);

    const svgElement = await handleReadFile(
      path.join(inputDirectory, `${outputFilename}.svg`),
      'utf8',
    );

    const svgTree = svgParser.parse(svgElement);
    verifier.verifyStep(2);
    const svgFormatted = treeToSvg(svgTree as unknown as svgParser.RootNode);
    verifier.verifyStep(3);

    fs.writeFileSync(
      path.join(outputDirectory, `${outputFilename}.svg`),
      svgFormatted,
    );
    verifier.verifyStep(4);
    verifier.allStepsPassed();
    progress.increment();
    reset();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

async function main(): Promise<void> {
  try {
    const [inputPath, outputPath] = await verifyInput(argumentsV);
    const inputDirectory = path.join(rootDirectory, inputPath);
    const outputDirectory = path.join(rootDirectory, outputPath);

    // Verify input and output directories exist
    await verifyDirectoryExists(inputDirectory);
    await verifyDirectoryExists(outputDirectory);

    // Get all files (svgs) from input directory
    const inputFiles = fs.readdirSync(inputDirectory);

    if (inputFiles.length === 0) {
      throw new Error(`Failed to start: No files found in ${inputDirectory}`);
    }

    for (const inputFile of inputFiles) {
      const inputFilePath = path.join(inputDirectory, inputFile);
      const inputStats = fs.statSync(inputFilePath);

      if (inputStats.isFile() === false) {
        throw new Error(`Failed to start: ${inputFilePath} is not a file`);
      }

      const inputExtension = path.extname(inputFilePath);
      if (inputExtension !== '.svg') {
        throw new Error(`Failed to start: ${inputFilePath} is not an svg file`);
      }

      const fileBasename: string = path.basename(inputFilePath, inputExtension);
      // eslint-disable-next-line no-await-in-loop
      await processFile(inputDirectory, outputDirectory, fileBasename);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

// eslint-disable-next-line unicorn/prefer-top-level-await
main();
