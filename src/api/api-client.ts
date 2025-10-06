
///tanstack query

import { ApiCallOptions, ApiResponse } from "../types/auth.types";

export async function apiCall<T>(
  url: string,
  { urlParams, method, data, headers, token }: ApiCallOptions
): Promise<ApiResponse<T>> {
  let apiUrl = process.env.REACT_APP_API_URL + url;
  if (urlParams) apiUrl = `${apiUrl}?${urlParams.toString()}`;

  const response = await fetch(apiUrl, {
    method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(headers ?? {}),
    },
  });

  if (!response.ok) {
    const error = (await response.json()) as { message: string };
    console.error("API call failed:", response.status, error);
    throw new Error(error.message || `Error: ${response.status}`);
  }

  return {
    ok: response.ok,
    status: response.status,
    data: (await response.json()) as T,
  };
}
// private async baseCall<T>(
//   url: string,
//   { urlParams, method, data, headers }: ApiCallOptions
// ): Promise<ApiResponse<T>> {
//   let apiUrl = process.env.REACT_APP_API_URL + url;
//   if (urlParams) apiUrl = apiUrl + "?" + urlParams.toString();
//   const requestHeaders = headers ?? {};

//   const response = await fetch(apiUrl, {
//     method: method,
//     body: data ? JSON.stringify(data) : undefined,
//     headers: {
//       "Content-Type": "application/json",
//       ...requestHeaders,
//     },
//   });

//   const { ok, status } = response;

//   let responseData: T | undefined = undefined;

//   try {
//     if (ok) {
//       responseData = (await response.json()) as T;
//     } else {
//       const errorText = await response.text(); // Get raw response text
//       console.error("API call failed:", status, errorText); // Log the error
//       throw new Error(`Error: ${status}, ${errorText}`);
//     }
//   } catch (error) {
//     console.error("Failed to parse response as JSON:", error);
//     throw error; // Rethrow the error for further handling
//   }

//   return { ok, status, data: responseData };
// }
