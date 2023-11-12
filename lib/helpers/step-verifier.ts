import { StepVerifierInterface } from '../types/index';

export default class StepVerifier implements StepVerifierInterface {
  private stepsPassed: boolean[];

  private forceStop: boolean;

  constructor(private stepCount: number) {
    this.stepsPassed = this.buildSteps(stepCount);
    this.forceStop = false;
    this.reset();
  }

  buildSteps(stepCount: number): boolean[] {
    return Array.from({ length: stepCount }, () => false);
  }

  kill(): void {
    this.forceStop = true;
  }

  forceKill(message: string): void {
    this.kill();
    throw new Error(message);
  }

  reset(): void {
    this.stepsPassed = this.buildSteps(this.stepCount);
    this.forceStop = false;
  }

  verifyStep(stepNumber: number): void {
    if (stepNumber > 0 && stepNumber <= this.stepCount && !this.forceStop) {
      this.stepsPassed[stepNumber - 1] = true;
    } else {
      throw new Error('Invalid step number');
    }
  }

  hasStepPassed(stepNumber: number): boolean {
    if (stepNumber > 0 && stepNumber <= this.stepCount && !this.forceStop) {
      return this.stepsPassed[stepNumber - 1];
    }
    throw new Error('Invalid step number');
  }

  allStepsPassed(): boolean {
    const isFinished: boolean = this.stepsPassed.every(Boolean) && !this.forceStop;
    if (isFinished) {
      console.log('Process complete.');
      return true;
    }
    this.forceKill('Terminating: Process ran into an error on completion.');
    return false;
  }
}
