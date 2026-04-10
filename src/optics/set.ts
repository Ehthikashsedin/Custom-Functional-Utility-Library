import { Lens } from "./lens";

const clone = (obj: any): any => {
  if (Array.isArray(obj)) return obj.slice();
  if (obj && typeof obj === "object") return { ...obj };
  return obj;
};

export const set = <T, U>(
  ln: Lens<T, U>,
  value: U,
  obj: T
): T => {
  const recursiveSet = (index: number, current: any): any => {
    const key = ln.path[index];
    const cloned = clone(current);
  if (index === ln.path.length - 1) {
      cloned[key] = value;
      return cloned;
    }

    cloned[key] = recursiveSet(index + 1, current[key]);
    return cloned;
  };

  return recursiveSet(0, obj);
};    