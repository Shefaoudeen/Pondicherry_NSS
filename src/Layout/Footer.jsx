import React from "react";
import { footer_img, dc_logo } from "../assets/images";

const Footer = () => {
  return (
    <div className="bg-[#30D5C8]/75">
      <div className="flex">
        <div className="px-10 py-10 w-[70%]">
          <h1 className="text-2xl font-bold border-b-2 border-black w-fit mb-5">
            About Pondicherry
          </h1>
          <h1 className="text-xl text-justify">
            Pondicherry, also known as Puducherry, is a coastal city in South
            India, known for its French colonial heritage, serene beaches, and
            vibrant culture. It's a popular tourist destination featuring
            charming French-style architecture, tree-lined streets, and a
            laid-back atmosphere. Key attractions include the Auroville
            experimental township, the Promenade Beach, and the Sri Aurobindo
            Ashram. Pondicherry offers a unique blend of Indian and French
            influences, reflected in its cuisine, lifestyle, and festivals.
          </h1>
        </div>
        <div className="w-[30%] p-5 ">
          <h1 className="text-xl">Contact Us</h1>
          <div className="w-full h-full px-5 py-5">
            <div className="bg-white w-full h-full rounded-xl"></div>
          </div>
        </div>
      </div>
      <div>
        <img src={footer_img} className="w-screen" />
      </div>
      <div className="bg-black  flex justify-between px-20 -mt-1 items-center">
        <div className="text-white flex gap-2">
          <h1>Footer-1</h1>
          <h1>Footer-2</h1>
          <h1>Footer-3</h1>
          <h1>Footer-4</h1>
          <h1>Footer-5</h1>
        </div>
        <div className="bg-white flex my-10 p-2 rounded-xl items-center gap-2">
          <div>
            <img src={dc_logo} alt="" width={75} />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Developed by</h1>
            <h1 className="text-lg font-bold">Design Club - PTU</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
