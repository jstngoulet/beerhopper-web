import DEFAULT_KEYS from "../../utilities/config";
import { AUTH_TOKEN_KEY } from "../Auth-Helpers";

export interface FetchOptions extends Omit<RequestInit, "headers"> {
  headers?: Record<string, string>;
  authToken?: string;
  apiToken?: string;
}

export async function fetchClient<T = any>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const headers: Record<string, string> = {
    ...defaultHeaders,
    ...options.headers,
  };

  // Retrieve the stored auth token from local storage
  const storedAuthToken = localStorage.getItem(AUTH_TOKEN_KEY);

  // Update local storage if the auth token is different
  if (options.authToken && options.authToken !== storedAuthToken) {
    localStorage.setItem(AUTH_TOKEN_KEY, options.authToken);
  }

  // Include an auth token if provided
  if (options.authToken) {
    headers["Authorization"] = `Bearer ${options.authToken}`;
    localStorage.setItem(AUTH_TOKEN_KEY, options.authToken);
  } else if (storedAuthToken) {
    headers["Authorization"] = `Bearer ${storedAuthToken}`;
  }

  // Now, check the API Key
  if (options.apiToken) {
    headers["api-token"] = options.apiToken;
  } else if (DEFAULT_KEYS.SERVER_API_KEY) {
    headers["api-token"] = DEFAULT_KEYS.SERVER_API_KEY;
  }

  const config: RequestInit = {
    ...options,
    headers,
  };

  try {
    
    const response = await fetch(`${DEFAULT_KEYS.SERVER_HOST}${path}`, config);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "An error occurred");
    }

    return response as T;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export default fetchClient;
