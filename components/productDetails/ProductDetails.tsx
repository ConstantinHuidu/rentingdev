import Image from "next/image";
import React from "react";
import { BiLike, BiCommentAdd } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

type RatingStarProps = {
  status: string;
};

const RatingStar = ({ status }: RatingStarProps) => (
  <svg
    aria-hidden="true"
    className={`w-4 h-4 ${
      status === "yellow" ? "text-yellow-400" : "text-gray-200"
    }`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>First star</title>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

const ProductDetails = () => {
  return (
    <div className="container flex flex-col space-y-5 w-[85%] mx-auto py-5 justify-between items-center text-gray-700 dark:text-white pt-5">
      {/* Image and details container  */}
      <div className="flex flex-col space-y-5 md:space-y-0 md:space-x-3 md:flex-row w-full h-5/6 justify-center items-center border border-gray-400 rounded-lg py-5">
        <div className="flex flex-col justify-start items-center space-y-2 w-full h-full">
          <div className="flex flex-row justify-end items-end max-w-md w-1/2 h-1/6">
            <span className="text-yellow-600 font-semibold text-md flex-1">
              200 Rents
            </span>
            <span className="text-yellow-600 font-semibold text-md">
              10 Reviews
            </span>
          </div>
          <div className="flex flex-col justify-start items-center w-full h-5/6 m-3">
            <div className="relative max-w-md mx-auto w-full h-[150px] md:w-full md:h-[300px]">
              <Image
                alt="product"
                src="https://images.unsplash.com/photo-1513467655676-561b7d489a88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                fill
                className="object-cover rounded-3xl p-3"
              />
            </div>
            <p className="text-center lg:text-left text-slate-400 font-semibold text-sm max-w-md p-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              nemo minima eveniet saepe? Atque, eos voluptatum blanditiis optio
              dolorum mollitia.
            </p>
          </div>
        </div>
        {/* Product details side  */}
        <div className="flex flex-col justify-start items-start space-y-5 lg:space-y-10 w-full h-full text-center px-5 md:pt-10">
          <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-semibold">
            Product name
          </h2>
          {/* Price preview  */}
          <div className="flex justify-start items-start space-x-10 w-3/4 max-w-sm text-md text-gray-800 dark:text-gray-100 font-semibold">
            <span className="border border-gray-200 rounded-full p-1 w-1/2">
              100/day
            </span>
            <span className="border border-gray-200 rounded-full p-1 w-1/2">
              200/week
            </span>
          </div>

          {/* DATES  */}

          <div className="flex flex-col justify-start items-start w-full space-y-3 md:space-y-7">
            <div className="flex flex-row justify-between items-center space-x-5 w-[90%] md:w-2/3">
              <div className="flex justify-start items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Start date
                </p>
              </div>
              <input
                type="date"
                className="border border-gray-500 focus:border-yellow-600 outline-none p-1 px-5 rounded-full h-8 w-3/5 md:w-4/6 dark:text-gray-800 text-sm"
              />
            </div>
            <div className="flex flex-row justify-between items-center space-x-5 w-[90%] md:w-2/3">
              <div className="flex justify-start items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  End date
                </p>
              </div>
              <input
                type="date"
                className="border border-gray-500 focus:border-yellow-600 outline-none p-1 px-5 rounded-full h-8 w-3/5 md:w-4/6 dark:text-gray-800 text-sm"
              />
            </div>
          </div>

          {/* DELIVERY OPTIONS  */}

          <div className="flex justify-center items-center space-x-10 w-full">
            <div className="flex space-x-2">
              <input type="checkbox" />
              <p>Pickup</p>
            </div>
            <div className="flex space-x-2">
              <input type="checkbox" />
              <p>Delivery</p>
            </div>
          </div>

          {/* ORANGE LINE  */}
          <div className="w-full md:w-10/12 h-0.5 bg-yellow-600"></div>

          {/* TOTAL Price  */}
          <div className="flex justify-between items-center w-full md:w-10/12 font-semibold text-gray-800 dark:text-gray-100">
            <span>Total</span>
            <span>200</span>
          </div>

          {/* ADD TO CART  */}
          <button
            className="w-2/3 lg:w-10/12 lg:mx-0 mx-auto bg-gray-800 hover:bg-yellow-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-yellow-500 text-lg font-semibold text-white rounded-2xl py-2 duration-200"
            type="submit"
          >
            Add to cart
          </button>
        </div>
      </div>
      {/* Product review container  */}
      <div className="w-full flex flex-col justify-start items-start space-y-5 pb-5 pr-5">
        <h1 className="mt-1 text-2xl font-bold mb-3">Reviews</h1>

        {/* first review  */}
        <div className="flex justify-start items-center w-full md:space-x-5">
          <div className="hidden md:flex flex-col justify-center items-start space-y-1 w-28 flex-none">
            <div className="w-14 h-14 rounded-full bg-yellow-600 flex justify-center items-center flex-none">
              <p className="text-2xl text-white font-semibold tracking-widest">
                IP
              </p>
            </div>
            <h5 className="text-sm">Ion Popescu</h5>
            <h5 className="text-sm">20.03.2023</h5>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-start items-center space-x-3">
              <h2 className="text-xl font-semibold">Good</h2>
              <span className="flex items-center">
                <RatingStar status="yellow" />
                <RatingStar status="yellow" />
                <RatingStar status="yellow" />
                <RatingStar status="yellow" />
                <RatingStar status="gray" />
              </span>
            </div>
            <h5 className="md:hidden text-sm">Ion Popescu</h5>
            <h5 className="md:hidden text-sm">20.03.2023</h5>
            <p className="text-sm text-gray-400 max-w-xl md:max-w-2xl lg:max-w-7xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              nulla?
            </p>
            <div className="flex justify-start items-center space-x-3 text-blue-700 dark-text-blue-500">
              <span className=" cursor-pointer">
                <AiOutlineLike />
              </span>
              <span className="w-[1px] h-3 bg-slate-400"></span>
              <span className="flex items-center justify-center space-x-3 cursor-pointer">
                <BiCommentAdd />
                <p>Add a comment</p>
              </span>
            </div>
          </div>
        </div>

        {/* line divider  */}

        <div className="w-full h-0.5 bg-gray-100 dark:bg-gray-700"></div>

        {/* second review  */}
        <div className="flex justify-start items-center w-full md:space-x-5">
          <div className="hidden md:flex flex-col justify-center items-start space-y-1 w-28 flex-none">
            <div className="w-14 h-14 rounded-full bg-yellow-600 flex justify-center items-center flex-none">
              <p className="text-2xl text-white font-semibold tracking-widest">
                EI
              </p>
            </div>
            <h5 className="text-sm">Elena Ionescu</h5>
            <h5 className="text-sm">07.02.2023</h5>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-start items-center space-x-3">
              <h2 className="text-xl font-semibold">Average</h2>
              <span className="flex items-center">
                <RatingStar status="yellow" />
                <RatingStar status="yellow" />
                <RatingStar status="yellow" />
                <RatingStar status="gray" />
                <RatingStar status="gray" />
              </span>
            </div>
            <h5 className="md:hidden text-sm">Elena Ionescu</h5>
            <h5 className="md:hidden text-sm">07.02.2023</h5>
            <p className="text-sm text-gray-400 max-w-xl md:max-w-2xl lg:max-w-7xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              quaerat, laboriosam nostrum rerum magnam accusamus, eligendi
              voluptatum labore minima doloribus vitae quidem officia dolorum
              numquam, eaque quae. Odit, dignissimos harum.
            </p>
            <div className="flex justify-start items-center space-x-3 text-blue-700 dark-text-blue-500">
              <span className=" cursor-pointer">
                <AiOutlineLike />
              </span>
              <span className="w-[1px] h-3 bg-slate-400"></span>
              <span className="flex items-center justify-center space-x-3 cursor-pointer">
                <BiCommentAdd />
                <p>Add a comment</p>
              </span>
            </div>
          </div>
        </div>

        {/* line divider  */}

        <div className="w-full h-0.5 bg-gray-100 dark:bg-gray-700"></div>

        {/* third review  */}
        <div className="flex justify-start items-center w-full md:space-x-5">
          <div className="hidden md:flex flex-col justify-center items-start space-y-1 w-28 flex-none">
            <div className="w-14 h-14 rounded-full bg-yellow-600 flex justify-center items-start flex-none">
              <BsFillPersonFill className="text-[3.2rem] text-white" />
            </div>
            <h5 className="text-sm">Bogdan Petrescu</h5>
            <h5 className="text-sm">10.04.2023</h5>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-start items-center space-x-3">
              <h2 className="text-xl font-semibold">Great</h2>
              <span className="flex items-center">
                <RatingStar status="yellow" />
                <RatingStar status="yellow" />
                <RatingStar status="yellow" />
                <RatingStar status="yellow" />
                <RatingStar status="yellow" />
              </span>
            </div>
            <h5 className="md:hidden text-sm">Bogdan Petrescu</h5>
            <h5 className="md:hidden text-sm">10.04.2023</h5>
            <p className="text-sm text-gray-400 max-w-xl md:max-w-2xl lg:max-w-7xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              corporis fugiat rem corrupti quos iure iste tenetur non quaerat
              accusamus vitae blanditiis voluptas consequatur, ducimus iusto
              expedita nam eius veritatis odit laborum totam eos? Obcaecati rem
              cupiditate omnis magni qui, vel officiis ea fugiat, ad quia porro
              aperiam! Modi a itaque doloribus laudantium exercitationem facere,
              veritatis at officiis beatae enim rerum dolorem, ducimus
              temporibus magni eaque vel excepturi ab, reiciendis quidem
              blanditiis quibusdam maxime.
            </p>
            <div className="flex justify-start items-center space-x-3 text-blue-700 dark-text-blue-500">
              <span className=" cursor-pointer">
                <AiOutlineLike />
              </span>
              <span className="w-[1px] h-3 bg-slate-400"></span>
              <span className="flex items-center justify-center space-x-3 cursor-pointer">
                <BiCommentAdd />
                <p>Add a comment</p>
              </span>
            </div>
          </div>
        </div>

        {/* line divider  */}

        <div className="w-full h-0.5 bg-gray-100 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default ProductDetails;
