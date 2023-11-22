import { Slider1 } from "@/public";
import Image from "next/image";

const ImgSlider = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div>
      <h2>img</h2>
    </div>
  );
};

export default ImgSlider;
