export function formatDate(date: Date | string): string {
  if (!date) return "Unknown date";
  const parsedDate = date instanceof Date ? date : new Date(date);

  if (isNaN(parsedDate.getTime())) return "Invalid Date";

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}
