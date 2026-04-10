import { filter } from "../../src/foundation/filter";

describe("filter", () => {
  it("filters array elements", () => {
    const arr = [1, 2, 3, 4];
    const originalRef = [...arr];
    const result = filter((x) => x % 2 === 0, arr);

    expect(result).toEqual([2, 4]);
    expect(arr).toEqual(originalRef); // Zero-mutation check
  });

  it("handles empty arrays", () => {
    expect(filter((x) => x > 2, [])).toEqual([]);
  });

  it("throws TypeError if not an array", () => {
    expect(() => filter((x: any) => x > 2, undefined as any)).toThrow(TypeError);
  });
});
