import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PopUp from "../PopUp/popUp";

interface HeaderProps {
  logoContent: string;
  menuItems: { label: string; path: string }[];
}

const Header = ({ menuItems, logoContent }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const closeModel = () => {
    return setShowModel(false);
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-mainBg py-4  bg-opacity-50 ">
      <div className="containerFluid mx-auto">
        <div className="">
          <div className="flex justify-between items-center px-[15px]">
            <div className="">
              <a href="/" className="text-md2 text-subColor font-bold">
                {logoContent}
              </a>
            </div>
            <div className="lg:hidden">
              <button
                className="block text-orange-600 text-xl px-3 py-1 focus:outline-none bg-transparent rounded-[3px] "
                onClick={toggleMenu}
              >
                <img
                  src="/Image/multiImages/hamburger.png"
                  alt="toggle navbar"
                  className="w-10 "
                />
              </button>
            </div>
            <div className="hidden lg:block">
              <ul className="flex">
                {menuItems?.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="text-sm2 text-subColor font-bold font-raleway hover:text-white mr-8 "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                
              </ul>
            </div>
          </div>
        </div>


        {isMenuOpen && (
          <div className="lg:hidden w-full bg-subColor">
            <ul className="mt-2 text-center flex flex-col ">
              {menuItems.map((item, index) => (
                <li
                  className="text-sm2 py-2 text-white font-bold font-raleway hover:text-white md:mr-8 bg-subColor"
                  key={index}
                >
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
