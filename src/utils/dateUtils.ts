type FormatDateOptions = {
  includeTime?: boolean;
};

export function formatDate(
  date: Date | string,
  options?: FormatDateOptions
): string {
  if (!date) return "Unknown date";
  const parsedDate = date instanceof Date ? date : new Date(date);

  if (isNaN(parsedDate.getTime())) return "Invalid Date";

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = parsedDate.toLocaleDateString("en-US", dateOptions);

  if (options?.includeTime) {
    // time formatting
    const formattedTime = parsedDate.toLocaleTimeString("en-US", timeOptions);
    return `${formattedDate}, ${formattedTime}`;
  }

  return formattedDate;

  // return parsedDate.toLocaleDateString("en-US", {
  //   month: "short",
  //   day: "2-digit",
  //   year: "numeric",
  // });
}
