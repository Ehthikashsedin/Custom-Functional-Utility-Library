import { Path, PathValue } from "../utils/types";
import { Lens } from "./lens";

export function view<T, P extends Path<T>>(
  lens: Lens<T, P>,
  obj: T
): PathValue<T, P> | undefined {
  let result: any = obj;

  for (let i = 0; i < lens.keys.length; i++) {
    if (result == null) return undefined;
    result = result[lens.keys[i]];
  }

  return result as PathValue<T, P>;
}
