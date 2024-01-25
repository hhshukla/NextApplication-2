import Image from "next/image";
import React, { useState } from "react";

interface CategoryListProps {
  title: string;
  SubTitle: string;
  Images: Array<{
    id: number;
    image_url: string;
    title: string;
    subTitle: string;
  }>;
}

const CategoryList = ({ title, SubTitle, Images }: CategoryListProps) => {
  const [Hovering, setHovering] = useState<number | null>(null);

  const handleMouseOver = (index: number) => {
    setHovering(index);
  };

  const handleMouseOut = () => {
    setHovering(null);
  };

  return (
    <div className="pt-20 bg-mainBg bg-opacity-30 ">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center animate__animated animate__slideInDown">
          <h1 className="text-2xl text-subColor font-bold text-center">
            {title}
          </h1>
          <p className="text-md1 text-mainBg font-light mb-12 text-center">
            {SubTitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 animate__animated animate__slideInUp">
          {Images.map((image, index) => (
            <div
              key={image.id}
              className={`relative mx-[15px] mb-8  ${
                Hovering === index
                  ? "bg-black hover:scale-105 hover:transition-0.3s ease-out cursor-pointer"
                  : ""
              }`}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
            >
              <Image
                src={image.image_url}
                alt={`Image ${image.id}`}
                className="w-full"
                width={370}
                height={370}
              />
              {Hovering === index && (
                <div className="absolute text-white inset-0 w-full h-full p-4 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                  <h2 className="text-lg font-bold font-Poppins">
                    {image.title}
                  </h2>
                  <h3 className="text-sm font-Poppins">{image.subTitle}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
