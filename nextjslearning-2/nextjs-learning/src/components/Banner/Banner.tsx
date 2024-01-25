import React, { useEffect, useState } from "react";
import Image from "next/image";

interface BannerProps {
  title: string;
  img: string;
  spanTitle: string[];
  content: string;
  buttonText: string;
  videoId: string;
}

const Banner = ({
  title,
  spanTitle,
  content,
  buttonText,
  img,
  videoId,
}: BannerProps) => {
  const [text, setText] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const fullText = spanTitle.join(" ,");
  const typingSpeed = 100;
  let timeout: string | number | NodeJS.Timeout | undefined;
  const spanTitleCount = spanTitle.length;

  useEffect(() => {
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
        if (currentIndex <= fullText.length) {
          timeout = setTimeout(typeText, typingSpeed);
        }
      } else {
        currentIndex = 0;
        setText("");
        timeout = setTimeout(typeText, typingSpeed);
      }
    };

    typeText();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleButtonClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="bg-mainBg py-4 px-2 bg-opacity-50  ">
      <div className="container mx-auto relative">
        {showVideo ? (
          <iframe
            width="100%"
            height="600px"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="mt-16">
            <Image
              src={img}
              className=""
              alt="mainImage"
              width={2400}
              height={1614}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(360deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(0deg)";
              }}
            />
            <div className="m-16 absolute inset-0 flex flex-col justify-center items-center text-center animate__animated animate__zoomIn">
              <h1 className="mb-1 font-mono text-md2 text-subColor uppercase md:text-2xl lg:text-5xl font-Montserrat ">
                {title} <br className="block md:hidden" />
                <span className="inline-flex md:text-2xl text-h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent font-extraBold uppercase font-Montserrat">
                  {text}
                </span>
                <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 "></span>
              </h1>
              <div className="text-sm2 text-mainBg font-semibold sm:text-md2 font-Montserrat">
                {content}
              </div>
              {!showVideo && (
                <button
                  className="bg-subColor text-white text-sm1 px-[30px] py-[15px] mt-4 rounded-[30px] hover:bg-white hover:text-subColor cursor-pointer font-Montserrat"
                  onClick={handleButtonClick}
                >
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Banner;
