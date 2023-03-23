import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import signup from "../../assets/images/signup.svg";
import { SignupType } from "./Signup.types.js";
import { validateEmail } from "@/helpers/auth";
import { useRouter } from "next/router";
import LoadingSpinner from "../genericComponents/LoadingSpinner";

const defaultSignupData = {
  name: "",
  email: "",
  password: "",
  confirmation: "",
};

const Signup = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [signupData, setSignupData] = useState<SignupType>(defaultSignupData);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formField: string = e.target.id;
    const userInput: SignupType = { ...signupData };
    userInput[formField as keyof typeof userInput] = e.target.value;
    setSignupData(userInput);
  };

  async function createUser(info: SignupType) {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

    return data;
  }

  const submitFormHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // === START BASIC VALIDATION ====

    const emailValid = validateEmail(signupData.email);

    if (
      !signupData.name ||
      !signupData.email ||
      signupData.password.trim().length < 6 ||
      !signupData.confirmation
    ) {
      console.log("Fields empty");
      return;
    }

    if (!emailValid) {
      console.log("Invalid email");
      return;
    }

    if (signupData.password !== signupData.confirmation) {
      console.log("The passwords don't match");
      return;
    }

    setIsLoading(true);

    //  === END BASIC VALIDATION ===

    // === SEND USER INFO TO DB ===

    try {
      const result = await createUser(signupData);
      router.push("/login");
    } catch (err: any) {
      setIsLoading(false);
      console.log(err.mesage || "Somthing went wrong");
    }
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
          <p className="text-indigo-900 text-sm font-semibold py-1 md:py-4">
            Create an account
          </p>

          <div className="flex flex-col text-gray-400 py-1 md:py-2">
            <label className="text-indigo-900 text-sm">Name</label>
            <input
              className="border border-gray-300 focus:border-indigo-400 rounded-lg mt-1 p-1 md:p-2 outline-none"
              type="text"
              id="name"
              onChange={handleInputChange}
            />
          </div>

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

          <div className="flex flex-col text-gray-400 py-1 md:py-2">
            <label className="text-indigo-900 text-sm">Confirm password</label>
            <input
              className="border border-gray-300 focus:border-indigo-400 rounded-lg mt-2 p-1 md:p-2 outline-none"
              type="password"
              id="confirmation"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-between text-gray-400 py-1 md:py-2">
            <p className="flex items-center">
              <input
                className="mr-2 outline-none"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <span className="text-indigo-900 text-[0.75rem]">
                I agree to RentEquip terms and conditions
              </span>
            </p>
          </div>

          <button
            className="flex justify-center items-center w-full my-2 md:my-5 py-1 md:py-2 bg-indigo-900 shadow-lg hover:shadow-indigo-500/50 text-white font-semibold rounded-lg disabled:bg-gray-500 disabled:hover:shadow-none"
            disabled={!isChecked || isLoading}
            type="submit"
          >
            {isLoading && <LoadingSpinner />}
            {isLoading && "Signin you in"}
            {!isLoading && "Sign in"}
          </button>

          <button
            disabled={isLoading}
            className="w-full my-1 md:my-2 py-1 md:py-2 bg-white shadow-lg hover:shadow-indigo-500/50 text-black font-semibold rounded-lg disabled:bg-gray-500 disabled:hover:shadow-none"
          >
            Sign in with Google
          </button>

          <Link
            href="/login"
            className="underline text-blue-600 text-sm hover:text-blue-800 visited:text-purple-600 py-2 md:py-4 flex justify-center items-center"
          >
            Already have an account? Log In
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
