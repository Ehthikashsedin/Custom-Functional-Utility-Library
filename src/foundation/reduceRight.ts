export function reduceRight<T, U>(
reducer: (acc: U, value: T, index: number) => U,
initial: U,
arr: T[]
): U {
if (!Array.isArray(arr)) throw new TypeError("Expected array");

let acc = initial;

for (let i = arr.length - 1; i >= 0; i--) {
acc = reducer(acc, arr[i], i);
}

return acc;
}