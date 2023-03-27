import { validateEmail } from "@/helpers/auth";

const validatePassword = (password: string) => {
  return password.trim().length > 5;
};

export const loginFormIsValid = (email: string, password: string) => {
  const emailIsValid = validateEmail(email);
  const passwordIsValid = validatePassword(password);

  const emailError = {
    status: !emailIsValid,
    message: emailIsValid ? "" : "Invalid e-mail format",
  };

  const passwordError = {
    status: !passwordIsValid,
    message: passwordIsValid
      ? ""
      : "Password needs to be at least 6 characters long",
  };

  const loginFormError = {
    emailError,
    passwordError,
  };

  return {
    loginFormError,
    formIsValid: emailIsValid && passwordIsValid,
  };
};
