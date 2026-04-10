import { Lens } from "./lens";

export const view = <T, U>(ln: Lens<T, U>, obj: T): U => {
  let result: any = obj;

  for (let i = 0; i < ln.path.length; i++) {
    if (result == null) return undefined as any;
    result = result[ln.path[i]];
  }

  return result;
};