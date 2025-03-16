
export const isLoggedIn: boolean = determineIsLoggedIn();

function determineIsLoggedIn(): boolean  {
  const token = localStorage.getItem("token");
  if (token) return true;
  return false;
}