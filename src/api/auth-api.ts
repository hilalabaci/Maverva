import { apiCall } from "./api-client";
import { ApiError, UserType, verificationDataType } from "../types/user.types";

export const loginGoogle = async (token: string, oneTap?: boolean) => {
  return await apiCall<{ user: UserType; token: string }>(
    `auth/login-google?oneTap=${oneTap}`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const loginVerificationEmail = async (
  email: string,
  mode: "login" | "register"
) => {
  return await apiCall<{ ok: boolean; data: UserType & ApiError }>(
    "auth/login-verification-email",
    {
      method: "POST",
      data: { email, mode },
    }
  );
};
export const loginUser = async (
  email: string,
  password: string,
  rememberMe: boolean
) => {
  return await apiCall<{ user: UserType; token: string }>("auth/login", {
    method: "POST",
    data: { email, password, rememberMe },
  });
};

export const signUpVerificationCode = async (
  email: string,
  code: number,
  token: string
) => {
  return await apiCall<{
    user: UserType;
    ok: boolean;
    data: verificationDataType;
  }>("auth/signUp-verification-code", {
    method: "POST",
    data: { email, otpCode: code },
    token: token,
  });
};
export const sendResetPasswordLink = async (email: string, token: string) => {
  return await apiCall<{
    user: UserType;
    ok: boolean;
    data: verificationDataType;
  }>("auth/send-reset-password-link", {
    method: "POST",
    data: { email },
    token: token,
  });
};
export const findUserByEmail = async (email: string) => {
  return await apiCall<string>("auth/find-user-by-email", {
    method: "GET",
    urlParams: new URLSearchParams({ email }),
  });
};

export const resetPassword = async (
  email: string,
  newPassword: string,
  token: string
) => {
  return await apiCall<verificationDataType>(`auth/reset-password`, {
    method: "PUT",
    data: { email, newPassword },
    token: token,
  });
};
