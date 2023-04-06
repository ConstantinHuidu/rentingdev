export type StarRatingType = {
  starsCount: number;
};

export type ReviewCardProps = {
  id?: string;
  reviewer: string;
  date: string;
  reviewTitle: string;
  reviewBody: string;
  starCount: number;
};

export type ProductDetailsType = {
  productName: string;
  imgSrc: string;
  productDescription: string;
  pricePerDay: number;
  pricePerWeek: number;
  countRents: number;
  countReviews: number;
};
