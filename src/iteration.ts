/**
 * Iteration utilities
 * Functions for generating and iterating sequences
 */

/**
 * Generate a sequence of numbers
 * range(5) => [0, 1, 2, 3, 4]
 * range(1, 5) => [1, 2, 3, 4]
 * range(0, 10, 2) => [0, 2, 4, 6, 8]
 * range(5, 0, -1) => [5, 4, 3, 2, 1]
 */
export function range(start: number, stop?: number, step: number = 1): number[] {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  if (step === 0) {
    throw new Error('range() step argument must not be zero');
  }

  const result: number[] = [];

  if (step > 0) {
    for (let i = start; i < stop; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > stop; i += step) {
      result.push(i);
    }
  }

  return result;
}

/**
 * Combine multiple arrays element-wise
 * zip([1,2,3], ['a','b','c']) => [[1,'a'], [2,'b'], [3,'c']]
 */
export function zip<T extends unknown[][]>(
  ...arrays: T
): { [K in keyof T]: T[K] extends (infer U)[] ? U : never }[] {
  if (arrays.length === 0) return [];

  const minLength = Math.min(...arrays.map((arr) => arr.length));
  const result: any[] = [];

  for (let i = 0; i < minLength; i++) {
    result.push(arrays.map((arr) => arr[i]));
  }

  return result;
}

/**
 * Like zip but uses fillValue for shorter arrays
 */
export function zipLongest<T>(fillValue: T, ...arrays: T[][]): T[][] {
  if (arrays.length === 0) return [];

  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  const result: T[][] = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(arrays.map((arr) => (i < arr.length ? arr[i] : fillValue)));
  }

  return result;
}

/**
 * Returns [index, element] pairs
 * enumerate(['a','b','c']) => [[0,'a'], [1,'b'], [2,'c']]
 * enumerate(['a','b'], 1) => [[1,'a'], [2,'b']]
 */
export function enumerate<T>(iterable: T[], start: number = 0): Array<[number, T]> {
  return iterable.map((item, index) => [index + start, item]);
}

/**
 * Combine multiple iterables into one array
 */
export function chain<T>(...iterables: Iterable<T>[]): T[] {
  const result: T[] = [];
  for (const iterable of iterables) {
    for (const item of iterable) {
      result.push(item);
    }
  }
  return result;
}

/**
 * Repeat a value n times
 */
export function repeat<T>(value: T, times: number): T[] {
  return Array(times).fill(value);
}

/**
 * Cycle through array n times
 */
export function cycle<T>(array: T[], times: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < times; i++) {
    result.push(...array);
  }
  return result;
}
