import Image from "next/image";
import React from "react";

interface serviceDataProps {
  commonIcon: string;
  img: string;
  title: string;
  description: string;
  subTitle1: string;
  subTitle2: string;
  subTitle3: string;
}

const CardList = ({
  commonIcon,
  img,
  title,
  description,
  subTitle1,
  subTitle2,
  subTitle3,
}: serviceDataProps) => {
  return (
    <div className="bg-mainBg bg-opacity-30  py-[75px]">
      <div className="container mx-auto">
        <div className="bg-white  shadow shadow-subColor animate__animated animate__zoomIn">
          <div className="mx-[10px] md:mx-0 p-8  cursor-pointer grid grid-cols-1 md:grid md:grid-cols-2 gap-8 ">
            <div className="mb-2 flex flex-col justify-center items-start">
              <h2 className="text-3xl text-subColor  font-bold">
                {title}
              </h2>
              <p className="mb-6 text-sm3   text-mainBg  font-light">
                {description}
              </p>
              <ul className="">
                <div className="flex">
                  <span>
                    <Image
                      src={commonIcon}
                      width={20}
                      height={30}
                      alt="commonIcon"
                    />
                  </span>
                  <li className="mb-[15px] pl-[35px] text-sm3    text-mainBg font-light">
                    {subTitle1}
                  </li>
                </div>
                <div className="flex">
                  <span>
                    <Image
                      src={commonIcon}
                      width={20}
                      height={30}
                      alt="commonIcon"
                    />
                  </span>
                  <li className="mb-[15px] pl-[35px] text-sm3    text-mainBg font-light">
                    {subTitle2}
                  </li>
                </div>
                <div className="flex ">
                  <span>
                    <Image
                      src={commonIcon}
                      width={20}
                      height={30}
                      alt="commonIcon"
                    />
                  </span>
                  <li className="mb-[15px] pl-[35px] text-sm3   text-mainBg font-light">
                    {subTitle3}
                  </li>
                </div>
              </ul>
            </div>
            <div className="">
              <Image src={img} width={540} height={539} alt="img1" className="w-full"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
