import { createHash } from "crypto";


export const shortUUID = function (length: number = 10, allCaps = false): string {
  const numbers = "0123456789";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const dictionary = allCaps ? numbers + upperCase : numbers + lowerCase + upperCase;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
  }
  return result;
};

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

export const throwIf = (condition: any, err: Error) => {
  if (!!condition) {
    throw err;
  }
};

export const withinRange = function (num: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, num));
};

export function sortObjectAlphabetically(obj: any) {
  const sortedKeys = Object.keys(obj).sort();
  const sortedObject: any = {};
  sortedKeys.forEach((key) => {
    sortedObject[key] = obj[key];
  });
  return sortedObject;
}

export function isValidJsonObject<T>(jsonString: string): boolean {
  try {
    JSON.parse(jsonString);
    return true;
  } catch {
    return false;
  }
}

export function isValidJson(jsonStr: string): boolean {
  try {
    JSON.parse(jsonStr);
    return true;
  } catch {
    return false;
  }
}


export function sha256(key: string): string {
  return createHash("sha256").update(key).digest("hex");
}
