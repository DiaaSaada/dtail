/**
 * Functional programming utilities
 * Higher-order functions and array transformations
 */

/**
 * Sum array elements with optional start value
 */
export function sum(array: number[], start: number = 0): number {
  return array.reduce((acc, val) => acc + val, start);
}

/**
 * Returns true if any element is truthy or matches predicate
 */
export function any<T>(array: T[], predicate?: (item: T) => boolean): boolean {
  if (predicate) {
    return array.some(predicate);
  }
  return array.some((item) => Boolean(item));
}

/**
 * Returns true if all elements are truthy or match predicate
 */
export function all<T>(array: T[], predicate?: (item: T) => boolean): boolean {
  if (predicate) {
    return array.every(predicate);
  }
  return array.every((item) => Boolean(item));
}

/**
 * Returns a new sorted array (non-mutating)
 * Unlike Array.sort() which mutates the original array
 */
export function sorted<T>(
  array: T[],
  key?: (item: T) => number | string,
  reverse: boolean = false
): T[] {
  const copy = [...array];

  if (key) {
    copy.sort((a, b) => {
      const keyA = key(a);
      const keyB = key(b);
      if (keyA < keyB) return reverse ? 1 : -1;
      if (keyA > keyB) return reverse ? -1 : 1;
      return 0;
    });
  } else {
    copy.sort((a, b) => {
      if (a < b) return reverse ? 1 : -1;
      if (a > b) return reverse ? -1 : 1;
      return 0;
    });
  }

  return copy;
}

/**
 * Returns a new reversed array (non-mutating)
 */
export function reversed<T>(array: T[]): T[] {
  return [...array].reverse();
}

/**
 * Find minimum element with optional key function
 */
export function min<T>(array: T[], key?: (item: T) => number): T | undefined {
  if (array.length === 0) return undefined;

  if (key) {
    return array.reduce((min, item) => (key(item) < key(min) ? item : min));
  }

  return array.reduce((min, item) => (item < min ? item : min));
}

/**
 * Find maximum element with optional key function
 */
export function max<T>(array: T[], key?: (item: T) => number): T | undefined {
  if (array.length === 0) return undefined;

  if (key) {
    return array.reduce((max, item) => (key(item) > key(max) ? item : max));
  }

  return array.reduce((max, item) => (item > max ? item : max));
}

/**
 * Group array elements by a key function
 */
export function groupBy<T, K extends string | number>(
  array: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  const result = {} as Record<K, T[]>;

  for (const item of array) {
    const key = keyFn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
}
