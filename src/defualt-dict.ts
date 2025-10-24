export class DefaultDict {
  private data: Record<string, number> = {};

  constructor(private defaultValue: number = 0) {
  }

  get(key: string): number {
    if (!(key in this.data)) {
      this.data[key] = this.defaultValue;
    }
    return this.data[key];
  }

  set(key: string, value: number): void {
    this.data[key] = value;
  }

  inc(key: string, value: number): void {
    if (!(key in this.data)) {
      this.data[key] = value;
    } else {
      this.data[key] += value;
    }
  }

  entries() {
    return Object.entries(this.data);
  }
}