import React from "react";
import Image from "next/image";

interface TeamInfoProps {
  MainTitle: string;
  teamData: {
    position: string;
    opinion: React.ReactNode;
    img: string;
    title: string;
    icon1: string;
    icon2: string;
    icon3: string;
    icon4: string;
  }[];
}

const TeamInfo = ({ MainTitle, teamData }: TeamInfoProps) => {
  return (
    <div className="py-5 bg-mainBg bg-opacity-30">
      <div className="container mx-auto px-6 animate__animated animate__slideInUp">
        <h2 className="mb-10 text-5xl text-subColor font-ralewayBold text-center">
          {MainTitle}
        </h2>
        <div className="flex flex-wrap -mx-4 ">
          {teamData.map((slide, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mt-5">
              <div className="flex flex-col justify-between h-full p-6 shadow shadow-subColor bg-white ">
                <div className="text-center">
                  <Image
                    src={slide.img}
                    alt={`clientImg-${index}`}
                    className="mx-auto rounded-[50%] mb-4"
                    width={80}
                    height={80}
                  />
                  <h2 className="text-3xl font-bold text-subColor">
                    {slide.title}
                  </h2>
                  <h2 className="text-sm3 text-mainBg">{slide.position}</h2>
                </div>
                <p className="text-black text-base font-ralewayBold break-words pt-5 text-center">
                  {slide.opinion}
                </p>
                <div className="flex justify-center items-center mt-5 text-white font-semibold cursor-pointer hover:text-black">
                  <Image
                    src={slide.icon1}
                    alt="facebook"
                    width={40}
                    height={40}
                    className="p-2"
                  />
                  <Image
                    src={slide.icon2}
                    alt="twitter"
                    width={40}
                    height={40}
                    className="p-2"
                  />
                  <Image
                    src={slide.icon3}
                    alt="instagram"
                    width={40}
                    height={40}
                    className="p-2"
                  />
                  <Image
                    src={slide.icon4}
                    alt="linkedin"
                    width={40}
                    height={40}
                    className="p-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
