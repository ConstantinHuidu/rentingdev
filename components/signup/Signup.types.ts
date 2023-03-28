export type SignupType = {
  name: string;
  email: string;
  password: string;
  confirmation: string;
};

export type SignupFormErrorType = {
  nameError: SignupInputError;
  emailError: SignupInputError;
  passwordError: SignupInputError;
  confirmationError: SignupInputError;
};

type SignupInputError = {
  status: boolean;
  message: string;
};
