import { describe, expect, it } from "vitest";
import { getIsoWeekKey, pickWeeklyIndex } from "./weeklySpotlight";

describe("pickWeeklyIndex", () => {
  it("is stable for the same inputs", () => {
    expect(pickWeeklyIndex(2026, 11, 7)).toBe(pickWeeklyIndex(2026, 11, 7));
  });

  it("stays within range", () => {
    for (let y = 2024; y <= 2027; y++) {
      for (let w = 1; w <= 52; w++) {
        const i = pickWeeklyIndex(y, w, 7);
        expect(i).toBeGreaterThanOrEqual(0);
        expect(i).toBeLessThan(7);
      }
    }
  });

  it("returns 0 for non-positive length", () => {
    expect(pickWeeklyIndex(2026, 1, 0)).toBe(0);
    expect(pickWeeklyIndex(2026, 1, -3)).toBe(0);
  });
});

describe("getIsoWeekKey", () => {
  it("returns week 1 for 2024-01-01 UTC (Monday in ISO week 1 of 2024)", () => {
    const d = new Date(Date.UTC(2024, 0, 1));
    expect(getIsoWeekKey(d)).toEqual({ weekYear: 2024, weekNumber: 1 });
  });

  it("returns correct week for 2024-01-04 UTC (Thursday)", () => {
    const d = new Date(Date.UTC(2024, 0, 4));
    expect(getIsoWeekKey(d)).toEqual({ weekYear: 2024, weekNumber: 1 });
  });
});
