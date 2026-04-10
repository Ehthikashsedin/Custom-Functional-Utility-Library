import { Path, PathValue } from "../utils/types";

export interface Lens<T, P extends Path<T>> {
  path: P;
  keys: string[];
}

export function lens<T, P extends Path<T>>(path: P): Lens<T, P> {
  return { path, keys: path.split(".") };
}
