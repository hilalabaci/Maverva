export function calculateDaysBetween(startDate?: Date, endDate?: Date): string {
  if (!startDate || !endDate) return "Unknown duration";

  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  const diffInMs = end - start;
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 1) {
    return "1 day";
  }

  return diffInDays > 0 ? `${diffInDays} days` : "0 days";
}
