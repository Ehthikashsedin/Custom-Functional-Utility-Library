import { reduce } from "../../src/foundation/reduce";

describe("reduce", () => {
  it("reduces array left-to-right", () => {
    const arr = [2, 3];
    const originalRef = [...arr];
    const result = reduce((acc, val) => acc - val, 10, arr);

    expect(result).toEqual(5);
    expect(arr).toEqual(originalRef); // Zero-mutation check
  });

  it("handles empty arrays by returning initial", () => {
    expect(reduce((acc, val) => acc + val, 100, [])).toEqual(100);
  });

  it("throws TypeError if not an array", () => {
    expect(() => reduce((acc: any, val: any) => acc + val, 0, "not_array" as any)).toThrow(TypeError);
  });
});
