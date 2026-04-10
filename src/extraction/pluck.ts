const getPath = (obj: any, path: string): any => {
  const keys = path.split(".");
  let result = obj;

  for (let i = 0; i < keys.length; i++) {
    if (result == null) return undefined;
    result = result[keys[i]];
  }

  return result;
};

export function pluck<T, K extends keyof T>(
  key: K,
  arr: readonly T[]
): T[K][];

export function pluck<T>(
  path: string,
  arr: readonly T[]
): any[];

export function pluck<T, K extends keyof T>(
  keys: K[],
  arr: readonly T[]
): Pick<T, K>[];

export function pluck<T>(
  selector: any,
  arr: readonly T[]
): any[] {
  const result: any[] = [];
   // Single key or path
  if (typeof selector === "string") {
    for (let i = 0; i < arr.length; i++) {
      result[i] = selector.includes(".")
        ? getPath(arr[i], selector)
        : (arr[i] as any)[selector];
    }
    return result;
  }

  for (let i = 0; i < arr.length; i++) {
    const obj: any = {};
    for (let j = 0; j < selector.length; j++) {
      const key = selector[j];
      obj[key] = (arr[i] as any)[key];
    }
    result[i] = obj;
  }

  return result;
}