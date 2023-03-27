import { validateEmail } from "@/helpers/auth";

const validatePassword = (password: string) => {
  return password.trim().length > 5;
};

export const loginFormIsValid = (email: string, password: string) => {
  const emailIsValid = validateEmail(email);
  const passwordIsValid = validatePassword(password);

  return {
    emailIsValid,
    passwordIsValid,
    formIsValid: emailIsValid && passwordIsValid,
  };
};
