import React from "react";
import { HiArrowRight } from "react-icons/hi";

const ProductCard = () => (
  <div className="flex flex-col w-1/3 ">
    <div className="flex justify-center items-center mx-auto w-3/5 h-[160px] bg-slate-300 dark:bg-slate-700 rounded-2xl my-5">
      img placeholder
    </div>
    <hr className="h-0.5 bg-slate-500 mb-3" />
    <div className="flex justify-between items-center px-5">
      <p className="text-indigo-900 dark:text-white text-xl font-semibold">
        200 <span className="text-gray-400 text-sm">/ day</span>
      </p>
      <p className="text-yellow-600 text-xl font-semibold">Rent now</p>
    </div>
  </div>
);

const TopChoices = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-[550px] -mt-10">
      <div className="text-gray-400 dark:text-white text-xl font-semibold uppercase mt-1 tracking-wider">
        <hr className="h-1 bg-yellow-500 mb-3"></hr>
        popular rental deals
      </div>
      <div className="text-indigo-900 dark:text-white text-4xl font-semibold mt-5 tracking-wider">
        <h1>Top choices from our clients</h1>
      </div>
      <div className="flex justify-around items-center gap-7 w-full h-[300px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className="flex justify-center items-center w-full mt-5">
        <button className="flex justify-center items-center w-1/3 h-12 bg-gray-700 text-white text-xl rounded-2xl tracking-wider font-semibold">
          <p className="pr-5">Show all tools</p>
          <HiArrowRight className="" />
        </button>
      </div>
      <div className="flex justify-center items-center w-full mt-5">
        <div className="w-1/6">
          <hr className="h-1 bg-yellow-500 mb-3"></hr>
        </div>
      </div>
    </div>
  );
};

export default TopChoices;
