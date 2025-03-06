/**
 * convert key-value object to query string with URL encoding
 * e.g. { name: "John", age: 30 } => "name=John&age=30"
 * @param obj
 */
export const objectToQueryString = function (obj: Record<string, any>): string {
  const str: string[] = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const v = obj[key];
      str.push(`${encodeURIComponent(key)}=${encodeURIComponent(v)}`);
    }
  }
  return str.join("&");
};