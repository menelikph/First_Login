import { users } from "./utils";

export function authenticateUser(name: string, password: string) {
  const foudUser = users.find(
    (item) => item.name === name && item.password === password
  );

  if (!foudUser) {
    return null;
  }
  return foudUser;
}
