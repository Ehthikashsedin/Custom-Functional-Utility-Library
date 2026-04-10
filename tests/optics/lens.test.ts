import { lens } from "../../src/optics/lens";

interface TestData {
  user: { profile: { name: string } };
}

describe("lens", () => {
  it("creates a lens object with path and keys array", () => {
    const l = lens<TestData, "user.profile.name">("user.profile.name");
    expect(l.path).toBe("user.profile.name");
    expect(l.keys).toEqual(["user", "profile", "name"]);
  });
});
