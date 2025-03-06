import {
  shortUUID,
  throwIf,
  limitInRange,
  sortObjectAlphabetically,
  isValidJsonObject,
  isValidJson,
} from "../src/util-helper";

describe("Helper functions", () => {
  test("shortUUID generates a string of specified length", () => {
    const uuid = shortUUID(8);
    expect(uuid).toHaveLength(8);
  });

  test("shortUUID generates a string with all caps when specified", () => {
    const uuid = shortUUID(8, true);
    expect(uuid).toMatch(/^[A-Z0-9]+$/);
  });

  test("throwIf throws error when condition is true", () => {
    expect(() => throwIf(true, new Error("Test error"))).toThrow("Test error");
  });

  test("throwIf does not throw error when condition is false", () => {
    expect(() => throwIf(false, new Error("Test error"))).not.toThrow();
  });

  test("withinRange returns number within range", () => {
    expect(limitInRange(5, 1, 10)).toBe(5);
  });

  test("withinRange returns min when number is below range", () => {
    expect(limitInRange(-1, 1, 10)).toBe(1);
  });

  test("sortObjectAlphabetically sorts object keys alphabetically", () => {
    const obj = { b: 2, a: 1 };
    const sortedObj = sortObjectAlphabetically(obj);
    expect(Object.keys(sortedObj)).toEqual(["a", "b"]);
  });

  test("sortObjectAlphabetically handles empty object", () => {
    const obj = {};
    const sortedObj = sortObjectAlphabetically(obj);
    expect(Object.keys(sortedObj)).toEqual([]);
  });

  test("isValidJsonObject returns true for valid JSON object string", () => {
    const jsonString = '{"name": "John"}';
    expect(isValidJsonObject(jsonString)).toBe(true);
  });

  test("isValidJsonObject returns false for invalid JSON object string", () => {
    const jsonString = '{"name": "John"';
    expect(isValidJsonObject(jsonString)).toBe(false);
  });

  test("isValidJson returns true for valid JSON string", () => {
    const jsonString = '{"name": "John"}';
    expect(isValidJson(jsonString)).toBe(true);
  });

  test("isValidJson returns false for invalid JSON string", () => {
    const jsonString = '{"name": "John"';
    expect(isValidJson(jsonString)).toBe(false);
  });
});
