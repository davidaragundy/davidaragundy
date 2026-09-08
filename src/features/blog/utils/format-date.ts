export const formatDate = (date: string, includeRelative = false) => {
  const targetDate = new Date(date.includes("T") ? date : `${date}T00:00:00`);

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) return fullDate;

  const currentDate = new Date();
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  const relative =
    yearsAgo > 0
      ? `${yearsAgo}y ago`
      : monthsAgo > 0
        ? `${monthsAgo}mo ago`
        : daysAgo > 0
          ? `${daysAgo}d ago`
          : "Today";

  return `${fullDate} (${relative})`;
};
