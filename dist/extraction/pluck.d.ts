import { Path, PathValue } from "../utils/types";
export declare function pluck<T, K extends keyof T>(keys: K[], arr: T[]): Pick<T, K>[];
export declare function pluck<T, P extends Path<T>>(path: P, arr: T[]): PathValue<T, P>[];
export declare function pluck<T, K extends keyof T>(key: K, arr: T[]): T[K][];
