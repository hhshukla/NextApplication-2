import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MarketingDataProps {
  title: string;
  data: Array<{
    title: string;
    content: string;
    link: string;
    image_url: string;
  }>;
}

const Products = ({ title, data }: MarketingDataProps) => {
  return (
    <div className="bg-mainBg bg-opacity-10 py-[75px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1">
          <div className="mb-12 ">
            <h2 className="text-center pb-5 text-2xl text-subColor font-bold">
              {title}
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {data?.map((data) => (
                <>
                  <div className="mx-5">
                    <div className="flex">
                      <Image
                        src={data.image_url}
                        alt=""
                        width={30}
                        height={30}
                      />

                      <h2 className="text-md1 text-subColor font-bold ml-2 mb-2">
                        {data.title}
                      </h2>
                    </div>

                    <h3 className="text-sm3 text-lightColor font-light mb-4">
                      {data.content}
                    </h3>
                    <Link
                      href="#"
                      className="text-sm3 text-lightColor font-light  cursor-pointer"
                    >
                      {data.link}
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
