import { NotificationMarkReadType, NotificationType } from "../types";
import { apiCall } from "./apiClient";

export const getNotifications = async (userId: string, token: string) => {
  return await apiCall<NotificationType[]>("notifications", {
    method: "GET",
    urlParams: new URLSearchParams({ userId }),
    token,
  });
};
export const markNotificationsReadApi = async (
  data: NotificationMarkReadType,
  token: string
) => {
  return await apiCall<NotificationType[]>("notifications/mark-read", {
    method: "POST",
    data: data,
    token,
  });
};
