import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderDataProps {
  title: string;
  description: string;
  data: Array<{
    id: number | string;
    img: string;
    name: string;
  }>;
}

const SliderData: React.FC<SliderDataProps> = ({
  title,
  description,
  data,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    // prevArrow: false,
    // nextArrow: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className="py-[75px] bg-mainBg bg-opacity-30">
      <div className="container mx-auto">
        <div className="px-6">
          <h2 className="mb-10 text-5xl text-subColor font-bold  text-center">
            {title}
          </h2>
          <p className="mb-10 text-xl text-black font-light  text-center">
            {description}
          </p>

          <Slider {...settings}>
            {data?.map((slide, index) => (
              <div key={index} className="pt-[90px]  w-full">
                <div className="flex flex-col justify-center items-center w-full px-2 md:px-4">
                  <div className="">
                    <Image
                      src={slide.img}
                      alt={`clientImg-${index}`}
                      className="mx-auto rounded-[50%]"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="text-center px-5 pb-[30px] w-full ">
                    <h2 className="text-sm3 font-light  text-mainBg mt-4">
                      {slide.name}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderData;
