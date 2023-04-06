import { StarRatingType } from "./ProductDetails.types";

const StarRating = ({ starsCount }: StarRatingType) => {
  const dummyArray = [1, 2, 3, 4, 5];

  const starArray = dummyArray.map((el, index) =>
    index < starsCount ? (
      <span className="text-yellow-500 text-xl">&#9733;</span>
    ) : (
      <span className="text-yellow-500 text-xl">&#9734;</span>
    )
  );
  return (
    <>
      {starArray.map((el, index) => (
        <button key={index}>{el}</button>
      ))}
    </>
  );
};

export default StarRating;
