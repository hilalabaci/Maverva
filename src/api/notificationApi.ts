import { NotificationType } from "../types";
import { apiCall } from "./apiClient";

export const getNotifications = async (userId: string) => {
  return await apiCall<NotificationType[]>("notification", {
    method: "GET",
    urlParams: new URLSearchParams({ userId }),
  });
};
