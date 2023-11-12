import { TrackProgressInterface } from '../types';

export default class TrackProgress implements TrackProgressInterface {
  #filesCount: number;

  constructor() {
    this.#filesCount = 0;
  }

  reset(): void {
    this.#filesCount = 0;
  }

  increment(): void {
    this.#filesCount += 1;
  }

  get count(): number {
    return this.#filesCount;
  }
}
