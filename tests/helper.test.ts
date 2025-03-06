import {
  shortUUID,
  objectToQueryString,
  throwIf,
  withinRange,
  sortObjectAlphabetically,
  isValidJsonObject,
  isValidJson,
  sha256,
} from "../src/helper";

describe("Helper functions", () => {
  test("shortUUID generates a string of specified length", () => {
    const uuid = shortUUID(8);
    expect(uuid).toHaveLength(8);
  });

  test("shortUUID generates a string with all caps when specified", () => {
    const uuid = shortUUID(8, true);
    expect(uuid).toMatch(/^[A-Z0-9]+$/);
  });

  test("objectToQueryString converts object to query string", () => {
    const obj = { name: "John", age: 30 };
    const queryString = objectToQueryString(obj);
    expect(queryString).toBe("name=John&age=30");
  });

  test("objectToQueryString handles empty object", () => {
    const obj = {};
    const queryString = objectToQueryString(obj);
    expect(queryString).toBe("");
  });

  test("throwIf throws error when condition is true", () => {
    expect(() => throwIf(true, new Error("Test error"))).toThrow("Test error");
  });

  test("throwIf does not throw error when condition is false", () => {
    expect(() => throwIf(false, new Error("Test error"))).not.toThrow();
  });

  test("withinRange returns number within range", () => {
    expect(withinRange(5, 1, 10)).toBe(5);
  });

  test("withinRange returns min when number is below range", () => {
    expect(withinRange(-1, 1, 10)).toBe(1);
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

  test("sha256 generates correct hash", () => {
    const hash = sha256("test");
    expect(hash).toBe("9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08");
  });

  test("sha256 generates different hash for different input", () => {
    const hash1 = sha256("test1");
    const hash2 = sha256("test2");
    expect(hash1).not.toBe(hash2);
  });
});
