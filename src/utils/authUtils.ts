/**
 * @returns true if user found
 */
export function getUser() {
  return localStorage.getItem("current_user") ? true : false;
}

/**
 * @returns user data if found
 */
export function getUserData() {
  return JSON.parse(localStorage.getItem("current_user") || "{}");
}
