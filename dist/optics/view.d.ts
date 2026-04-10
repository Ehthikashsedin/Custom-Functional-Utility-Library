import { Path, PathValue } from "../utils/types";
import { Lens } from "./lens";
export declare function view<T, P extends Path<T>>(lens: Lens<T, P>, obj: T): PathValue<T, P> | undefined;
