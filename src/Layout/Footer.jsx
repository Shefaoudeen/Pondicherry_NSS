import React from "react";
import { nss_footer, dc_logo } from "../assets/images";

const Footer = () => {
  return (
    <div className=" mt-10">
      <div className="flex py-10">
        <div className="px-20 w-[70%]">
          <h1 className="text-2xl font-bold border-b-2 border-black w-fit mb-5">
            About Pondicherry
          </h1>
          <h1 className="text-lg text-justify  py-10">
            &nbsp;&nbsp;&nbsp;&nbsp;Pondicherry, also known as Puducherry, is a
            coastal city in South India, known for its French colonial heritage,
            serene beaches, and vibrant culture. It's a popular tourist
            destination featuring charming French-style architecture, tree-lined
            streets, and a laid-back atmosphere. Key attractions include the
            Auroville experimental township, the Promenade Beach, and the Sri
            Aurobindo Ashram. Pondicherry offers a unique blend of Indian and
            French influences, reflected in its cuisine, lifestyle, and
            festivals.
          </h1>
          <div className="flex justify-end p-4">
            <a href="https://tourism.py.gov.in" target="_blank">
              <button className="bg-black px-4 py-2 text-white rounded-xl">
                Know More
              </button>
            </a>
          </div>
        </div>
        <div className="w-[30%] p-5 ">
          <h1 className="text-xl">Contact Us</h1>
          <div className="w-full h-full px-5 py-5">
            <div className="bg-white w-full h-full rounded-xl"></div>
          </div>
        </div>
      </div>

      <div>
        <img src={nss_footer} className="w-screen" />
      </div>

      <div className="bg-gray-800 -mt-1 flex justify-center  text-white py-2 text-center">
        <div className="flex items-center gap-2">
          <img src={dc_logo} width={30} />
          <h1>
            Developed by{" "}
            <span className="font-bold hover:underline duration-150 delay-100 ease-linear">
              <a href="https://ptu-designclub.netlify.app/">
                PTU - Design Club
              </a>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
