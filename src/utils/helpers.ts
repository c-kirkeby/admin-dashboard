export const capitalise = (input: string) => {
  if (typeof input !== "string") return "";
  return input.charAt(0).toUpperCase() + input.slice(1);
};

/**
 * This function takes an ISO8601 date string and returns a formatted date time.
 * The formatted date will look like "2021/09/01 12:00"
 * @param date string
 * @returns a zero-padded string in the format of "YYYY-MM-DD HH:MM"
 */
export const formatDatetime = (date: string) => {
  if (typeof date !== "string") return "";
  const d = new Date(date);
  return `${("0" + d.getDate()).slice(-2)}/${
    ("0" + (d.getMonth() + 1)).slice(-2) + 1
  }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
};
