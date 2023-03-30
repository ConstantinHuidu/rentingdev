import React from "react";
import { RiToolsLine } from "react-icons/ri";
import { GoCalendar } from "react-icons/go";
import { FiPackage } from "react-icons/fi";
import Image from "next/image";

const HomePageHero = () => {
  return (
    <div className="grid md:grid-cols-3 w-full h-[350px] md:h-[550px]">
      <div className="relative md:col-span-2 flex flex-col">
        <div className="absolute top-2 z-10 flex flex-col justify-center items-start gap-1 h-2/5 md:w-[95%] w-full mt-5 md:mt-14 md:ml-14 bg-slate-200 dark:bg-slate-600 rounded-l-2xl text-xl md:text-5xl font-bold text-indigo-900 dark:text-white">
          <p className=" pl-10 tracking-widest">Easy and fast</p>
          <p className="pl-10 tracking-widest">
            way to <span className="text-yellow-600">rent</span>
          </p>
          <p className="pl-10 tracking-widest">
            your <span className="text-yellow-600">tools</span>
          </p>
        </div>
        <div className="absolute top-36 md:top-56 z-0 flex justify-around items-center bg-yellow-600 h-2/5 md:w-[95%] w-full rounded-r-2xl">
          <div className="flex flex-col justify-center items-center gap-2">
            <RiToolsLine className="text-5xl" />
            <p className="font-semibold">Choose tool</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <GoCalendar className="text-5xl" />

            <p className="font-semibold">Pick-up date</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <FiPackage className="text-5xl" />
            <p className="font-semibold">Book your tool</p>
          </div>
        </div>
      </div>
      <div className="relative hidden md:col-span-1 z-20 md:flex justify-center items-center my-auto h-[90%] rounded-l-3xl">
        <div className="grid">
          <Image
            src="https://images.unsplash.com/photo-1518709414768-a88981a4515d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Hero"
            className="rounded-l-2xl object-cover"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
