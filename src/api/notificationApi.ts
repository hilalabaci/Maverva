import { NotificationMarkReadType, NotificationType } from "../types";
import { apiCall } from "./apiClient";

export const getNotifications = async (userId: string) => {
  return await apiCall<NotificationType[]>("notifications", {
    method: "GET",
    urlParams: new URLSearchParams({ userId }),
  });
};
export const markNotificationsReadApi = async (data: NotificationMarkReadType) => {
  return await apiCall<NotificationType[]>("notifications/mark-read", {
    method: "POST",
    data: data,
  });
};
