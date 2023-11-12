import { CommandsInterface } from '../types';

const commands: CommandsInterface = {
  f: {
    alias: 'input',
    describe: 'path to input directory from root',
    type: 'string',
    example: '-f ./icons',
  },
  o: {
    alias: 'output',
    describe: 'path to output directory from root',
    type: 'string',
    example: '-o ./result',
  },
  h: {
    alias: 'help',
    describe: 'show help',
    type: 'void',
    example: '-h',
  },
};

export default commands;
