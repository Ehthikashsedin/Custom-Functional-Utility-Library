export declare function find<T>(users: T[], fn:(value: T, index: number, array: T[]) => boolean): T | undefined;
export declare function search<T, K extends keyof T>(
  users: T[],
  key: K,
  value: T[K]
): T | undefined;