import React from "react";
import Slider from "../Components/Slider";
import Announcements from "../Components/Announcements";
import { manualCover, photoGalleryCover, videoGalleryCover, youthAndSport } from "../assets/images";

const item1 = [
  {title : "Design a Logo for Mera Yuva Bharat", date : "24-09-2024"},
  {title : "Suggest a Tagline for Mera Yuva Bharat", date : "24-09-2024"},
  {title : "Inviting the Nomination for National Service Scheme (NSS) Awards, 2022-23", date : "24-09-2024"},
  {title : "Design a Logo for Mera Yuva Bharat", date : "24-09-2024"},
  {title : "Suggest a Tagline for Mera Yuva Bharat", date : "24-09-2024"},
  {title : "Inviting the Nomination for National Service Scheme (NSS) Awards, 2022-23", date : "24-09-2024"},
]
const item2 = [
  {title : "RDC 2023 E- Newsletter Issue III", date : "24-09-2024"},
  {title : "RDC 2023 E- Newsletter Issue II", date : "01-Jan-2023"},
  {title : "RDC 2023 E- Newsletter", date : "09-Jan-2023"},
]

const Home = () => {
  return (
    <div className="">
      <Slider />
      <div className="w-[75vw]  mx-auto ">
        <div className="mt-10 flex items-center justify-center gap-10 select-none">
          <div className="text-blue-900 min-w-fit">
            <h1 className="text-5xl font-medium">Welcome to</h1>
            <h3 className="text-3xl mt-3">National Service Scheme</h3>
          </div>
          <p className="text-justify">
            The National Service Scheme (NSS) is a Central Sector Scheme of
            Government of India, Ministry of Youth Affairs & Sports. It provides
            opportunity to the student youth of 11th & 12th Class of schools at
            +2 Board level and student youth of Technical Institution, Graduate
            & Post Graduate at colleges and University level of India to take
            part in various government led community service activities &
            programmes.The sole aim of the NSS is to provide hands on experience
            to young students in delivering community service.
            <span>  </span>
            <span className="text-orange-400 hover:underline"><a href="">Read More</a></span>
          </p>
        </div>

        {/* event section */}
        <div className="flex mt-20 justify-between gap-5">
          <Announcements title={"Latest News"} data={item1}/>
          <Announcements title={"Latest Events"} data={item2}/>
          <img src={youthAndSport} alt="ministry of youth affairs and sports" className="flex-1 object-contain" />
        </div>

        {/* features section */}
      </div>
      <div className="flex justify-center mt-10 py-10 bg-blue-900">
        <div className="flex w-[75%] items-center gap-8 ">
          <div className="flex flex-col w-400 shadow-2xl">
           <img src={manualCover} alt="NSS Manual Cover pic" />
            <a href="" className="hover:bg-red-700 duration-300 bg-red-600 flex-1 text-center py-2 text-white">National Service Scheme Manual - 2006</a>
          </div>
          <div className="flex flex-col w-400 shadow-2xl">
           <img src={photoGalleryCover} alt="Photo gallery cover" />
            <a href="" className="hover:bg-red-700 duration-300 bg-red-600 flex-1 text-center py-2 text-white">Photo Gallery</a>
          </div>
          <div className="flex flex-col w-400 shadow-2xl">
           <img src={videoGalleryCover} alt="Video gallery cover" />
            <a href="" className="hover:bg-red-700 duration-300 bg-red-600 flex-1 text-center py-2 text-white">Video Gallery</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
