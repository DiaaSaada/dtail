import { chunk, randomElement, flattenDeep } from "../src/array-helper";
import { faker } from "@faker-js/faker";

describe("chunk", () => {
  test("splits an array into chunks of specified size", () => {
    const array = [1, 2, 3, 4, 5];
    const size = 2;
    const result = chunk(array, size);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  test("returns an empty array if size is less than 1", () => {
    const array = [1, 2, 3];
    const size = 0;
    const result = chunk(array, size);
    expect(result).toEqual([]);
  });

  test("handles empty array input", () => {
    const array: any[] = [];
    const size = 3;
    const result = chunk(array, size);
    expect(result).toEqual([]);
  });
});

describe("randomElement", () => {
  test("returns an element from the array", () => {
    const array = [1, 2, 3, 4, 5];
    const result = randomElement(array);
    expect(array).toContain(result);
  });

  test("returns undefined for an empty array", () => {
    const array: any[] = [];
    const result = randomElement(array);
    expect(result).toBeUndefined();
  });

  test("returns an element from an array of strings", () => {
    const array = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()];
    const result = randomElement(array);
    expect(array).toContain(result);
  });
});

describe("flattenDeep", () => {
  test("flattens a nested array", () => {
    const array = [1, [2, [3, [4]], 5]];
    const result = flattenDeep(array);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles already flat array", () => {
    const array = [1, 2, 3, 4, 5];
    const result = flattenDeep(array);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles empty array", () => {
    const array: any[] = [];
    const result = flattenDeep(array);
    expect(result).toEqual([]);
  });
});
