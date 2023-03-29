import React from "react";
import HomePageHero from "./components/HomePageHero";
import TopChoices from "./components/TopChoices";
import WhyChooseUs from "./components/WhyChooseUs";

const HomePageContainer = () => {
  return (
    <div className="flex flex-col w-[85%] h-full mx-auto justify-center items-center text-gray-700 dark:text-white">
      <HomePageHero />
      <TopChoices />
      <WhyChooseUs />
    </div>
  );
};

export default HomePageContainer;
