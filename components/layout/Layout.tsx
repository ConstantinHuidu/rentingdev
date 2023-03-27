import React, { ReactNode, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header toggleDarkMode={handleDarkMode} darkMode={darkMode} />
      <main className="w-full min-h-[80vh] mt-[10vh] bg-white dark:bg-gray-900 transition-all duration-300">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
