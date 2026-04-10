
import { Lens } from "./lens";

export declare const set: <T, U>(
  ln: Lens<T, U>,
  value: U,
  obj: T
) => T;