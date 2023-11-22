import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
} from "@/public";
import ProductCard from "../productCard/productCard";

const RelatedProducts = () => {
  const productsList = [
    {
      img: Product1,
      price: "399",
      title: "Men’s Cotton T-shirts ",
    },
    {
      img: Product2,
      price: "399",
      title: "Men’s Cotton T-shirts ",
    },
    {
      img: Product3,
      price: "399",
      title: "Men’s Cotton T-shirts ",
    },
    {
      img: Product4,
      price: "399",
      title: "Men’s Cotton T-shirts ",
    },
    {
      img: Product5,
      price: "399",
      title: "Men’s Cotton T-shirts ",
    },
    {
      img: Product6,
      price: "399",
      title: "Men’s Cotton T-shirts ",
    },
    {
      img: Product7,
      price: "399",
      title: "Men’s Cotton T-shirts ",
    },
    {
      img: Product8,
      price: "399",
      title: "Men’s Cotton T-shirts ",
    },
  ];

  return (
    <div className="container mx-auto my-20">
      <h2 className="text-center font-bold text-2xl">Related Products</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-12 lg:mx-12">
        {productsList.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
