import { DelivaryIcon, PayIcon, SafeIcon } from "@/public";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="bg-primary text-white py-8">
      <div className="container mx-auto flex md:flex-row flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center">
          <Image src={DelivaryIcon} alt="icon" />
          <h3 className="mt-3">Free delivary</h3>
        </div>
        <div className="flex flex-col items-center">
          <Image src={SafeIcon} alt="icon" />
          <h3 className="mt-3">Secure Transactions</h3>
        </div>
        <div className="flex flex-col items-center">
          <Image src={PayIcon} alt="icon" />
          <h3 className="mt-3">Pay on Delivery</h3>
        </div>
      </div>
    </div>
  );
};

export default Feature;
