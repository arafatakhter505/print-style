import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import { UploadIcon } from "@/public";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Details = () => {
  const [size, setSize] = useState("S");
  const [color, setColor] = useState("bg-red-700");
  const [quantity, setQuantity] = useState(1);
  const sizeList = ["S", "M", "L", "XL", "XXL"];
  const colors = ["bg-red-700", "bg-blue-700", "bg-gray-700", "bg-black"];

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className="lg:w-1/2">
      <h2 className="text-xl font-bold mb-5">Puma Polo T-shirts</h2>
      <ul className="list-disc ml-4">
        <li className="py-1">Brand:Puma(Orignal Merchandise)</li>
        <li className="py-1">
          Material:220 GSM Knitted Polycotton fabric.60% cotton 40% polyester.
        </li>
        <li className="py-1">Gender: Unisex</li>
        <li className="py-1">Collar: Polo Collar</li>
        <li className="py-1">Sleeves:Half-sleeves</li>
        <li className="py-1">
          Need help in designing?You can avail our Design Services
        </li>
        <li className="py-1">
          If you want blank product with no customization,just type a dot’’.’’
          in the upload design section and proceed
        </li>
        <li className="py-1">
          Note:color shade varitions are natural part of the manufacturing
          process and do not affect the quality or durabilty ofthe product
        </li>
      </ul>
      <h3 className="font-bold text-xl mt-2">SIZE</h3>
      <div className="mt-3">
        {sizeList.map((item) => (
          <Button
            key={item}
            variant="outline"
            size="icon"
            className={`rounded-none ${size === item && "border-primary"}`}
            onClick={() => setSize(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      <h3 className="font-bold text-xl my-2">Color</h3>
      <div className="flex items-center gap-12 flex-wrap">
        <div className="flex items-center gap-3">
          {colors.map((item) => (
            <Button
              key={item}
              onClick={() => setColor(item)}
              variant="link"
              className={`${
                color === item ? "w-10 h-10" : "w-8 h-8"
              } ${item} rounded-full`}
            ></Button>
          ))}
        </div>
        <div className="flex items-center">
          <Button
            onClick={decrementQuantity}
            variant="secondary"
            className="text-2xl rounded-none"
            size="icon"
          >
            -
          </Button>
          <Input
            className="outline-none w-[50px] rounded-none"
            value={quantity}
          />
          <Button
            onClick={incrementQuantity}
            variant="secondary"
            className="text-2xl rounded-none"
            size="icon"
          >
            +
          </Button>
        </div>
        <span className="font-bold text-xl">Price ₹600</span>
      </div>
      <div className="flex items-center gap-12 mt-12">
        <Button>
          <Image src={UploadIcon} alt="icon" className="mr-3 w-6" /> Upload
          Design
        </Button>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="specify loactiont" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Details;
