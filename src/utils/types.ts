export type Path<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${"" | `.${Path<T[K]>}`}`;
    }[keyof T]
  : never;

export type PathValue<T, P extends string> = P extends keyof T
  ? T[P]
  : P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? PathValue<T[K], Rest>
    : never
  : never;

export type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...0[]]

// Fallback logic for lens with tuple paths to enforce depth (prevents infinite recursion)
export type DPath<T, D extends number = 5> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: [K] | [K, ...DPath<T[K], Prev[D]>] }[keyof T]
  : never;

export type DPathValue<T, P extends any[]> = P extends [infer K, ...infer Rest]
  ? K extends keyof T
    ? Rest extends []
      ? T[K]
      : DPathValue<T[K], Rest>
    : never
  : never;
