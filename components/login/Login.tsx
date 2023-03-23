import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";

import signup from "../../assets/images/signup.svg";
import { LoginType } from "./Login.types";

import { signIn } from "next-auth/react";
import { validateEmail } from "@/helpers/auth";
import { useRouter } from "next/router";

const defaultLoginData = {
  email: "",
  password: "",
};

const Login = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<LoginType>(defaultLoginData);
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formField: string = e.target.id;
    const userInput: LoginType = { ...loginData };
    userInput[formField as keyof typeof userInput] = e.target.value;
    setLoginData(userInput);
  };

  const submitFormHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailValid = validateEmail(loginData.email);

    if (!emailValid || !loginData.password) return;

    const result = await signIn("credentials", {
      redirect: false,
      email: loginData.email,
      password: loginData.password,
    });

    if (result?.error) {
      console.log("nu merge");
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
          className="w-10/12 md:w-full flex flex-col p-3 md:p-8"
        >
          <h2 className="text-xl md:text-4xl font-bold">
            <span className="text-indigo-900">Welcome to</span>{" "}
            <span className="text-yellow-600">RentEquip,</span>
          </h2>
          <p className="text-indigo-900 text-sm font-semibold py-1 md:py-12">
            Login into your account
          </p>

          <div className="flex flex-col text-gray-400 py-1 md:py-2">
            <label className="text-indigo-900 text-sm">E-mail</label>
            <input
              className="border border-gray-300 focus:border-indigo-400 rounded-lg mt-2 p-1 md:p-2 outline-none"
              type="email"
              id="email"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col text-gray-400 py-1 md:py-2">
            <label className="text-indigo-900 text-sm">Password</label>
            <input
              className="border border-gray-300 focus:border-indigo-400 rounded-lg mt-2 p-1 md:p-2 outline-none"
              type="password"
              id="password"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input
                className="mr-2"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <span className="text-indigo-900">Remember Me</span>
            </p>
            <p className="text-indigo-600 cursor-pointer underline text-sm hover:text-blue-800 visited:text-purple-600">
              Forgot Your Password
            </p>
          </div>
          <button
            className="w-full my-2 md:my-5 py-1 md:py-2 bg-indigo-900 shadow-lg hover:shadow-indigo-500/50 text-white font-semibold rounded-lg disabled:bg-gray-500 disabled:hover:shadow-none"
            type="submit"
          >
            Log in
          </button>

          <button className="w-full my-1 md:my-2 py-1 md:py-2 bg-white shadow-lg hover:shadow-indigo-500/50 text-black font-semibold rounded-lg">
            Sign in with Google
          </button>

          <Link
            href="/signup"
            className="underline text-blue-600 text-sm hover:text-blue-800 visited:text-purple-600 py-2 md:py-4 flex justify-center items-center"
          >
            Don't have an account? Create one
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
