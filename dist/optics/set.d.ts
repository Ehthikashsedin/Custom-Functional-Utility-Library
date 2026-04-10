import { Path, PathValue } from "../utils/types";
import { Lens } from "./lens";
export declare function set<T, P extends Path<T>>(lens: Lens<T, P>, value: PathValue<T, P>, obj: T): T;
