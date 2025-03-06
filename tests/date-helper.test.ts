import {
  getAgeFromBirthDate,
  dateAfterDays,
  dateAfterDaysISOString,
  dateBeforeDaysISOString,
  formatDateToDDMMYYYY,
} from "../src";

describe("Date Helper Functions", () => {
  test("getAgeFromBirthDate should return correct age", () => {
    expect(getAgeFromBirthDate("2000-01-01")).toBe(new Date().getFullYear() - 2000);
  });

  test("dateAfterDays should return correct date after given days", () => {
    const today = new Date();
    const expectedDate = new Date(today);
    expectedDate.setDate(today.getDate() + 5);
    expect(dateAfterDays(5)).toBe(expectedDate.toISOString().split("T")[0]);
  });

  test("dateAfterDaysISOString should return correct ISO string after given days", () => {
    const today = new Date();
    const expectedDate = new Date(today);
    expectedDate.setDate(today.getDate() + 5);
    expect(dateAfterDaysISOString(5)).toBe(expectedDate.toISOString());
  });

  test("dateBeforeDaysISOString should return correct ISO string before given days", () => {
    const today = new Date();
    const expectedDate = new Date(today);
    expectedDate.setDate(today.getDate() - 5);
    expect(dateBeforeDaysISOString(5)).toBe(expectedDate.toISOString());
  });

  test("formatDateToDDMMYYYY should format date correctly", () => {
    const date = new Date("2023-10-10");
    expect(formatDateToDDMMYYYY(date)).toBe("10.10.2023");
  });
});
