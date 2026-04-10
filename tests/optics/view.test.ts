import { lens } from "../../src/optics/lens";
import { view } from "../../src/optics/view";

describe("view", () => {
  interface OpticData {
    user: {
      profile: {
        name: string;
        age?: number;
      },
      missing?: {
        name: string;
      }
    }
  }

  const data: OpticData = {
    user: {
      profile: {
        name: "Test"
      }
    }
  };

  it("views a deep path value correctly", () => {
    const l = lens<OpticData, "user.profile.name">("user.profile.name");
    expect(view(l, data)).toBe("Test");
  });

  it("returns undefined for non-existent path gracefully", () => {
    const l = lens<OpticData, "user.profile.age">("user.profile.age");
    expect(view(l, data)).toBeUndefined();
  });

  it("returns undefined if intermediate path is null", () => {
    const l = lens<OpticData, "user.missing.name">("user.missing.name");
    expect(view(l, data)).toBeUndefined();
  });
});
