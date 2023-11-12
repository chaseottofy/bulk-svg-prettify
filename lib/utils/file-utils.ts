import fs from 'node:fs';
import logHelp from '../cli/log-help';
import commands from '../cli/commands';
import { ArgumentVInterface } from '../types';

export async function verifyInput(
  checkArgumentsV: ArgumentVInterface,
): Promise<[string, string]> {
  let pathsCount = 0;
  const paths = { inputPath: '', outputPath: '' };
  try {
    for (const [key, value] of Object.entries(checkArgumentsV)) {
      if (key === '_' || key === '$0') {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (key in commands === false) {
        throw new Error(
          `Unrecognized command: ${key}`,
        );
      }

      const currentCommand = commands[key];
      const { type } = currentCommand;

      if (type !== typeof value) {
        throw new Error(
          `Invalid type for ${key}. Expected ${type}`,
        );
      }

      if (key === 'h') {
        logHelp();
        process.exit(0);
      }

      if (key === 'f') {
        if (value.length === 0) {
          throw new Error(
            'Input directory is required',
          );
        }
        paths.inputPath += value;
        pathsCount += 1;
      }

      if (key === 'o') {
        if (value.length === 0) {
          throw new Error(
            'Output directory is required',
          );
        }
        paths.outputPath += value;
        pathsCount += 1;
      }
    }

    if (pathsCount !== 2) {
      throw new Error(
        `Input and output directories are both required,
        got ${Object.values(paths)} for ${Object.keys(paths)}`,
      );
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  const { inputPath, outputPath } = paths;
  return [inputPath, outputPath];
}

// eslint-disable-next-line consistent-return
export async function verifyDirectoryExists(
  directoryPath: string,
): Promise<boolean> {
  try {
    await fs.promises.access(directoryPath);
    return true;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export async function handleReadFile(
  filePath: string,
  encoding: BufferEncoding = 'utf8',
): Promise<string> {
  return fs.promises.readFile(filePath, encoding)
    .then((result: Buffer | string) => {
      if (Buffer.isBuffer(result)) {
        return result.toString(encoding);
      }
      return result;
    })
    .catch((error: Error) => {
      console.error(error);
      process.exit(1);
    });
}
