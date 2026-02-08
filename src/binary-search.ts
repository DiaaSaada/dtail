/**
 * Binary search utilities
 * Binary search functions for sorted arrays
 */

/**
 * Find insertion point for value in sorted array (left side)
 * Returns the index where value should be inserted to keep array sorted
 * If value already exists, returns index before existing entries
 */
export function bisectLeft<T>(array: T[], value: T, lo: number = 0, hi?: number): number {
  if (hi === undefined) hi = array.length;

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (array[mid] < value) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return lo;
}

/**
 * Find insertion point for value in sorted array (right side)
 * Returns the index where value should be inserted to keep array sorted
 * If value already exists, returns index after existing entries
 */
export function bisectRight<T>(array: T[], value: T, lo: number = 0, hi?: number): number {
  if (hi === undefined) hi = array.length;

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (array[mid] > value) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
}

/**
 * Alias for bisectRight (default behavior)
 */
export const bisect = bisectRight;

/**
 * Insert value into sorted array maintaining sort order (left)
 * If value already exists, inserts before existing entries
 */
export function insortLeft<T>(array: T[], value: T, lo: number = 0, hi?: number): void {
  const index = bisectLeft(array, value, lo, hi);
  array.splice(index, 0, value);
}

/**
 * Insert value into sorted array maintaining sort order (right)
 * If value already exists, inserts after existing entries
 */
export function insortRight<T>(array: T[], value: T, lo: number = 0, hi?: number): void {
  const index = bisectRight(array, value, lo, hi);
  array.splice(index, 0, value);
}

/**
 * Alias for insortRight (default behavior)
 */
export const insort = insortRight;
