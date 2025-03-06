/**
 * Splits an array into chunks of a specified size
 * @param array
 * @param size
 */
export function chunk(array: any[], size: number) {
  if (!Array.isArray(array) || size < 1) return [];
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
}

/**
 * Randomly selects an element from an array
 * @param array
 */
export function randomElement(array: any[]) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Flattens an array recursively
 * @param array
 */
export function flattenDeep (array: any[]) {
  return array.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []
  );
}
