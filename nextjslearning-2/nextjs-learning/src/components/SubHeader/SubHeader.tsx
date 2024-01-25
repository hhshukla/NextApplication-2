import React, { useState } from "react";
import Image from "next/image";
import PopUp from "../PopUp/popUp";

interface SubHeaderProps {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  phone: string | number;
  email: string;
}

const SubHeader = ({
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  phone,
  email,
}: SubHeaderProps) => {
  const [showModel, setShowModel] = useState(false);
  const closeModel = () => {
    return setShowModel(false);
  };

  return (
    <div className="bg-mainBg bg-opacity-50 ">
      <div className="container mx-auto">
        <div className="flex justify-start items-center pt-3">
        <button
          onClick={() => setShowModel(true)}
          className="bg-mainBg bg-opacity-30 text-md1 text-white p-2 rounded-md  cursor-pointer flex justify-center items-center"
        >
          <Image
            src={"/Image/multiImages/icons8-holding-box-80.png"}
            alt="icon"
            width={20}
            height={20}
          />
        </button>
        {showModel && <PopUp closeModel={closeModel} />}

        </div>

        <ul className="sm:flex flex-col-reverse md:flex md:flex-row py-2.5 justify-center md:justify-between ">
          <div className="sm:flex sm:justify-center md:flex  md:justify-around items-center">
            <li className="flex justify-center items-center  text-black font-semibold cursor-pointer hover:text-black">
              <Image src={img1} alt="phone" width={20} height={20} />
              <span className="pl-2.5 mr-3 text-sm2 font-Montserrat">
                {phone}
              </span>
            </li>
            <li className="flex justify-center items-center text-black font-semibold cursor-pointer hover:text-black">
              <Image src={img2} alt="email" width={20} height={20} />
              <span className="pl-2.5 mr-3 text-sm2 font-Montserrat">
                {email}
              </span>
            </li>
          </div>
          <li className="flex justify-center items-center text-white font-semibold cursor-pointer hover:text-black">
            <Image
              src={img3}
              alt="facebook"
              width={40}
              height={40}
              className="p-2"
            />
            <Image
              src={img4}
              alt="twitter"
              width={40}
              height={40}
              className="p-2"
            />
            <Image
              src={img5}
              alt="instagram"
              width={40}
              height={40}
              className="p-2"
            />
            <Image
              src={img6}
              alt="linkedin"
              width={40}
              height={40}
              className="p-2"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
