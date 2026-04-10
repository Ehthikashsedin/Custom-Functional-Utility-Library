import { map } from "../../src/foundation/map";

describe("map", () => {
  it("transforms array elements", () => {
    const arr = [1, 2, 3];
    const originalRef = [...arr];
    const result = map((x) => x * 2, arr);

    expect(result).toEqual([2, 4, 6]);
    expect(arr).toEqual(originalRef); // Zero-mutation check
  });

  it("handles empty arrays", () => {
    expect(map((x) => x * 2, [])).toEqual([]);
  });

  it("throws TypeError if not an array", () => {
    expect(() => map((x: any) => x * 2, null as any)).toThrow(TypeError);
    expect(() => map((x: any) => x * 2, {} as any)).toThrow(TypeError);
  });
});
