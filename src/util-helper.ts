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

export const throwIf = (condition: unknown, err: Error): asserts condition => {
  if (condition) {
    throw err;
  }
};

export const limitInRange = function (num: number, min: number, max: number): number {
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


export function assert(value: unknown, error: Error): asserts value {
  if (!value) throw error;
}

function tryOrNull<T>(fn: () => T): T | null {
  try {
    return fn();
  } catch {
    return null;
  }
}

/**
 * const shout = pipe(toUpper, exclaim);
 * shout("hello");
 * @param fns
 */
const pipe = (...fns: Function[]) => (input: any) =>
  fns.reduce((acc, fn) => fn(acc), input);