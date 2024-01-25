import Image from "next/image";
import React from "react";
import { FooterData } from "./footer.mock"; 
interface FooterProps {
  title: string;
  paragraph: string;
  features: any;
  socialMediaLinks: any;
  label: string;
  emailField: string;
  subscribeButton: string;
}

const Footer = ({
  title,
  paragraph,
  features,
  socialMediaLinks,
  label,
  emailField,
  subscribeButton,
}: FooterProps) => {
  return (
    <div className="bg-mainBg bg-opacity-10 py-[120px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-4">
          <div className="">
            <h2 className="mb-6 text-subColor text-sm1 font-extraBold">
              {title}
            </h2>
            <p className="text-mainBg text-sm3 font-light mb-4">{paragraph}</p>
          </div>
          <div className="">
            <h2 className="mb-6 text-subColor text-sm1 font-extraBold">
              {FooterData.features.label}
            </h2>
            <ul>
              {FooterData.features.item.map((feature, index) => (
                <li
                  key={index}
                  className="text-mainBg text-sm3 font-light mb-4"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="mb-6 text-subColor text-sm1 font-extraBold">
              {FooterData.socialMediaLinks.label}
            </h2>
            <ul className="flex">
              {FooterData.socialMediaLinks.items.map((socialMedia, index) => (
                <li key={index}>
                  <Image
                    src={socialMedia.img}
                    width={20}
                    height={30}
                    alt={`Social Media Icon ${index + 1}`}
                    className="mr-3"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="mb-6 text-subColor text-sm1 font-extraBold">
              {FooterData.label}
            </h2>
            <div className="">
              <input type="email" placeholder={emailField} className="p-2"/>
              <button className="bg-subColor text-white text-md3 px-2  py-1 rounded-md ml-2">{subscribeButton}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
