import Link from "next/link";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { type } from "os";
import DarkModeButton from "../genericComponents/DarkModeButton";

type HeaderPropsType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const Header = ({ darkMode, toggleDarkMode }: HeaderPropsType) => {
  const { data: session, status } = useSession();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <nav className="fixed top-0 left-0 bg-white w-full h-[10vh] shadow dark:bg-gray-900">
      <div className="container m-auto h-full flex justify-between items-center text-gray-700">
        <h1 className="pl-8 py-4 text-4xl text-yellow-600 font-bold">
          <Link className="hover:bg-gray-600 rounded-lg py-4 px-6" href="/">
            RentEquip
          </Link>
        </h1>
        <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer uppercase dark:text-white">
          <Link
            className="hover:bg-gray-200 rounded-lg py-4 px-6 dark:hover:text-black"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:bg-gray-200 rounded-lg py-4 px-6"
            href="/products"
          >
            Products
          </Link>
          <Link
            className="hover:bg-gray-200 rounded-lg py-4 px-6"
            href="/contact"
          >
            Contact
          </Link>
          {!session?.user && (
            <Link
              className="hover:bg-gray-200 rounded-lg py-4 px-6"
              href="/login"
            >
              Log in
            </Link>
          )}
          {/* <Link
            className="hover:bg-gray-200 rounded-lg py-4 px-6"
            href="/signup"
          >
            Signup
          </Link> */}
          {session?.user && (
            <Link
              onClick={handleSignOut}
              className="hover:bg-gray-200 rounded-lg py-4 px-6"
              href="/signup"
            >
              Sign out
            </Link>
          )}
          {/* <button onClick={toggleDarkMode}>Toggle DarkMode</button> */}
          <DarkModeButton toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </ul>
        <div className="flex md:hidden justify-center items-center dark:text-white">
          <div className="block md:hidden">
            <DarkModeButton
              toggleDarkMode={toggleDarkMode}
              darkMode={darkMode}
            />
          </div>
          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-7 h-1 bg-gray-600 mb-1 dark:bg-white"></div>
            <div className="w-7 h-1 bg-gray-600 mb-1 dark:bg-white"></div>
            <div className="w-7 h-1 bg-gray-600 dark:bg-white"></div>
            <div className="absolute top-14 -right-full h-screen w-full bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 group-focus:z-10 transition-all duration-300">
              <ul className="flex flex-col items-center w-full text-base pt-10 uppercase">
                <Link
                  className="hover:bg-gray-200 rounded-lg py-4 px-6 w-full cursor-pointer"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="hover:bg-gray-200 rounded-lg py-4 px-6 w-full cursor-pointer"
                  href="/products"
                >
                  Products
                </Link>
                <Link
                  className="hover:bg-gray-200 rounded-lg py-4 px-6 w-full cursor-pointer"
                  href="/contact"
                >
                  Contact
                </Link>
                {!session?.user && (
                  <Link
                    className="hover:bg-gray-200 rounded-lg py-4 px-6 w-full cursor-pointer"
                    href="/login"
                  >
                    Log in
                  </Link>
                )}
                {/* <Link
                className="hover:bg-gray-200 rounded-lg py-4 px-6 w-full cursor-pointer"
                href="/signup"
              >
                Signup
              </Link> */}
                {session?.user && (
                  <Link
                    onClick={handleSignOut}
                    className="hover:bg-gray-200 rounded-lg py-4 px-6 w-full cursor-pointer"
                    href="/signup"
                  >
                    Sign out
                  </Link>
                )}
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
