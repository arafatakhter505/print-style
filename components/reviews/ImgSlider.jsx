import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slider1, Slider2, Slider3, Slider4 } from "@/public";
import Image from "next/image";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoPlay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderItems = [Slider1, Slider2, Slider3, Slider4];

  return (
    <div className="mb-10">
      <Slider {...settings}>
        {sliderItems.map((item) => (
          <div>
            <Image src={item} alt="product" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImgSlider;
