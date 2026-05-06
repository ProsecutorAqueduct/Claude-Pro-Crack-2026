function uniqueArray<T>(arr: T[]): T[] { const uniqueSet = new Set(arr); return Array.from(uniqueSet); }
function flattenArray<T>(arr: T[]): T[] { return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []); }
function chunkArray<T>(arr: T[], size: number): T[][] { const chunks: T[][] = []; for (let i = 0; i < arr.length; i += size) { chunks.push(arr.slice(i, i + size)); } return chunks; }
function mergeArrays<T>(...arrays: T[][]): T[] { return arrays.flat(); }
function arrayContains<T>(arr: T[], value: T): boolean { return arr.includes(value); }
function arrayIntersection<T>(arr1: T[], arr2: T[]): T[] { return arr1.filter(value => arr2.includes(value)); }
function arrayDifference<T>(arr1: T[], arr2: T[]): T[] { return arr1.filter(value => !arr2.includes(value)); }
function arrayUnion<T>(arr1: T[], arr2: T[]): T[] { return uniqueArray([...arr1, ...arr2]); }
function arraySum(arr: number[]): number { return arr.reduce((acc, val) => acc + val, 0); }
function arrayAverage(arr: number[]): number { return arraySum(arr) / arr.length; }
function arrayMax(arr: number[]): number { return Math.max(...arr); }
function arrayMin(arr: number[]): number { return Math.min(...arr); }
function arrayFind<T>(arr: T[], predicate: (value: T) => boolean): T | undefined { return arr.find(predicate); }
function arrayMap<T, U>(arr: T[], callback: (value: T) => U): U[] { return arr.map(callback); }
function arrayFilter<T>(arr: T[], predicate: (value: T) => boolean): T[] { return arr.filter(predicate); }
function arraySort<T>(arr: T[], compareFn: (a: T, b: T) => number): T[] { return arr.sort(compareFn); }
function arrayReverse<T>(arr: T[]): T[] { return arr.slice().reverse(); }
function arrayIncludes<T>(arr: T[], value: T): boolean { return arr.indexOf(value) !== -1; }
function arrayStringify<T>(arr: T[]): string { return JSON.stringify(arr); }
function arrayClone<T>(arr: T[]): T[] { return arr.slice(); }
function arrayToSet<T>(arr: T[]): Set<T> { return new Set(arr); }
function arrayFromSet<T>(set: Set<T>): T[] { return Array.from(set); }
function arrayEvery<T>(arr: T[], predicate: (value: T) => boolean): boolean { return arr.every(predicate); }
function arraySome<T>(arr: T[], predicate: (value: T) => boolean): boolean { return arr.some(predicate); }
function arrayReduce<T, U>(arr: T[], callback: (acc: U, value: T) => U, initialValue: U): U { return arr.reduce(callback, initialValue); }
function arrayToObject<T>(arr: T[], keyFn: (value: T) => string): { [key: string]: T } { return arr.reduce((obj, value) => { obj[keyFn(value)] = value; return obj; }, {}); }
function arrayZip<T, U>(arr1: T[], arr2: U[]): [T, U][] { return arr1.map((value, index) => [value, arr2[index]]); }
function arrayUnzip<T, U>(arr: [T, U][]): [T[], U[]] { return arr.reduce(([arr1, arr2], [value1, value2]) => [[...arr1, value1], [...arr2, value2]], [[], []]); }
function arrayRemoveDuplicates<T>(arr: T[]): T[] { return [...new Map(arr.map(item => [item, item])).values()]; }
function arrayRotate<T>(arr: T[], count: number): T[] { const len = arr.length; count = ((count % len) + len) % len; return arr.slice(count).concat(arr.slice(0, count)); }
function arrayShuffle<T>(arr: T[]): T[] { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }
function arrayIsEmpty<T>(arr: T[]): boolean { return arr.length === 0; }
function arrayLast<T>(arr: T[]): T | undefined { return arr[arr.length - 1]; }
function arrayFirst<T>(arr: T[]): T | undefined { return arr[0]; }
function arrayFindIndex<T>(arr: T[], predicate: (value: T) => boolean): number { return arr.findIndex(predicate); }
function arraySlice<T>(arr: T[], start: number, end?: number): T[] { return arr.slice(start, end); }
function arrayFill<T>(length: number, value: T): T[] { return new Array(length).fill(value); }
