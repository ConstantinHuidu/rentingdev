import React from "react";
import StarRating from "./StarRating";
import { BiLike, BiCommentAdd } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { ReviewCardProps } from "./ProductDetails.types";

const ReviewCard = ({
  reviewer,
  date,
  reviewTitle,
  reviewBody,
  starCount,
}: ReviewCardProps) => {
  const getReviewerInitials = (reviewerName: string) => {
    return reviewerName
      .split(" ")
      .map(function (item) {
        return item[0].toUpperCase();
      })
      .join("");
  };

  return (
    <>
      <div className="flex justify-start items-center w-full md:space-x-5">
        <div className="hidden md:flex flex-col justify-center items-start space-y-1 w-28 flex-none">
          <div className="w-14 h-14 rounded-full bg-yellow-600 flex justify-center items-center flex-none">
            <p className="text-2xl text-white font-semibold tracking-widest">
              {getReviewerInitials(reviewer)}
            </p>
          </div>
          <h5 className="text-sm">{reviewer}</h5>
          <h5 className="text-sm">{date}</h5>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-start items-center space-x-3">
            <h2 className="text-xl font-semibold">{reviewTitle}</h2>
            <span className="flex items-center">
              <StarRating starsCount={starCount} />
            </span>
          </div>
          <h5 className="md:hidden text-sm">{reviewer}</h5>
          <h5 className="md:hidden text-sm">{date}</h5>
          <p className="text-sm text-gray-400 max-w-xl md:max-w-2xl lg:max-w-7xl">
            {reviewBody}
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
    </>
  );
};

export default ReviewCard;
