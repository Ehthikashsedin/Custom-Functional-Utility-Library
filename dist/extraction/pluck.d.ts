export declare function pluck<T, K extends keyof T>(
  key: K,
  arr: readonly T[]
): T[K][];

export declare function pluck<T>(
  path: string,
  arr: readonly T[]
): any[];

export declare function pluck<T, K extends keyof T>(
  keys: K[],
  arr: readonly T[]
): Pick<T, K>[];
