import { lens } from "../../src/optics/lens";
import { set } from "../../src/optics/set";

describe("set", () => {
  interface OpticData {
    user: {
      profile: {
        name: string;
        age?: number;
      },
      missing?: {
        id: number;
      }
    };
    active: boolean;
  }

  const data: OpticData = {
    user: {
      profile: {
        name: "Test",
        age: 30
      }
    },
    active: true
  };

  it("sets a deep path value immutably", () => {
    const l = lens<OpticData, "user.profile.name">("user.profile.name");
    const updated = set(l, "NewName", data);

    expect(updated.user.profile.name).toBe("NewName");
    expect(data.user.profile.name).toBe("Test"); // Original unchanged
    expect(updated.active).toBe(true); // Other branches intact
    expect(updated).not.toBe(data); // New root ref
    expect(updated.user).not.toBe(data.user); // New intermediate ref
  });

  it("handles empty path keys", () => {
    const l = { path: "", keys: [] } as any;
    expect(set(l, "AllNew", data)).toBe("AllNew");
  });

  it("creates intermediary objects if they don't exist", () => {
    const l = lens<OpticData, "user.missing.id">("user.missing.id");
    const updated = set(l, 42 as never, data) as OpticData;
    expect(updated.user.missing!.id).toBe(42);
  });

  it("handles setting on null or undefined objects", () => {
    const l = lens<OpticData, "user.profile.name">("user.profile.name");
    expect(set(l, "Test", null as any)).toEqual({ user: { profile: { name: "Test" } } });
  });
});
