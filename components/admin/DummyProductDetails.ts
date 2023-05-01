type ProductDetailsAdminType = {
  id: string;
  productName: string;
  imgSrc: string;
  productDescription: string;
  pricePerDay: number;
  pricePerWeek: number;
  countRents: number;
  countReviews: number;
};

export const DUMMY_PRODUCTS_INFO: ProductDetailsAdminType[] = [
  {
    id: "1003",
    productName: "Circular saw",
    imgSrc:
      "https://images.unsplash.com/photo-1513467655676-561b7d489a88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    productDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nemo minima eveniet saepe? Atque, eos voluptatum blanditiis optio dolorum mollitia.",
    pricePerDay: 100,
    pricePerWeek: 200,
    countRents: 130,
    countReviews: 15,
  },
  {
    id: "1004",
    productName: "Drill",
    imgSrc:
      "https://images.unsplash.com/photo-1513467655676-561b7d489a88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    productDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nemo minima eveniet saepe? Atque, eos voluptatum blanditiis optio dolorum mollitia.",
    pricePerDay: 200,
    pricePerWeek: 400,
    countRents: 0,
    countReviews: 0,
  },
];
