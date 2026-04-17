import { NotificationType } from "../../../../types";

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function groupNotifications(notifications: NotificationType[]) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  return [
    {
      label: "Today",
      items: notifications.filter((n) =>
        isSameDay(new Date(n.CreatedAt), today)
      ),
    },
    {
      label: "Yesterday",
      items: notifications.filter((n) =>
        isSameDay(new Date(n.CreatedAt), yesterday)
      ),
    },
    {
      label: "Older",
      items: notifications.filter(
        (n) =>
          !isSameDay(new Date(n.CreatedAt), today) &&
          !isSameDay(new Date(n.CreatedAt), yesterday)
      ),
    },
  ];
}
