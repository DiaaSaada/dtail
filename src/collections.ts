/**
 * Collection data structures
 * Counter and Deque for counting and queue operations
 */

/**
 * Counter class - count hashable objects
 * A dict subclass for counting hashable objects
 */
export class Counter<T extends string | number> {
  private counts: Map<T, number> = new Map();

  constructor(iterable?: Iterable<T>) {
    if (iterable) {
      for (const item of iterable) {
        this.inc(item);
      }
    }
  }

  /**
   * Increment count for an element
   */
  inc(element: T, count: number = 1): void {
    this.counts.set(element, (this.counts.get(element) || 0) + count);
  }

  /**
   * Get count for an element (returns 0 if not found)
   */
  get(element: T): number {
    return this.counts.get(element) || 0;
  }

  /**
   * Set count for an element
   */
  set(element: T, count: number): void {
    this.counts.set(element, count);
  }

  /**
   * Get all elements and their counts
   */
  entries(): Array<[T, number]> {
    return Array.from(this.counts.entries());
  }

  /**
   * Get elements sorted by count (descending)
   */
  mostCommon(n?: number): Array<[T, number]> {
    const sorted = this.entries().sort((a, b) => b[1] - a[1]);
    return n !== undefined ? sorted.slice(0, n) : sorted;
  }

  /**
   * Get all unique elements
   */
  elements(): T[] {
    return Array.from(this.counts.keys());
  }

  /**
   * Get total count of all elements
   */
  total(): number {
    let sum = 0;
    for (const count of this.counts.values()) {
      sum += count;
    }
    return sum;
  }

  /**
   * Update counts from another iterable or Counter
   */
  update(iterable: Iterable<T> | Counter<T>): void {
    if (iterable instanceof Counter) {
      for (const [element, count] of iterable.entries()) {
        this.inc(element, count);
      }
    } else {
      for (const item of iterable) {
        this.inc(item);
      }
    }
  }

  /**
   * Subtract counts from another iterable or Counter
   */
  subtract(iterable: Iterable<T> | Counter<T>): void {
    if (iterable instanceof Counter) {
      for (const [element, count] of iterable.entries()) {
        this.inc(element, -count);
      }
    } else {
      for (const item of iterable) {
        this.inc(item, -1);
      }
    }
  }

  /**
   * Remove zero and negative counts
   */
  removeZeroAndNegative(): void {
    for (const [element, count] of this.counts.entries()) {
      if (count <= 0) {
        this.counts.delete(element);
      }
    }
  }

  /**
   * Get the size (number of unique elements)
   */
  get size(): number {
    return this.counts.size;
  }

  /**
   * Clear all counts
   */
  clear(): void {
    this.counts.clear();
  }

  /**
   * Check if element exists
   */
  has(element: T): boolean {
    return this.counts.has(element) && this.counts.get(element)! > 0;
  }
}

/**
 * Deque - Double-ended queue
 * Efficient O(1) operations on both ends
 */
export class Deque<T> {
  private items: T[] = [];
  private maxLen?: number;

  constructor(iterable?: Iterable<T>, maxLen?: number) {
    this.maxLen = maxLen;
    if (iterable) {
      for (const item of iterable) {
        this.append(item);
      }
    }
  }

  /**
   * Add element to the right end
   */
  append(item: T): void {
    this.items.push(item);
    if (this.maxLen !== undefined && this.items.length > this.maxLen) {
      this.items.shift();
    }
  }

  /**
   * Add element to the left end
   */
  appendLeft(item: T): void {
    this.items.unshift(item);
    if (this.maxLen !== undefined && this.items.length > this.maxLen) {
      this.items.pop();
    }
  }

  /**
   * Remove and return element from the right end
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * Remove and return element from the left end
   */
  popLeft(): T | undefined {
    return this.items.shift();
  }

  /**
   * Extend deque by appending elements from iterable
   */
  extend(iterable: Iterable<T>): void {
    for (const item of iterable) {
      this.append(item);
    }
  }

  /**
   * Extend deque by prepending elements from iterable
   */
  extendLeft(iterable: Iterable<T>): void {
    for (const item of iterable) {
      this.appendLeft(item);
    }
  }

  /**
   * Rotate deque n steps to the right (negative for left)
   */
  rotate(n: number = 1): void {
    if (this.items.length === 0) return;

    n = n % this.items.length;
    if (n > 0) {
      for (let i = 0; i < n; i++) {
        this.appendLeft(this.pop()!);
      }
    } else {
      for (let i = 0; i < -n; i++) {
        this.append(this.popLeft()!);
      }
    }
  }

  /**
   * Reverse the deque in place
   */
  reverse(): void {
    this.items.reverse();
  }

  /**
   * Remove first occurrence of value
   */
  remove(value: T): boolean {
    const index = this.items.indexOf(value);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Count occurrences of value
   */
  count(value: T): number {
    return this.items.filter((item) => item === value).length;
  }

  /**
   * Clear all elements
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Get element at index
   */
  get(index: number): T | undefined {
    if (index < 0) {
      index = this.items.length + index;
    }
    return this.items[index];
  }

  /**
   * Get the length
   */
  get length(): number {
    return this.items.length;
  }

  /**
   * Check if empty
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Get first element without removing
   */
  peekLeft(): T | undefined {
    return this.items[0];
  }

  /**
   * Get last element without removing
   */
  peekRight(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /**
   * Convert to array
   */
  toArray(): T[] {
    return [...this.items];
  }

  /**
   * Iterator support
   */
  *[Symbol.iterator](): Iterator<T> {
    for (const item of this.items) {
      yield item;
    }
  }
}
