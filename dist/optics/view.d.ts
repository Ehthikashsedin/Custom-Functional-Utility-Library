
import { Lens } from "./lens";

export declare const view: <T, U>(
  ln: Lens<T, U>,
  obj: T
) => U;
