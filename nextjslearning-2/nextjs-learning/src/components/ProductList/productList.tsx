import Image from "next/image";
import React from "react";
import { ProductListData } from "./productList.mock";

interface ProductListDataProps {
  id: number | string;
  url: string;
  caption: string;
}

const ProductList = ({ url, caption }: ProductListDataProps) => {
  return (
    <div className="bg-mainBg bg-opacity-30">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center md:flex md:flex-row animate__animated animate__lightSpeedInLeft delay-1000">
        {ProductListData.map((item) => (
          <Image
            src={item.url}
            width={250}
            height={250}
            className=" py-5 px-[15px] md:py-20 "
            alt={item.caption}
          />
        ))}

        </div>
      </div>
    </div>
  );
};

export default ProductList;
