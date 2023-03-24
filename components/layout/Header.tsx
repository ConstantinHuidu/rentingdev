import Link from "next/link";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import DarkModeButton from "../genericComponents/DarkModeButton";
import { DesktopLink, MobileLink } from "./HeaderLinks";

type HeaderPropsType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const Header = ({ darkMode, toggleDarkMode }: HeaderPropsType) => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `w-6 h-1 bg-black my-1 dark:bg-white dark:group-hover:bg-gray-900 transition ease transform duration-300`;

  const mobileDrawer = `absolute top-20 h-screen w-full bg-white  transition-all transform duration-300 ease-in-out dark:bg-gray-900`;

  const handleSignOut = () => {
    signOut();
  };

  return (
    <nav className="fixed top-0 left-0 bg-white w-full h-[10vh] dark:bg-gray-900 transition-all duration-300">
      <div className="flex justify-center items-center">
        <span className="absolute w-4/5 bottom-3 h-0.5 bg-yellow-600"></span>
      </div>
      <div className="container w-[80%] m-auto h-full flex justify-between items-center text-gray-700">
        <h1 className="pl-8 py-4 text-4xl text-yellow-600 font-bold">
          <Link
            className="hover:bg-gray-200 rounded-lg py-1 px-4 transition-all duration-300"
            href="/"
          >
            RentEquip
          </Link>
        </h1>
        <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer uppercase dark:text-white">
          <DesktopLink href="/about" label="About" />
          <DesktopLink href="/products" label="Products" />
          <DesktopLink href="/contact" label="Contacts" />
          {!session?.user && <DesktopLink href="/login" label="Login" />}
          {session?.user && (
            <DesktopLink href="" label="Sign out" handleClick={handleSignOut} />
          )}
          <DarkModeButton toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </ul>
        <div className="flex md:hidden justify-between items-center dark:text-white">
          <div className="block md:hidden">
            <DarkModeButton
              toggleDarkMode={toggleDarkMode}
              darkMode={darkMode}
            />
          </div>
          <button
            className="block md:hidden py-3 px-4 mx-2rounded focus:outline-none hover:bg-gray-200 rounded-lg group transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "-rotate-45 translate-y-2 group-hover:opacity-100" : ""
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 -translate-y-2 transition ease transform duration-300 group-hover:opacity-100"
                  : ""
              }`}
            />
            <div
              className={`${mobileDrawer} ${
                isOpen ? "right-0 opacity-100 z-10" : "-right-full opacity-0"
              }`}
            >
              <ul className="flex flex-col items-center w-full text-base pt-10 font-semibold uppercase">
                <MobileLink href="/about" label="About" />
                <MobileLink href="/products" label="Products" />
                <MobileLink href="/contact" label="Contact" />
                {!session?.user && <MobileLink href="/login" label="Log in" />}
                {session?.user && (
                  <MobileLink
                    href=""
                    label="Sign out"
                    handleClick={handleSignOut}
                  />
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
