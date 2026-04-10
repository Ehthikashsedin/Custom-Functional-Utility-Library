export function every<T>(
predicate: (value: T, index: number) => boolean,
arr: T[]
): boolean {
if (!Array.isArray(arr)) throw new TypeError("Expected array");

for (let i = 0; i < arr.length; i++) {
if (!predicate(arr[i], i)) return false;
}

return true;
}
