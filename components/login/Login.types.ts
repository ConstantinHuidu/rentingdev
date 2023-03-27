export type LoginType = {
  email: string;
  password: string;
};

export type FormErrorType = {
  emailError: formInputError;
  passwordError: formInputError;
};

type formInputError = {
  status: boolean;
  message: string;
};
