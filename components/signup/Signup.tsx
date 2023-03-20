import React from "react";
import Link from "next/link";
import Image from "next/image";
import signup from "../../assets/images/signup.png";

const Signup = () => {
  return (
    <div className="grid md:grid-cols-5 gap-4 m-4 h-full md:w-[80%] mx-auto">
      <div className="relative hidden md:col-span-3 md:flex justify-center items-center my-4">
        <Image src={signup} alt="signup" className="object-scale-down" fill />
      </div>
      <div className="col-span-2 md:col-span-2 flex justify-center">
        <form className="w-10/12 md:w-full flex flex-col p-3 md:p-8">
          <h2 className="text-xl md:text-4xl font-bold">
            <span className="text-indigo-900">Welcome to</span>{" "}
            <span className="text-yellow-600 opacity-80">RentEquip,</span>
          </h2>
          <p className="text-indigo-900 text-sm font-semibold py-1 md:py-4">
            Create an account
          </p>

          <div className="flex flex-col text-gray-400 py-1 md:py-2">
            <label className="text-indigo-900 text-sm">Name</label>
            <input
              className="border border-gray-300 focus:border-indigo-400 rounded-lg mt-1 p-1 md:p-2 outline-none"
              type="text"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-1 md:py-2">
            <label className="text-indigo-900 text-sm">E-mail</label>
            <input
              className="border border-gray-300 focus:border-indigo-400 rounded-lg mt-2 p-1 md:p-2 outline-none"
              type="email"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-1 md:py-2">
            <label className="text-indigo-900 text-sm">Password</label>
            <input
              className="border border-gray-300 focus:border-indigo-400 rounded-lg mt-2 p-1 md:p-2 outline-none"
              type="password"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-1 md:py-2">
            <label className="text-indigo-900 text-sm">Confirm password</label>
            <input
              className="border border-gray-300 focus:border-indigo-400 rounded-lg mt-2 p-1 md:p-2 outline-none"
              type="password"
            />
          </div>

          <div className="flex justify-between text-gray-400 py-1 md:py-2">
            <p className="flex items-center">
              <input className="mr-2 outline-none" type="checkbox" />
              <span className="text-indigo-900 text-[0.75rem]">
                I agree to RentEquip terms and conditions
              </span>
            </p>
          </div>

          <button className="w-full my-2 md:my-5 py-1 md:py-2 bg-indigo-900 shadow-lg hover:shadow-indigo-500/50 text-white font-semibold rounded-lg">
            Sign in
          </button>

          <button className="w-full my-1 md:my-2 py-1 md:py-2 bg-white shadow-lg hover:shadow-indigo-500/50 text-black font-semibold rounded-lg">
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
