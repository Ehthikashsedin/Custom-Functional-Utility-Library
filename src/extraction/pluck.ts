import { Path, PathValue } from "../utils/types";

function get(obj: any, path: string) {
  const keys = path.split(".");
  let result = obj;

  for (let i = 0; i < keys.length; i++) {
    if (result == null) return undefined;
    result = result[keys[i]];
  }

  return result;
}

export function pluck<T, K extends keyof T>(keys: K[], arr: T[]): Pick<T, K>[];
export function pluck<T, P extends Path<T>>(path: P, arr: T[]): PathValue<T, P>[];
export function pluck<T, K extends keyof T>(key: K, arr: T[]): T[K][];

export function pluck<T>(
  keyOrPathOrKeys: string | string[],
  arr: T[]
): any[] {
  if (!Array.isArray(arr)) throw new TypeError("Expected array");

  const result: any[] = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (typeof keyOrPathOrKeys === "string") {
      result[i] = get(item, keyOrPathOrKeys);
    } else {
      const obj: any = {};
      for (let j = 0; j < keyOrPathOrKeys.length; j++) {
        const key = keyOrPathOrKeys[j];
        obj[key] = get(item, key);
      }
      result[i] = obj;
    }
  }

  return result;
}
