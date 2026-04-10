import { Path, PathValue } from "../utils/types";
import { Lens } from "./lens";

function setInPath(keys: string[], value: any, obj: any): any {
  if (keys.length === 0) return value;

  const [key, ...rest] = keys;

  return {
    ...obj,
    [key]: rest.length
      ? setInPath(rest, value, obj ? obj[key] : {})
      : value
  };
}

export function set<T, P extends Path<T>>(
  lens: Lens<T, P>,
  value: PathValue<T, P>,
  obj: T
): T {
  return setInPath(lens.keys, value, obj) as T;
}
