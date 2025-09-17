export interface User {
  name: string;
  password: string;
}

export const users: User[] = [
  { name: "david", password: "12345" },
  { name: "admin", password: "admin" },
  { name: "test", password: "test123" },
];
