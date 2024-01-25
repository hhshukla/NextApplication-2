import Image from "next/image";
import React from "react";

interface CardDataProps {
  id: number;
  commonIcon: string;
  icon: string;
  title: string;
  paragraph: string;
  subTitle1: string;
  subTitle2: string;
  subTitle3: string;
}
interface CardListProps {
  CardData: CardDataProps[];
}

const CardList = ({ CardData }: CardListProps) => {
  return (
    <div className="bg-mainBg bg-opacity-30  py-[75px] ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid md:grid-cols-3 animate__animated animate__zoomIn">
          {CardData?.map(
            (item: {
              icon: string;
              title: string;
              paragraph: string;
              commonIcon: string;
              subTitle1: string;
              subTitle2: string;
              subTitle3: string;
            }) => (
              <div className="mx-[15px] md:p-[48px] p-8 bg-white hover:bg-mainBg hover:bg-opacity-10 cursor-pointer">
                <div className="mb-4">
                  <Image
                    src={item.icon}
                    width={20}
                    height={20}
                    alt="icon1"
                  />
                </div>
                <div className="mb-2">
                  <h2 className="text-md1 text-subColor hover:text-white font-bold">
                    {item.title}
                  </h2>
                  <p className="mb-6 text-sm3 text-mainBg hover:text-white font-light">
                    {item.paragraph}
                  </p>
                </div>
                <ul className="">
                  <div className="flex">
                    <span>
                      <Image
                        src={item.commonIcon}
                        width={20}
                        height={30}
                        alt="commonIcon"
                      />
                    </span>
                    <li className="mb-[15px] pl-[35px] text-sm3 hover:text-white text-mainBg font-light">
                      {item.subTitle1}
                    </li>
                  </div>
                  <div className="flex">
                    <span>
                      <Image
                        src={item.commonIcon}
                        width={20}
                        height={30}
                        alt="commonIcon"
                      />
                    </span>
                    <li className="mb-[15px] pl-[35px] text-sm3 hover:text-white text-mainBg font-light">
                      {item.subTitle2}
                    </li>
                  </div>
                  <div className="flex ">
                    <span>
                      <Image
                        src={item.commonIcon}
                        width={20}
                        height={30}
                        alt="commonIcon"
                      />
                    </span>
                    <li className="mb-[15px] pl-[35px] text-sm3 hover:text-white text-mainBg font-light">
                      {item.subTitle3}
                    </li>
                  </div>
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CardList;
