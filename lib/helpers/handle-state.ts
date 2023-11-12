interface HandleStateInterface {
  getValue: () => string;
  setValue: (nextValue: string) => void;
  reset: () => void;
}

export default class HandleState implements HandleStateInterface {
  private value: string;

  constructor(base: string) {
    this.value = base;
  }

  public getValue(): string {
    return this.value;
  }

  public setValue(nextValue: string): void {
    this.value = nextValue;
  }

  public reset(): void {
    this.value = '{}';
  }
}
