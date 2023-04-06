import Image from "next/image";
import React from "react";
import ReviewCard from "./components/ReviewCard";
import { DUMMY_REVIEWS } from "./components/DummyProductReviews";
import { DUMMY_PRODUCT_INFO } from "./components/DummyProductReviews";

const ProductDetails = () => {
  const {
    productName,
    imgSrc,
    productDescription,
    pricePerDay,
    pricePerWeek,
    countRents,
    countReviews,
  } = DUMMY_PRODUCT_INFO;
  return (
    <div className="container flex flex-col space-y-5 w-[85%] mx-auto py-5 justify-between items-center text-gray-700 dark:text-white pt-5">
      {/* Image and details container  */}
      <div className="flex flex-col space-y-5 md:space-y-0 md:space-x-3 md:flex-row w-full h-5/6 justify-center items-center border border-gray-400 rounded-lg py-5">
        <div className="flex flex-col justify-start items-center space-y-2 w-full h-full">
          <div className="flex flex-row justify-end items-end max-w-md w-1/2 h-1/6">
            <span className="text-yellow-600 font-semibold text-md flex-1">
              {`${countRents} rents`}
            </span>
            <span className="text-yellow-600 font-semibold text-md">
              {`${countReviews} reviews`}
            </span>
          </div>
          <div className="flex flex-col justify-start items-center w-full h-5/6 m-3">
            <div className="relative max-w-md mx-auto w-full h-[150px] md:w-full md:h-[300px]">
              <Image
                alt="product"
                src={imgSrc}
                fill
                className="object-cover rounded-3xl p-3"
              />
            </div>
            <p className="text-center lg:text-left text-slate-400 font-semibold text-sm max-w-md p-3">
              {productDescription}
            </p>
          </div>
        </div>
        {/* Product details side  */}
        <div className="flex flex-col justify-start items-start space-y-5 lg:space-y-10 w-full h-full text-center px-5 md:pt-10">
          <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-semibold">
            {productName}
          </h2>
          {/* Price preview  */}
          <div className="flex justify-start items-start space-x-10 w-3/4 max-w-sm text-md text-gray-800 dark:text-gray-100 font-semibold">
            <span className="border border-gray-200 rounded-full p-1 w-1/2">
              {`${pricePerDay}/day`}
            </span>
            <span className="border border-gray-200 rounded-full p-1 w-1/2">
              {`${pricePerWeek}/week`}
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
        {DUMMY_REVIEWS.map((item) => (
          <ReviewCard
            key={item.id}
            reviewer={item.reviewer}
            date={item.date}
            reviewTitle={item.reviewTitle}
            reviewBody={item.reviewBody}
            starCount={item.starCount}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
