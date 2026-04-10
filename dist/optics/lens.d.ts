import { Path } from "../utils/types";
export interface Lens<T, P extends Path<T>> {
    path: P;
    keys: string[];
}
export declare function lens<T, P extends Path<T>>(path: P): Lens<T, P>;
