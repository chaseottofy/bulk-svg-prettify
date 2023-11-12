export interface ArgumentVInterface {
  _: (string | number)[];
  $0: string;
  f: string;
  o: string;
  h: boolean;
}

export interface CommandsInterface {
  [key: string]: {
    alias: string;
    describe: string;
    type: string;
    example: string;
  };
}

export interface IRegexes {
  [key: string]: RegExp;
}

export interface TrackProgressInterface {
  reset: () => void;
  increment: () => void;
  count: number;
}

export interface StepVerifierInterface {
  kill: () => void;
  forceKill: (message: string) => void;
  reset: () => void;
  verifyStep: (stepNumber: number) => void;
  hasStepPassed: (stepNumber: number) => boolean;
  allStepsPassed: () => boolean;
}
