
export type Lens<T, U> = {
  path: string[];
};

export declare const lens: <T = any, U = any>(
  path: string
) => Lens<T, U>;