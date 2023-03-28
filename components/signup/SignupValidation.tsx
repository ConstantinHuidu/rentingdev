import React from "react";
import { validateEmail } from "@/helpers/auth";
import { SignupType } from "./Signup.types";

const validateName = (name: string) => {
  return name.trim().length > 2;
};

const validatePassword = (password: string) => {
  return password.trim().length > 5;
};

const validateConfirmation = (password: string, confirmation: string) => {
  return password === confirmation;
};

export const signupFormIsValid = (data: SignupType) => {
  const { name, email, password, confirmation } = data;

  const nameIsValid = validateName(name);
  const emailIsValid = validateEmail(email);
  const passwordIsValid = validatePassword(password);
  const confirmationsIsValid = validateConfirmation(password, confirmation);

  const nameError = {
    status: !nameIsValid,
    message: nameIsValid ? "" : "Name needs to be at least 3 characters long",
  };
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
  const confirmationError = {
    status: !confirmationsIsValid,
    message: confirmationsIsValid ? "" : "Passwords don't match",
  };

  const signupFormIsValid =
    nameIsValid && emailIsValid && passwordIsValid && confirmationsIsValid;

  const signupFormError = {
    nameError,
    emailError,
    passwordError,
    confirmationError,
  };

  return {
    signupFormIsValid,
    signupFormError,
  };
};
