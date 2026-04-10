"use strict";

export function search<T>(
  users: readonly T[],
  predicate: (item: T, index: number, array: readonly T[]) => boolean
): T | undefined;

export function search<T, K extends keyof T>(
  users: readonly T[],
  key: K,
  value: T[K]
): T | undefined;


export function search<T>(
  users: readonly T[],
  arg1: ((item: T, index: number, array: readonly T[]) => boolean) | keyof T,
  arg2?: unknown
): T | undefined {
  if (!Array.isArray(users)) {
    return undefined;
  }

  if (typeof arg1 === "function") {
    for (let i = 0; i < users.length; i++) {
      const item = users[i];
      if (item != null && arg1(item, i, users)) {
        return item;
      }
    }
    return undefined;
  }

  if (typeof arg1 === "string") {
    const key = arg1 as keyof T;

    for (let i = 0; i < users.length; i++) {
      const item = users[i];
      if (item != null && (item as T)[key] === arg2) {
        return item;
      }
    }
    return undefined;
  }

  return undefined;
}