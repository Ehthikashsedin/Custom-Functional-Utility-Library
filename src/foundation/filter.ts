export function filter<T>(
predicate: (value: T, index: number) => boolean,
arr: T[]
): T[] {
if (!Array.isArray(arr)) throw new TypeError("Expected array");

const result: T[] = [];

for (let i = 0; i < arr.length; i++) {
if (predicate(arr[i], i)) {
result[result.length] = arr[i];
}
}

return result;
}
