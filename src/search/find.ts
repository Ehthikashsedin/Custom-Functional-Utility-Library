// 1. Predicate
export function find<T>(
  arr: T[],
  predicate: (item: T, index: number) => boolean
): T | undefined;

// 2. Key-Value
export function find<T, K extends keyof T>(
  arr: T[],
  key: K,
  value: T[K]
): T | undefined;

// 3. Object Matcher
export function find<T>(
  arr: T[],
  matcher: Partial<T>
): T | undefined;

export function find<T>(
  arr: T[],
  arg1: any,
  arg2?: any
): T | undefined {
  if (!Array.isArray(arr)) throw new TypeError("Expected array");

  // Dispatcher Logic
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i] as any;

    // 1. Predicate Search
    if (typeof arg1 === "function") {
      if (arg1(item, i)) return item;
    } 
    // 2. Key-Value Search
    else if (typeof arg1 === "string" && arg2 !== undefined) {
      if (item && item[arg1] === arg2) return item;
    } 
    // 3. Object Matcher Search
    else if (typeof arg1 === "object" && arg1 !== null && !Array.isArray(arg1)) {
      let isMatch = true;
      for (const key in arg1) {
        if (item[key] !== arg1[key]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) return item;
    }
  }

  return undefined;
}
