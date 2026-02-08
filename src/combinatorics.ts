/**
 * Combinatorics utilities
 * Permutations, combinations, and cartesian product
 */

/**
 * Cartesian product of arrays
 * product([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 */
export function product<T>(...arrays: T[][]): T[][] {
  if (arrays.length === 0) return [[]];

  return arrays.reduce<T[][]>(
    (acc, array) => acc.flatMap((x) => array.map((y) => [...x, y])),
    [[]] as T[][]
  );
}

/**
 * Generate all permutations of array elements
 * permutations([1, 2, 3]) => [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 * permutations([1, 2, 3], 2) => [[1,2], [1,3], [2,1], [2,3], [3,1], [3,2]]
 */
export function permutations<T>(array: T[], r?: number): T[][] {
  const n = array.length;
  r = r ?? n;

  if (r > n) return [];
  if (r === 0) return [[]];

  const result: T[][] = [];

  function* permute(current: T[], remaining: T[]): Generator<T[]> {
    if (current.length === r) {
      yield [...current];
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const next = [...remaining];
      const [picked] = next.splice(i, 1);
      yield* permute([...current, picked], next);
    }
  }

  for (const perm of permute([], array)) {
    result.push(perm);
  }

  return result;
}

/**
 * Generate all combinations of array elements
 * combinations([1, 2, 3, 4], 2) => [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]
 */
export function combinations<T>(array: T[], r: number): T[][] {
  const n = array.length;
  if (r > n || r < 0) return [];
  if (r === 0) return [[]];

  const result: T[][] = [];

  function* combine(start: number, current: T[]): Generator<T[]> {
    if (current.length === r) {
      yield [...current];
      return;
    }

    for (let i = start; i < n; i++) {
      yield* combine(i + 1, [...current, array[i]]);
    }
  }

  for (const combo of combine(0, [])) {
    result.push(combo);
  }

  return result;
}
