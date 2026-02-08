# dtail - Lightweight TypeScript Utility Library

[![npm version](https://img.shields.io/npm/v/dtail.svg)](https://www.npmjs.com/package/dtail)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](package.json)

A lightweight, zero-dependency TypeScript utility library for Node.js projects. Provides essential helper functions for **date manipulation**, **array operations**, **string utilities**, **JSON validation**, **HTTP helpers**, **functional programming**, and **data structures**.

[NPM Package](https://www.npmjs.com/package/dtail) | [GitHub Repository](https://github.com/DiaaSaada/dtail)

---

## Why dtail?

- **Zero Dependencies** - No bloat, just pure TypeScript utilities
- **Fully Typed** - Complete TypeScript support with strict type checking
- **Lightweight** - Only import what you need
- **Well Tested** - Comprehensive Jest test coverage
- **Tree-Shakeable** - Modern ES module exports
- **Rich Data Structures** - Counter, Deque, DefaultDict, and more

---

## Installation

```bash
npm install dtail
```

```bash
yarn add dtail
```

```bash
pnpm add dtail
```

---

## Quick Start

```typescript
import {
  getAgeFromBirthDate,
  chunk,
  shortUUID,
  objectToQueryString
} from 'dtail';

// Calculate age from birth date
const age = getAgeFromBirthDate('1990-05-15'); // 35

// Split array into chunks
const chunks = chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]

// Generate unique ID
const id = shortUUID(8); // "a9b2c4d1"

// Convert object to query string
const qs = objectToQueryString({ page: 1, limit: 10 }); // "page=1&limit=10"
```

---

## API Reference

### Date & Time Utilities

Essential functions for date manipulation, age calculation, and time formatting.

#### `getAgeFromBirthDate(dob: Date | string): number`

Calculate age from a birth date.

```typescript
import { getAgeFromBirthDate } from 'dtail';

getAgeFromBirthDate('1990-05-15');     // 35
getAgeFromBirthDate(new Date(1990, 4, 15)); // 35
```

#### `dateAfterDays(days?: number): string`

Get a future date formatted as `YYYY-MM-DD`.

```typescript
import { dateAfterDays } from 'dtail';

dateAfterDays(0);   // "2026-02-08" (today)
dateAfterDays(7);   // "2026-02-15" (next week)
dateAfterDays(30);  // "2026-03-10" (next month)
```

#### `dateAfterDaysISOString(days?: number): string`

Get a future date as ISO 8601 string.

```typescript
import { dateAfterDaysISOString } from 'dtail';

dateAfterDaysISOString(1); // "2026-02-09T12:00:00.000Z"
```

#### `dateBeforeDaysISOString(days?: number): string`

Get a past date as ISO 8601 string.

```typescript
import { dateBeforeDaysISOString } from 'dtail';

dateBeforeDaysISOString(7); // Date 7 days ago as ISO string
```

#### `formatDateToDDMMYYYY(date: Date | string): string`

Format date to European format (DD.MM.YYYY).

```typescript
import { formatDateToDDMMYYYY } from 'dtail';

formatDateToDDMMYYYY(new Date());       // "08.02.2026"
formatDateToDDMMYYYY('2026-12-25');     // "25.12.2026"
```

#### `timeDifferenceInMinutes(t1: string, t2: string): number`

Calculate time difference between two timestamps in minutes.

```typescript
import { timeDifferenceInMinutes } from 'dtail';

timeDifferenceInMinutes('2026-02-08T10:00:00Z', '2026-02-08T12:30:00Z'); // 150
```

#### `isOlderThan24Hours(date: Date | null): boolean`

Check if a date is older than 24 hours.

```typescript
import { isOlderThan24Hours } from 'dtail';

isOlderThan24Hours(new Date('2026-02-06')); // true
isOlderThan24Hours(new Date());              // false
```

#### `unixTsSeconds(): number`

Get current Unix timestamp in seconds.

```typescript
import { unixTsSeconds } from 'dtail';

unixTsSeconds(); // 1770508800
```

---

### Array Utilities

Powerful array manipulation functions for chunking, flattening, and random selection.

#### `chunk<T>(array: T[], size: number): T[][]`

Split an array into smaller chunks of specified size.

```typescript
import { chunk } from 'dtail';

chunk([1, 2, 3, 4, 5], 2);    // [[1, 2], [3, 4], [5]]
chunk(['a', 'b', 'c'], 1);    // [['a'], ['b'], ['c']]
chunk([1, 2, 3, 4, 5, 6], 3); // [[1, 2, 3], [4, 5, 6]]
```

#### `randomElement<T>(array: T[]): T`

Get a random element from an array.

```typescript
import { randomElement } from 'dtail';

randomElement(['red', 'green', 'blue']); // Random color
randomElement([1, 2, 3, 4, 5]);          // Random number
```

#### `flattenDeep(array: any[]): any[]`

Recursively flatten nested arrays to a single level.

```typescript
import { flattenDeep } from 'dtail';

flattenDeep([1, [2, [3, [4]]]]); // [1, 2, 3, 4]
flattenDeep([[1, 2], [3, [4, 5]]]); // [1, 2, 3, 4, 5]
```

---

### String & ID Utilities

Functions for generating unique identifiers and string manipulation.

#### `shortUUID(length?: number, allCaps?: boolean): string`

Generate a random alphanumeric string (pseudo-UUID).

```typescript
import { shortUUID } from 'dtail';

shortUUID();           // "a9b2c4d1e5" (10 chars default)
shortUUID(6);          // "x7y8z9"
shortUUID(8, true);    // "A9B2C4D1"
```

---

### Validation Utilities

Functions for validating data and handling errors safely.

#### `isValidJson(jsonStr: string): boolean`

Check if a string is valid JSON.

```typescript
import { isValidJson } from 'dtail';

isValidJson('{"name": "John"}');  // true
isValidJson('invalid json');       // false
isValidJson('[1, 2, 3]');          // true
```

#### `isValidJsonObject(jsonString: string): boolean`

Alias for `isValidJson` - validates JSON strings.

```typescript
import { isValidJsonObject } from 'dtail';

isValidJsonObject('{"key": "value"}'); // true
```

#### `throwIf(condition: unknown, err: Error): void`

Throw an error if condition is truthy. Uses TypeScript assertion.

```typescript
import { throwIf } from 'dtail';

throwIf(user === null, new Error('User not found'));
throwIf(age < 0, new Error('Age cannot be negative'));
```

#### `assert(value: unknown, error: Error): void`

Assert that a value is truthy, throw error if falsy.

```typescript
import { assert } from 'dtail';

assert(config.apiKey, new Error('API key is required'));
assert(user.isAuthenticated, new Error('User must be authenticated'));
```

---

### Number Utilities

Helper functions for numeric operations.

#### `limitInRange(num: number, min: number, max: number): number`

Clamp a number within a specified range.

```typescript
import { limitInRange } from 'dtail';

limitInRange(15, 0, 10);  // 10 (clamped to max)
limitInRange(-5, 0, 10);  // 0  (clamped to min)
limitInRange(5, 0, 10);   // 5  (within range)
```

---

### Object Utilities

Functions for object manipulation and comparison.

#### `sortObjectAlphabetically(obj: object): object`

Sort object keys alphabetically.

```typescript
import { sortObjectAlphabetically } from 'dtail';

sortObjectAlphabetically({ c: 3, a: 1, b: 2 }); // { a: 1, b: 2, c: 3 }
```

#### `compareObjectsByKeyValues(a: object, b: object): boolean`

Compare two objects by checking if keys in object A have matching values in object B.

```typescript
import { compareObjectsByKeyValues } from 'dtail';

compareObjectsByKeyValues({ name: 'John' }, { name: 'John', age: 30 }); // true
compareObjectsByKeyValues({ name: 'John' }, { name: 'Jane' }); // false
```

---

### HTTP Utilities

Functions for handling HTTP-related operations.

#### `objectToQueryString(obj: Record<string, any>): string`

Convert an object to a URL-encoded query string.

```typescript
import { objectToQueryString } from 'dtail';

objectToQueryString({ page: 1, limit: 10 });      // "page=1&limit=10"
objectToQueryString({ q: 'hello world' });        // "q=hello%20world"
objectToQueryString({ filter: 'active', sort: 'name' }); // "filter=active&sort=name"
```

---

### Data Structures

#### `DefaultDict`

A dictionary that returns a default value for missing keys. Perfect for counting and frequency analysis.

```typescript
import { DefaultDict } from 'dtail';

const counter = new DefaultDict(0);

// Count occurrences
counter.inc('apple', 1);
counter.inc('banana', 1);
counter.inc('apple', 1);

counter.get('apple');   // 2
counter.get('banana');  // 1
counter.get('orange');  // 0 (default value)

// Get all entries
counter.entries();      // [['apple', 2], ['banana', 1]]

// Get top N entries
counter.topN(1);        // [['apple', 2]]
```

---

## Collections & Data Structures

Powerful data structures for counting, queuing, and data manipulation.

### Counter Class

Count hashable objects with ease. Get frequency analysis and rankings.

```typescript
import { Counter } from 'dtail';

// Count from iterable
const counter = new Counter(['a', 'b', 'a', 'c', 'a', 'b']);
counter.get('a');           // 3
counter.get('b');           // 2
counter.get('z');           // 0 (missing keys return 0)

// Most common elements
counter.mostCommon(2);      // [['a', 3], ['b', 2]]
counter.mostCommon();       // All elements sorted by count

// Update from another iterable
counter.update(['a', 'a']);
counter.get('a');           // 5

// Subtract counts
counter.subtract(['a']);
counter.get('a');           // 4

// Total count
counter.total();            // Sum of all counts

// Get unique elements
counter.elements();         // ['a', 'b', 'c']
```

### range()

Generate number sequences with start, stop, and step.

```typescript
import { range } from 'dtail';

range(5);           // [0, 1, 2, 3, 4]
range(1, 5);        // [1, 2, 3, 4]
range(0, 10, 2);    // [0, 2, 4, 6, 8]
range(5, 0, -1);    // [5, 4, 3, 2, 1]
range(10, 0, -2);   // [10, 8, 6, 4, 2]
```

### zip() & zipLongest()

Combine multiple arrays element-wise.

```typescript
import { zip, zipLongest } from 'dtail';

// Zip stops at shortest array
zip([1, 2, 3], ['a', 'b', 'c']);
// [[1, 'a'], [2, 'b'], [3, 'c']]

zip([1, 2], ['a', 'b'], [true, false]);
// [[1, 'a', true], [2, 'b', false]]

// zipLongest uses fill value for shorter arrays
zipLongest(null, [1, 2, 3], ['a', 'b']);
// [[1, 'a'], [2, 'b'], [3, null]]
```

### enumerate()

Iterate with index - returns [index, element] pairs.

```typescript
import { enumerate } from 'dtail';

enumerate(['a', 'b', 'c']);
// [[0, 'a'], [1, 'b'], [2, 'c']]

// Start from custom index
enumerate(['a', 'b', 'c'], 1);
// [[1, 'a'], [2, 'b'], [3, 'c']]

// Use in loops
for (const [i, item] of enumerate(items)) {
  console.log(`${i}: ${item}`);
}
```

### groupBy()

Group array elements by a key function.

```typescript
import { groupBy } from 'dtail';

const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' }
];

groupBy(users, u => u.role);
// {
//   admin: [{ name: 'Alice', role: 'admin' }, { name: 'Charlie', role: 'admin' }],
//   user: [{ name: 'Bob', role: 'user' }]
// }

// Group numbers by even/odd
groupBy([1, 2, 3, 4, 5], n => n % 2 === 0 ? 'even' : 'odd');
// { odd: [1, 3, 5], even: [2, 4] }
```

### Deque Class

Double-ended queue with efficient O(1) operations on both ends.

```typescript
import { Deque } from 'dtail';

const deque = new Deque<number>();

// Add to both ends
deque.append(1);        // [1]
deque.append(2);        // [1, 2]
deque.appendLeft(0);    // [0, 1, 2]

// Remove from both ends
deque.pop();            // returns 2, deque is [0, 1]
deque.popLeft();        // returns 0, deque is [1]

// Peek without removing
deque.peekLeft();       // First element
deque.peekRight();      // Last element

// Rotate elements
const d = new Deque([1, 2, 3, 4, 5]);
d.rotate(2);            // [4, 5, 1, 2, 3]
d.rotate(-2);           // [1, 2, 3, 4, 5]

// Max length (auto-removes from opposite end)
const limited = new Deque([1, 2, 3], 3);
limited.append(4);      // [2, 3, 4] - 1 was removed

// Extend from iterables
deque.extend([4, 5]);       // Add to right
deque.extendLeft([0, -1]);  // Add to left
```

### Binary Search (bisect)

Binary search functions for sorted arrays. Find insertion points and maintain sorted order.

```typescript
import { bisect, bisectLeft, bisectRight, insort, insortLeft } from 'dtail';

const sorted = [1, 3, 5, 7, 9];

// Find insertion point
bisectLeft(sorted, 5);   // 2 (insert before existing 5)
bisectRight(sorted, 5);  // 3 (insert after existing 5)
bisect(sorted, 5);       // 3 (alias for bisectRight)

// Insert maintaining sort order
insort(sorted, 4);       // sorted is now [1, 3, 4, 5, 7, 9]
insortLeft(sorted, 5);   // Insert before existing 5s

// Useful for grade lookup
const grades = [60, 70, 80, 90];
const letters = ['F', 'D', 'C', 'B', 'A'];
letters[bisect(grades, 85)]; // 'B'
letters[bisect(grades, 92)]; // 'A'
```

### Set Operations

Set operations without converting to Set objects.

```typescript
import {
  setUnion,
  setIntersection,
  setDifference,
  setSymmetricDifference,
  isSubset,
  isSuperset,
  isDisjoint
} from 'dtail';

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];

setUnion(a, b);               // [1, 2, 3, 4, 5, 6]
setIntersection(a, b);        // [3, 4]
setDifference(a, b);          // [1, 2]
setSymmetricDifference(a, b); // [1, 2, 5, 6]

isSubset([1, 2], [1, 2, 3]);  // true
isSuperset([1, 2, 3], [1, 2]); // true
isDisjoint([1, 2], [3, 4]);   // true
```

### Functional Utilities

Functional programming helpers for common operations.

```typescript
import { sum, any, all, sorted, reversed, min, max } from 'dtail';

// Sum with optional start value
sum([1, 2, 3, 4]);          // 10
sum([1, 2, 3], 10);         // 16

// Any/All with optional predicate
any([0, false, 'hello']);   // true (truthy check)
any([1, 2, 3], x => x > 2); // true
all([1, 2, 3]);             // true
all([1, 2, 3], x => x > 0); // true

// Non-mutating sorted (unlike Array.sort)
const nums = [3, 1, 4, 1, 5];
sorted(nums);                        // [1, 1, 3, 4, 5] - original unchanged
sorted(nums, undefined, true);       // [5, 4, 3, 1, 1] - reversed

// Sort by key function
const items = [{n: 3}, {n: 1}, {n: 2}];
sorted(items, x => x.n);             // [{n: 1}, {n: 2}, {n: 3}]

// Non-mutating reversed
reversed([1, 2, 3]);                 // [3, 2, 1]

// Min/Max with optional key function
min([3, 1, 4, 1, 5]);                // 1
max([3, 1, 4, 1, 5]);                // 5
min(items, x => x.n);                // {n: 1}
max(items, x => x.n);                // {n: 3}
```

### Itertools-style Functions

Combinatorics and iteration utilities.

```typescript
import { chain, repeat, cycle, product, permutations, combinations } from 'dtail';

// Chain - combine multiple arrays
chain([1, 2], [3, 4], [5]);  // [1, 2, 3, 4, 5]

// Repeat value n times
repeat('x', 3);              // ['x', 'x', 'x']

// Cycle through array n times
cycle([1, 2], 3);            // [1, 2, 1, 2, 1, 2]

// Cartesian product
product([1, 2], ['a', 'b']);
// [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

product([0, 1], [0, 1], [0, 1]);
// All 3-bit binary combinations

// Permutations
permutations([1, 2, 3]);
// [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

permutations([1, 2, 3], 2);  // Length-2 permutations
// [[1,2], [1,3], [2,1], [2,3], [3,1], [3,2]]

// Combinations
combinations([1, 2, 3, 4], 2);
// [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]
```

---

### Time Duration Constants

Pre-defined time constants for convenience. No more magic numbers!

```typescript
import {
  ONE_HOUR_IN_MILLISECONDS,  // 3,600,000
  ONE_MIN_IN_MILLISECONDS,   // 60,000
  ONE_YEAR_IN_SECONDS,       // 31,536,000
  ONE_MONTH_IN_SECONDS,      // 2,592,000
  ONE_DAY_IN_SECONDS,        // 86,400
  ONE_HOUR_IN_SECONDS,       // 3,600
  THREE_MONTH_IN_SECONDS,    // 7,776,000
  M15_IN_SECONDS,            // 900 (15 minutes)
  _24H_ms                    // 86,400,000
} from 'dtail';

// Example: Set cache expiration
const cacheExpiry = Date.now() + ONE_HOUR_IN_MILLISECONDS;

// Example: Check if token expired
const tokenAge = Date.now() - tokenCreatedAt;
if (tokenAge > ONE_DAY_IN_SECONDS * 1000) {
  refreshToken();
}
```

---

## CommonJS Support

```javascript
const { chunk, shortUUID, getAgeFromBirthDate } = require('dtail');

const chunks = chunk([1, 2, 3, 4], 2);
const id = shortUUID(12);
const age = getAgeFromBirthDate('2000-01-01');
```

---

## Use Cases

- **API Development** - Generate unique IDs, validate JSON, build query strings
- **Data Processing** - Chunk large arrays, flatten nested data, groupBy for aggregations
- **User Management** - Calculate ages, format dates, handle timestamps
- **Caching Systems** - Use duration constants for TTL configuration, Deque for LRU
- **Form Validation** - Validate inputs, clamp numeric ranges
- **Analytics** - Counter for frequency analysis, mostCommon for rankings
- **Algorithm Implementation** - bisect for binary search, permutations/combinations
- **Functional Programming** - range, zip, enumerate, groupBy, sorted, reversed

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build the project
npm run build

# Lint code
npm run lint

# Format code
npm run prettier:fix
```

---

## License

MIT License - see [LICENSE](./LICENSE) for details.

---

## Author

**Diaa AbuSaada** - [diaa.inbox[AT]gmail.com]

---

## Keywords

typescript utilities, javascript utils, date helper, array chunk, uuid generator, json validator, query string builder, lodash alternative, underscore alternative, node utilities, npm utility library, typescript helpers, date formatting, array manipulation, object utilities, zero dependency utilities, counter class, deque typescript, range function, zip arrays, enumerate javascript, groupby typescript, bisect binary search, set operations, permutations combinations, functional programming, data structures, collections
