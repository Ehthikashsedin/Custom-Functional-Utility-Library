export function reduce<T, U>(
reducer: (acc: U, value: T, index: number) => U,
initial: U,
arr: T[]
): U {
if (!Array.isArray(arr)) throw new TypeError("Expected array");

let acc = initial;

for (let i = 0; i < arr.length; i++) {
acc = reducer(acc, arr[i], i);
}

return acc;
}
