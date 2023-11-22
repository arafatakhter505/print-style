import {
  AddCartIcon,
  BuyIcon,
  Product1,
  Product2,
  Product3,
  Product4,
} from "@/public";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

const ImgGallery = () => {
  const [viewImg, setViewImg] = useState(Product2);
  const imgList = [Product2, Product1, Product3, Product4];

  return (
    <div className="lg:w-1/2 lg:pr-11">
      <div className="flex lg:flex-row flex-col-reverse gap-8">
        <div className="lg:block flex items-center md:gap-7 gap-2">
          {imgList.map((img, index) => (
            <Image
              key={index}
              onClick={() => setViewImg(img)}
              src={img}
              className="w-[80px] mb-3 cursor-pointer"
              alt="product"
            />
          ))}
        </div>
        <div className="lg:w-[78%]">
          <Image src={viewImg} alt="product" className="w-full" />
        </div>
      </div>
      <div className="flex items-center gap-12 my-8 lg:ml-24">
        <Button>
          <Image src={AddCartIcon} alt="icon" className="mr-3 w-6" /> Add to
          Cart
        </Button>
        <Button>
          <Image src={BuyIcon} alt="icon" className="mr-3 w-6" /> Add to Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ImgGallery;
