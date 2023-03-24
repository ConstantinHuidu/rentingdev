import Link from "next/link";
import React from "react";

type LinkTypeProps = {
  label: string;
  href: string;
  handleClick?: () => void;
};

export const DesktopLink = ({ label, href, handleClick }: LinkTypeProps) => (
  <Link
    className="hover:bg-gray-200 rounded-lg py-4 px-6 dark:hover:text-black transition-all duration-300"
    href={href}
    onClick={handleClick}
  >
    {label}
  </Link>
);
export const MobileLink = ({ href, label, handleClick }: LinkTypeProps) => (
  <Link
    className="hover:bg-gray-200 rounded-lg py-4 px-6 w-1/3 cursor-pointer text-black dark:text-white dark:hover:text-black transition-all duration-300"
    href={href}
    onClick={handleClick}
  >
    {label}
  </Link>
);
