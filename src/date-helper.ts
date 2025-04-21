import { _24H_ms, ONE_MIN_IN_MILLISECONDS } from "./durations-in-seconds";

export function getAgeFromBirthDate(dob: Date | string): number {
  const birthDate = typeof dob == "string" ? new Date(dob) : dob;
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust if the birthday hasn't occurred yet this year
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
}

/**
 * return date after certain number of days in format YYYY-mm-dd
 * @param days
 */
export const dateAfterDays = function (days: number = 0): string {
  const nextDate = new Date();
  if (days != 0) nextDate.setDate(nextDate.getDate() + days);
  return nextDate.toISOString().split("T")[0];
};
export const dateAfterDaysISOString = function (days: number = 0): string {
  const nextDate = new Date();
  if (days != 0) nextDate.setDate(nextDate.getDate() + days);
  return nextDate.toISOString();
};

export const dateBeforeDaysISOString = function (days: number = 0): string {
  return dateAfterDaysISOString(-1 * days);
};

export const formatDateToDDMMYYYY = function (date: Date | string): string {
  if (typeof date == "string") date = new Date(date);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export const getAgeFromBirthDay = function (dateString: Date | string) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export function timeDifferenceInMinutes(t1: string, t2: string): number {
  try {
    const prevArrivalTime = new Date(t1);
    const departsTime = new Date(t2);
    const duration = departsTime.getTime() - prevArrivalTime.getTime();
    return Math.floor(duration / ONE_MIN_IN_MILLISECONDS);
  } catch (_: unknown) {
    return 0;
  }
}


export const isOlderThan24Hours = (_date: Date | null): boolean => {
  if (!_date) return false;
  const now = new Date();
  const twentyFourHoursAgo = new Date(now.getTime() - _24H_ms);
  return _date < twentyFourHoursAgo;
};
