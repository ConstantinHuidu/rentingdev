import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

const ProductCard = () => (
  <div className="flex flex-row md:flex-col w-full md:w-1/3 bg-stone-100 dark:bg-stone-700 rounded-2xl">
    <div className="relative flex justify-center items-center md:mx-auto w-2/5 md:w-3/5 h-[160px]  rounded-2xl my-5">
      <Image
        alt="productimg"
        src="https://images.unsplash.com/photo-1513467655676-561b7d489a88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        fill
        className="object-cover pl-2 md:pl-0"
      />
    </div>
    <hr className="h-0.5 bg-slate-500 mb-3" />
    <div className="bg-slate-500 h-[130px] w-0.5 mt-10 mx-5 md:hidden" />
    <div className="flex flex-col md:flex-row justify-center gap-7 md:gap-0 md:justify-between items-start md:items-center px-5 py-2">
      <p className="text-indigo-900 dark:text-white text-xl font-semibold">
        200 <span className="text-gray-400 text-sm">/ day</span>
      </p>
      <Link
        href={"/product-demo"}
        className="text-yellow-600 text-xl font-semibold"
      >
        Rent now
      </Link>
    </div>
  </div>
);

const TopChoices = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-[800px] md:h-[550px] md:mt-10">
      <div className="text-gray-400 dark:text-white text-md md:text-xl font-semibold uppercase mt-1 tracking-wider">
        <hr className="h-1 bg-yellow-500 mb-3"></hr>
        popular rental deals
      </div>
      <div className="text-indigo-900 dark:text-white text-xl md:text-4xl font-semibold mt-5 tracking-wider">
        <h1>Top choices from our clients</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center  gap-2 md:gap-7 w-full h-[640px] md:h-[300px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className="flex justify-center items-center w-full mt-10">
        <button className="flex justify-center items-center w-full md:w-1/3 h-12 bg-gray-700 text-white text-xl rounded-2xl tracking-wider font-semibold">
          <p className="pr-5">Show all tools</p>
          <HiArrowRight className="" />
        </button>
      </div>
      <div className="flex justify-center items-center w-full mt-5">
        <div className="w-[70%] md:w-1/6">
          <hr className="h-1 bg-yellow-500 mb-3"></hr>
        </div>
      </div>
    </div>
  );
};

export default TopChoices;
