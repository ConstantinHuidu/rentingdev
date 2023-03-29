import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const WhyChooseUs = () => {
  return (
    <div className="flex justify-center items-center w-full h-[450px] md:h-[550px] md:mb-10">
      <div className="hidden md:flex justify-center items-center bg-cyan-500 w-[27%] h-full rounded-r-2xl">
        Img placeholder
      </div>
      <div className="flex flex-col justify-start items-start bg-slate-200 dark:bg-slate-700 w-full md:w-[73%] h-5/6 my-auto rounded-2xl md:rounded-none">
        <div className="flex justify-end items-center w-full mt-8 pr-[15%] text-yellow-600 text-xl font-bold uppercase tracking-widest">
          Why rentequip
        </div>
        <h1 className="mt-8  px-5 md:px-[19%] text-indigo-900 dark:text-white text-lg md:text-4xl font-semibold tracking-widest">
          We offer the best experience with our rental deals
        </h1>
        <div className="flex flex-col justify-center items-start px-5 md:px-[19%] mt-8 gap-10">
          <div className="flex justify-center items-center gap-2">
            <BsCheckCircle className="md:text-3xl text-green-600 dark:text-green-400" />
            <p className="md:text-xl text-indigo-900 dark:text-white">
              Many pickup locations
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <BsCheckCircle className="md:text-3xl text-green-600 dark:text-green-400" />
            <p className="md:text-xl text-indigo-900 dark:text-white">
              Fast and easy booking
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <BsCheckCircle className="md:text-3xl text-green-600 dark:text-green-400" />
            <p className="md:text-xl text-indigo-900 dark:text-white">
              Satisfied customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
