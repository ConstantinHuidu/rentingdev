import { compare, hash } from "bcryptjs";

export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export function validateEmail(email: string) {
  var re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
}

export async function verifyPassword(
  password: string,
  hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
