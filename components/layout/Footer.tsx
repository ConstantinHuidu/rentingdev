import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[10vh] bg-white dark:bg-gray-900 dark:text-white transition-all duration-300">
      <div className="flex justify-center items-center ">
        <span className="bg-yellow-600 h-0.5 w-4/5 mb-3"></span>
      </div>
      <div className="container px-6 flex justify-between items-center m-auto w-[80%] uppercase lg:font-semibold flex-col lg:flex-row text-gray-700 dark:text-white text-xs">
        <div>
          <Link
            className="hover:bg-gray-200  dark:hover:text-black rounded-lg py-2 px-6 w-full cursor-pointer "
            href="/about"
          >
            Help
          </Link>
          <Link
            className="hover:bg-gray-200  dark:hover:text-black rounded-lg py-2 px-6 w-full cursor-pointer"
            href="/about"
          >
            Privacy policy
          </Link>
        </div>
        <p>Copyright@2023</p>
      </div>
    </div>
  );
};

export default Footer;
