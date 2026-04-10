import { pluck } from "../../src/extraction/pluck";

describe("pluck", () => {
  const data = [
    { id: 1, info: { email: "a@test.com" }, tags: ["dev"] },
    { id: 2, info: { email: "b@test.com" }, tags: ["hr"] },
  ];

  it("plucks single top-level key", () => {
    const arrRef = [...data];
        expect(pluck("id", data)).toEqual([1, 2]);
    expect(data).toEqual(arrRef);
  });

  it("plucks deep path notation", () => {
        expect(pluck("info.email", data)).toEqual(["a@test.com", "b@test.com"]);
  });

  it("plucks multiple keys into new tuple objects", () => {
        const result = pluck(["id", "tags"], data);
    expect(result).toEqual([
      { id: 1, tags: ["dev"] },
      { id: 2, tags: ["hr"] }
    ]);
  });

  it("handles empty arrays", () => {
        expect(pluck("id", [])).toEqual([]);
  });

  it("throws TypeError if not an array", () => {
    expect(() => pluck<any, any>("id", {} as any)).toThrow(TypeError);
  });

  it("returns undefined for missing path segments", () => {
        expect(pluck("info.missing.value", data)).toEqual([undefined, undefined]);
  });
});
