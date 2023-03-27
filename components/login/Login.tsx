import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import signup from "../../assets/images/signup.svg";
import LoadingSpinner from "../genericComponents/LoadingSpinner";
import { loginFormIsValid } from "./LoginValidation";
import { FormErrorType, LoginType } from "./Login.types";

const defaultLoginData: LoginType = {
  email: "",
  password: "",
};
const formNoError: FormErrorType = {
  emailError: { status: false, message: "" },
  passwordError: { status: false, message: "" },
};

const Login = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<LoginType>(defaultLoginData);
  const [formError, setFormError] = useState<FormErrorType>(formNoError);

  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formField: string = e.target.id;
    const userInput: LoginType = { ...loginData };
    userInput[formField as keyof typeof userInput] = e.target.value;
    setLoginData(userInput);
  };

  const handleFormValidation = (email: string, password: string) => {
    // === clear any previous errors ===
    setFormError(formNoError);

    // === destructure data object from the validation function return ===
    const { emailInputError, passwordInputError, formIsValid } =
      loginFormIsValid(email, password);

    // === create a copy of the form error state ===
    const newFormError = { ...formError };

    // === overwrite the error state according to validation ===
    newFormError.emailError = emailInputError;
    newFormError.passwordError = passwordInputError;

    setFormError(newFormError);
    return formIsValid;
  };

  const submitFormHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = loginData;

    const formDataValid = handleFormValidation(email, password);

    if (!formDataValid) {
      return;
    }

    setIsLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (result?.error) {
      setIsLoading(false);
      //TODO: show toaster notification
      return;
    }
    router.push("/products");
  };

  return (
    <div className="grid md:grid-cols-5 gap-4 m-4 h-full md:w-[80%] mx-auto">
      <div className="relative hidden md:col-span-3 md:flex justify-center items-center my-4">
        <Image src={signup} alt="signup" className="object-scale-down" fill />
      </div>
      <div className="col-span-2 md:col-span-2 flex justify-center">
        <form
          onSubmit={submitFormHandler}
          noValidate
          className="w-10/12 md:w-full flex flex-col p-3 md:p-8"
        >
          <h2 className="text-xl md:text-4xl font-bold">
            <span className="text-indigo-900 dark:text-white">Welcome to</span>{" "}
            <span className="text-yellow-600">RentEquip,</span>
          </h2>
          <p className="text-indigo-900 dark:text-white text-sm font-semibold py-1 md:py-12">
            Login into your account
          </p>

          <div className="flex flex-col text-gray-400 py-1 md:py-2">
            <label className="text-indigo-900 dark:text-white text-sm">
              E-mail
            </label>
            <input
              className="border border-gray-300 focus:border-indigo-400 rounded-lg mt-2 p-1 md:p-2 outline-none"
              type="email"
              id="email"
              onChange={handleInputChange}
            />
            {formError.emailError.status && (
              <span className="text-[0.8rem] text-red-500 pl-1">
                {formError.emailError.message}
              </span>
            )}
          </div>

          <div className="flex flex-col text-gray-400 py-1 md:py-2">
            <label className="text-indigo-900 dark:text-white text-sm">
              Password
            </label>
            <input
              className="border border-gray-300 focus:border-indigo-400 rounded-lg mt-2 p-1 md:p-2 outline-none"
              type="password"
              id="password"
              onChange={handleInputChange}
            />
            {formError.passwordError.status && (
              <span className="text-[0.8rem] text-red-500 pl-1">
                {formError.passwordError.message}
              </span>
            )}
          </div>

          <div className="flex justify-between text-gray-400 py-2">
            <p
              onClick={() => setIsChecked(!isChecked)}
              className="flex items-center cursor-pointer"
            >
              <input
                className="mr-2 cursor-pointer"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <span className="text-indigo-900 dark:text-white">
                Remember Me
              </span>
            </p>
            <p className="text-indigo-600 dark:text-white cursor-pointer underline text-sm hover:text-blue-800 visited:text-purple-600">
              Forgot Your Password
            </p>
          </div>
          <button
            className="flex justify-center items-center w-full my-2 md:my-5 py-1 md:py-2 bg-indigo-900 shadow-lg hover:shadow-indigo-500/50 text-white font-semibold rounded-lg disabled:bg-gray-500 disabled:hover:shadow-none disabled:cursor-not-allowed"
            type="submit"
            disabled={isLoading}
          >
            {isLoading && <LoadingSpinner />}
            {isLoading && "Logging you in"}
            {!isLoading && "Log in"}
          </button>

          <button
            disabled={isLoading}
            className="w-full my-1 md:my-2 py-1 md:py-2 bg-white shadow-lg hover:shadow-indigo-500/50 text-black font-semibold rounded-lg disabled:bg-gray-500 disabled:hover:shadow-none"
          >
            Sign in with Google
          </button>

          <Link
            href="/signup"
            className="underline text-blue-600 dark:text-white text-sm hover:text-blue-800 dark:hover:text-blue-400 visited:text-purple-600 py-2 md:py-4 flex justify-center items-center"
          >
            Don't have an account? Create one
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
