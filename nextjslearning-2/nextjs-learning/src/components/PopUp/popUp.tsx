import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

interface ModelDataProps {
  closeModel: () => void;
}

const PopUp = ({ closeModel }: ModelDataProps) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        closeModel();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="container mx-auto ">
        <div className="top-10  fixed flex justify-center items-center rounded-sm">
          <div className="bg-white mt-4 p-4 mr-8 " ref={popupRef}>
            <h2 className="text-subColor text-xl m-2">Hello</h2>
            <h3 className="text-subColor text-md2 m-2">
              Welcome to the ThemeWagon
            </h3>
            <div className="mt-4 w-full bg-mainBg hover:bg-subColor flex rounded-md">
            <Link className="text-md1 p-2 text-center text-white   hover:text-white cursor-pointer w-full " href={"/blog"} onClick={closeModel}>
              Learn More
            </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;