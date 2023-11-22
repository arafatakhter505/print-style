import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { RatingIcon } from "@/public";
  import Image from "next/image";
  
  const ProductCard = ({ product }) => {
    const { img, title, price } = product;
    return (
      <Card>
        <CardHeader>
          <Image src={img} alt="product" className="w-full" />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl">{price}</CardTitle>
          <div className="flex items-center gap-1">
            <Image src={RatingIcon} alt="icon" width={20} />
            <Image src={RatingIcon} alt="icon" width={20} />
            <Image src={RatingIcon} alt="icon" width={20} />
            <Image src={RatingIcon} alt="icon" width={20} />
          </div>
        </CardContent>
        <CardFooter>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardFooter>
      </Card>
    );
  };
  
  export default ProductCard;
  