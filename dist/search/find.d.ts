export declare function find<T>(arr: T[], predicate: (item: T, index: number) => boolean): T | undefined;
export declare function find<T, K extends keyof T>(arr: T[], key: K, value: T[K]): T | undefined;
export declare function find<T>(arr: T[], matcher: Partial<T>): T | undefined;
