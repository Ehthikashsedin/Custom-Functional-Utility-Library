import { find } from "../../src/search/find";

describe("find", () => {
  const users = [
    { id: 1, name: "A", active: true },
    { id: 2, name: "B", active: false },
    { id: 3, name: "C", active: true }
  ];

  it("finds by predicate", () => {
    const arrRef = [...users];
    expect(find(users, (u) => u.id === 2)).toEqual(users[1]);
    expect(users).toEqual(arrRef);
  });

  it("finds by key-value", () => {
        expect(find(users, "name", "C")).toEqual(users[2]);
  });

  it("finds by object matcher", () => {
    expect(find(users, { active: false })).toEqual(users[1]);
  });

  it("finding by object matcher fails gracefully when not match", () => {
        expect(find(users, { active: true, name: "Z" })).toBeUndefined();
  });

  it("returns undefined if predicate finds nothing", () => {
    expect(find(users, (u) => u.id === 99)).toBeUndefined();
  });

  it("returns undefined if key-value finds nothing", () => {
        expect(find(users, "name", "Z")).toBeUndefined();
  });

  it("handles null / gracefully skips null elements", () => {
    const arr = [null, { id: 1 }];
    expect(find<any, any>(arr as any, "id" as any, 1 as any)).toEqual({ id: 1 });
  });

  it("returns undefined if invalid find signature (e.g. string without 2nd arg)", () => {
    // Though TS prevents it, testing the dispatcher runtime skip path.
    expect(find(users as any, "name" as any)).toBeUndefined();
  });

  it("throws TypeError if not an array", () => {
    expect(() => find({} as any, (x: any) => x)).toThrow(TypeError);
  });
});
