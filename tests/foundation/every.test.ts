import { every } from "../../src/foundation/every";

describe("every", () => {
  it("returns true if all elements fulfill predicate", () => {
    const arr = [2, 4, 6];
    const originalRef = [...arr];
    expect(every((x) => x % 2 === 0, arr)).toBe(true);
    expect(arr).toEqual(originalRef);
  });

  it("returns false if one element fails predicate", () => {
    expect(every((x) => x % 2 === 0, [2, 3, 4])).toBe(false);
  });

  it("handles empty arrays", () => {
    expect(every((x) => x > 5, [])).toBe(true); // Vacuous truth
  });

  it("throws TypeError if not an array", () => {
    expect(() => every((x) => x === 1, undefined as any)).toThrow(TypeError);
  });
});
