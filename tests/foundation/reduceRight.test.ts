import { reduceRight } from "../../src/foundation/reduceRight";

describe("reduceRight", () => {
  it("reduces array right-to-left", () => {
    const arr = [2, 3];
    const originalRef = [...arr];
    const result = reduceRight((acc, val) => acc - val, 10, arr);

    expect(result).toEqual(5);
    expect(arr).toEqual(originalRef); // Zero-mutation check
  });

  it("handles empty arrays by returning initial", () => {
    expect(reduceRight((acc, val) => acc + val, 100, [])).toEqual(100);
  });

  it("throws TypeError if not an array", () => {
    expect(() => reduceRight((acc: any, val: any) => acc + val, 0, null as any)).toThrow(TypeError);
  });
});
