export function map<T, U>(
fn: (value: T, index: number) => U,
arr: T[]
): U[] {
if (!Array.isArray(arr)) {
throw new TypeError("Expected an array");
}

const result: U[] = new Array(arr.length);

for (let i = 0; i < arr.length; i++) {
result[i] = fn(arr[i], i);
}

return result;
}
