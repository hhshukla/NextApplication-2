import React, { ReactNode,useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Products from "../Products/product";
import { ProductsData } from "../Products/product.mock";

interface blogProps {
  MainTitle: string;
  data: any;
}
const Blog = ({ MainTitle, data }: blogProps) => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <div className="py-[75px]  bg-mainBg bg-opacity-10">
      <div className="container mx-auto">
        <div className="px-6 ">
          <h2 className="mb-10 text-5xl text-subColor font-ralewayBold text-center">
            {MainTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {data?.map(
              (
                slide: {
                  opinion: string;
                  img: string;
                  title: string;
                  linkText: string;
                  list1: string;
                  list2: string;
                  list3: string;
                },
                index: React.Key
              ) => (
                <div key={index} className="py-5  w-full ">
                  <div className="flex flex-col justify-center items-center w-full px-2 md:px-4">
                    <div className="text-center p-6  w-full ">
                      <div className=" ">
                        <Image
                          src={slide.img}
                          alt={`clientImg-${index}`}
                          className="  mb-[30px]"
                          width={350}
                          height={350}
                        />
                      </div>

                      <h2 className="text-md2 font-bold  text-subColor text-start font-ralewayBold">
                        {slide.title}
                      </h2>
                      <ul className="flex justify-start items-start text-black font-semibold cursor-pointer hover:text-subColor ">
                        <li className="mr-2 font-raleway">{slide.list1}</li>
                        <li className="mr-2 font-raleway">{slide.list2}</li>
                        <li className="mr-2 font-raleway">{slide.list3}</li>
                      </ul>

                      <p className=" text-sm3  break-words pt-5 text-mainBg text-start font-raleway">
                        {slide.opinion}
                      </p>
                      <div className="mt-4 text-start">
                        <Link
                          href="#"
                          className=" text-subColor hover:text-primary curser-pointer font-raleway" onClick={handleClick}
                        >
                          {slide.linkText}
                          {showComponent && <Products {...ProductsData} />}

                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
