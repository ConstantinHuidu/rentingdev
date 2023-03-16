import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="w-full h-[80vh] mt-[10vh] bg-green-100">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
