import { validateEmail } from "@/helpers/auth";

const validatePassword = (password: string) => {
  return password.trim().length > 5;
};

export const loginFormIsValid = (email: string, password: string) => {
  const emailIsValid = validateEmail(email);
  const passwordIsValid = validatePassword(password);

  const emailInputError = {
    status: !emailIsValid,
    message: emailIsValid ? "" : "Invalid e-mail format",
  };

  const passwordInputError = {
    status: !passwordIsValid,
    message: passwordIsValid
      ? ""
      : "Password needs to be at least 6 characters long",
  };

  return {
    emailInputError,
    passwordInputError,
    formIsValid: emailIsValid && passwordIsValid,
  };
};
