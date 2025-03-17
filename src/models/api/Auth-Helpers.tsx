
export const AUTH_TOKEN_KEY = "authToken";

export function clearAuthorization() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function setAuthorization(authToken: string) {
  localStorage.setItem(AUTH_TOKEN_KEY, authToken);
}

export function determineIsLoggedIn(): boolean {
  return !!(localStorage.getItem(AUTH_TOKEN_KEY))
}