import { RatingIcon } from "@/public";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const CustomerReview = () => {
  return (
    <div className="lg:w-2/5 lg:mb-0 mb-12 bg-primary text-white px-5 py-10 rounded-[27px]">
      <h3 className="mb-3 ml-3 text-xl">Customer reviews</h3>
      <div>
        <div className="flex items-center gap-1">
          <Image src={RatingIcon} alt="icon" width={20} />
          <Image src={RatingIcon} alt="icon" width={20} />
          <Image src={RatingIcon} alt="icon" width={20} />
          <Image src={RatingIcon} alt="icon" width={20} />
          <span className="font-bold ml-3 text-xl">3.6 out of 5</span>
        </div>
        <div className="flex items-center w-2/3 my-5 gap-2">
          <Progress value={90} />
          <span>90%</span>
        </div>
        <div className="flex items-center w-2/3 my-5 gap-2">
          <Progress value={50} />
          <span>50%</span>
        </div>
        <div className="flex items-center w-2/3 my-5 gap-2">
          <Progress value={30} />
          <span>30%</span>
        </div>
        <div className="flex items-center w-2/3 my-5 gap-2">
          <Progress value={20} />
          <span>20%</span>
        </div>
        <div className="mt-10">
          <p className="mb-3">Review this product</p>
          <p>Share your thoughts with other customers</p>
        </div>
        <div className="mt-8 mx-14">
          <Button variant="secondary" className="w-full font-bold">
            write a product review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
