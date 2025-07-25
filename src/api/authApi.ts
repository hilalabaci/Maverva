import { apiCall } from "./apiClient";
import { UserType } from "../types";

export const loginGoogle = async (token: string, oneTap?: boolean) => {
  return await apiCall<UserType>(`auth/login-google?oneTap=${oneTap}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const loginVerificationEmail = async (email: string) => {
  return await apiCall("auth/login-verification-email", {
    method: "POST",
    data: { email },
  });
};
