import { some } from "../../src/foundation/some";

describe("some", () => {
  it("returns true if at least one element fulfills predicate", () => {
    const arr = [1, 2, 3];
    const originalRef = [...arr];
    expect(some((x) => x === 2, arr)).toBe(true);
    expect(arr).toEqual(originalRef);
  });

  it("returns false if no element fulfills predicate", () => {
    expect(some((x) => x > 5, [1, 2, 3])).toBe(false);
  });

  it("handles empty arrays", () => {
    expect(some((x) => x === 1, [])).toBe(false);
  });

  it("throws TypeError if not an array", () => {
    expect(() => some((x) => x === 1, undefined as any)).toThrow(TypeError);
  });
});
