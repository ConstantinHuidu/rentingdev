import { ProductDetailsType, ReviewCardProps } from "./ProductDetails.types";

export const DUMMY_REVIEWS: ReviewCardProps[] = [
  {
    id: "review1",
    reviewer: "Sorin Preda",
    date: "20.02.2023",
    reviewTitle: "Good",
    reviewBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse dolor, sint adipisci dicta numquam reprehenderit totam soluta repellendus exercitationem est omnis aperiam, eligendi impedit officiis eaque magni hic ullam incidunt consequatur sapiente. Asperiores, architecto",
    starCount: 4,
  },
  {
    id: "review2",
    reviewer: "Elena Ionescu",
    date: "14.03.2023",
    reviewTitle: "Average",
    reviewBody:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis nemo dicta delectus vitae, autem qui tenetur ut soluta eveniet nulla!",
    starCount: 3,
  },
  {
    id: "review3",
    reviewer: "Bogdan Petrescu",
    date: "10.04.2023",
    reviewTitle: "Great",
    reviewBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corporis fugiat rem corrupti quos iure iste tenetur non quaerat accusamus vitae blanditiis voluptas consequatur, ducimus iusto expedita nam eius veritatis odit laborum totam eos? Obcaecati rem cupiditate omnis magni qui, vel officiis ea fugiat, ad quia porro aperiam! Modi a itaque doloribus laudantium exercitationem facere, veritatis at officiis beatae enim rerum dolorem, ducimus temporibus magni eaque vel excepturi ab, reiciendis quidem blanditiis quibusdam maxime.",
    starCount: 5,
  },
  {
    id: "review4",
    reviewer: "Maria Enescu",
    date: "11.02.2023",
    reviewTitle: "Poor",
    reviewBody:
      "Modi a itaque doloribus laudantium exercitationem facere, veritatis at officiis beatae enim rerum dolorem, ducimus temporibus magni eaque vel excepturi ab, reiciendis quidem blanditiis quibusdam maxime.",
    starCount: 2,
  },
  {
    id: "review5",
    reviewer: "cosmin popa",
    date: "03.01.2023",
    reviewTitle: "Awesome",
    reviewBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore labore voluptatem enim! Autem non expedita quia corporis ad velit explicabo cumque ducimus inventore excepturi veritatis numquam maxime tenetur error illum tempora, quas minima iusto nihil aliquam officia eos sit. Consequatur architecto, accusantium nobis temporibus sunt totam ex deserunt dolor porro autem illo dignissimos commodi incidunt praesentium eligendi a eaque earum? Inventore velit beatae, delectus harum obcaecati quaerat est debitis nulla blanditiis voluptates commodi totam, ipsam, facilis ratione exercitationem temporibus? Est aliquam officiis incidunt vel nihil?",
    starCount: 5,
  },
];

export const DUMMY_PRODUCT_INFO: ProductDetailsType = {
  productName: "Circular saw",
  imgSrc:
    "https://images.unsplash.com/photo-1513467655676-561b7d489a88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  productDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nemo minima eveniet saepe? Atque, eos voluptatum blanditiis optio dolorum mollitia.",
  pricePerDay: 100,
  pricePerWeek: 200,
  countRents: 130,
  countReviews: 15,
};
