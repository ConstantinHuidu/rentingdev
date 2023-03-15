import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[10vh] flex justify-between items-center p-4">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default Header;
