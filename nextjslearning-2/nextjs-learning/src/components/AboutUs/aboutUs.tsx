import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AboutUsDataProps {
  img: string;
  title: string;
  description: string;
  data: Array<{
    title: string;
    content: string;
    link: string;
    image_url: string;
  }>;
}

const AboutUs = ({ img, title, description, data }: AboutUsDataProps) => {
  return (
    <div className="bg-mainBg bg-opacity-30 py-[75px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate__animated animate__bounceInLeft ">
          <div className="flex flex-col justify-center items-center">
            <div className="px-[15px]">
              <h2 className="text-2xl text-subColor pb-5">{title}</h2>
              <p className="mb-4 text-md1 text-mainBg">{description}</p>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 ">
              {data?.map((data) => (
                <>
                  <div className="mx-5">
                    <div className="">
                      <Image
                        src={data.image_url}
                        alt=""
                        width={30}
                        height={30}
                        className="mb-4"
                      />

                      <h2 className="text-md1 text-subColor font-bold  mb-2">
                        {data.title}
                      </h2>
                    </div>

                    <h3 className="text-sm3 text-lightColor font-light mb-4">
                      {data.content}
                    </h3>
                    <Link
                      href="#"
                      className="text-sm3 text-subColor font-light hover:text-primary cursor-pointer"
                    >
                      {data.link}
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="">
            <Image
              src={img}
              alt=""
              width={433}
              height={432}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
