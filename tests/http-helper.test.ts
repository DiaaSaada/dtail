import { objectToQueryString } from "../src/http-helper";

describe("Http Helper functions", () => {
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
});
