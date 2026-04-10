export type Lens<T, U> = {
  path: string[];
};

export const lens = <T = any, U = any>(path: string): Lens<T, U> => ({
  path: path.split("."),
});