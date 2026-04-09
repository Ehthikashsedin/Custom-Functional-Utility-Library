export function find<T>(
arr: T[],
predicate: (item: T, index: number) => boolean
): T | undefined;

export function find<T, K extends keyof T>(
arr: T[],
key: K,
value: T[K]
): T | undefined;

export function find<T>(
arr: T[],
arg1: any,
arg2?: any
): T | undefined {
if (!Array.isArray(arr)) throw new TypeError("Expected array");

if (typeof arg1 === "function") {
for (let i = 0; i < arr.length; i++) {
if (arg1(arr[i], i)) return arr[i];
}
return undefined;
}

for (let i = 0; i < arr.length; i++) {
const item = arr[i] as any;
if (item && item[arg1] === arg2) return item;
}

return undefined;
}
