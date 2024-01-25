import Image from "next/image";
import Link from "next/link";
import React from "react";
interface MarketingDataProps {
  img: string;
  data: Array<{
    title: string;
    content: string;
    link: string;
    image_url: string;
  }>;
}

const marketingInfo = ({ img, data }: MarketingDataProps) => {
  return (
    <div className="bg-mainBg bg-opacity-10 py-[75px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate__animated animate__slideInDown">
          <div className="">
            <Image
              src={img}
              alt=""
              width={433}
              height={432}
              className="w-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 ">
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
                    <Link href="#" className="text-sm3 text-lightColor font-light border-b-[1px] hover:text-primary cursor-pointer" >{data.link}</Link>
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

export default marketingInfo;
