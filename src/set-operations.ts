/**
 * Set operations
 * Set-like operations on arrays
 */

/**
 * Set union - combine all unique elements from multiple arrays
 */
export function setUnion<T>(...arrays: T[][]): T[] {
  const set = new Set<T>();
  for (const array of arrays) {
    for (const item of array) {
      set.add(item);
    }
  }
  return Array.from(set);
}

/**
 * Set intersection - elements common to all arrays
 */
export function setIntersection<T>(...arrays: T[][]): T[] {
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return [...new Set(arrays[0])];

  const sets = arrays.map((arr) => new Set(arr));
  const result: T[] = [];

  for (const item of sets[0]) {
    if (sets.every((set) => set.has(item))) {
      result.push(item);
    }
  }

  return result;
}

/**
 * Set difference - elements in first array but not in others
 */
export function setDifference<T>(array: T[], ...others: T[][]): T[] {
  const otherSets = others.map((arr) => new Set(arr));
  const result: T[] = [];
  const seen = new Set<T>();

  for (const item of array) {
    if (!seen.has(item) && !otherSets.some((set) => set.has(item))) {
      result.push(item);
      seen.add(item);
    }
  }

  return result;
}

/**
 * Symmetric difference - elements in either but not both
 */
export function setSymmetricDifference<T>(array1: T[], array2: T[]): T[] {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  const result: T[] = [];

  for (const item of set1) {
    if (!set2.has(item)) {
      result.push(item);
    }
  }

  for (const item of set2) {
    if (!set1.has(item)) {
      result.push(item);
    }
  }

  return result;
}

/**
 * Check if array is subset of another
 */
export function isSubset<T>(subset: T[], superset: T[]): boolean {
  const superSet = new Set(superset);
  return subset.every((item) => superSet.has(item));
}

/**
 * Check if array is superset of another
 */
export function isSuperset<T>(superset: T[], subset: T[]): boolean {
  return isSubset(subset, superset);
}

/**
 * Check if two arrays have no common elements
 */
export function isDisjoint<T>(array1: T[], array2: T[]): boolean {
  const set1 = new Set(array1);
  return !array2.some((item) => set1.has(item));
}
