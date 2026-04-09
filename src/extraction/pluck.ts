function get(obj: any, path: string) {
const keys = path.split(".");
let result = obj;

for (let i = 0; i < keys.length; i++) {
if (result == null) return undefined;
result = result[keys[i]];
}

return result;
}

export function pluck<T>(key: string, arr: T[]): any[];
export function pluck<T>(keys: string[], arr: T[]): any[];

export function pluck<T>(
keyOrKeys: string | string[],
arr: T[]
): any[] {
if (!Array.isArray(arr)) throw new TypeError("Expected array");

const result: any[] = new Array(arr.length);

for (let i = 0; i < arr.length; i++) {
const item = arr[i];


if (typeof keyOrKeys === "string") {
  result[i] = get(item, keyOrKeys);
} else {
  const obj: any = {};
  for (let j = 0; j < keyOrKeys.length; j++) {
    const key = keyOrKeys[j];
    obj[key] = get(item, key);
  }
  result[i] = obj;
}


}

return result;
}
