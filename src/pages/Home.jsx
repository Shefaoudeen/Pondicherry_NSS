import React from "react";
import gsap from "gsap";
import Announcements from "../Components/Announcements";
import {
  CM_Img,
  Governor_Img,
  manualCover,
  photoGalleryCover,
  videoGalleryCover,
  youthAndSport,
} from "../assets/images";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const item1 = [
  { title: "Design a Logo for Mera Yuva Bharat", date: "24-09-2024" },
  { title: "Suggest a Tagline for Mera Yuva Bharat", date: "24-09-2024" },
  {
    title:
      "Inviting the Nomination for National Service Scheme (NSS) Awards, 2022-23",
    date: "24-09-2024",
  },
  { title: "Design a Logo for Mera Yuva Bharat", date: "24-09-2024" },
  { title: "Suggest a Tagline for Mera Yuva Bharat", date: "24-09-2024" },
  {
    title:
      "Inviting the Nomination for National Service Scheme (NSS) Awards, 2022-23",
    date: "24-09-2024",
  },
];
const item2 = [
  { title: "RDC 2023 E- Newsletter Issue III", date: "24-09-2024" },
  { title: "RDC 2023 E- Newsletter Issue II", date: "01-Jan-2023" },
  { title: "RDC 2023 E- Newsletter", date: "09-Jan-2023" },
];

const Home = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from('.photo-container', {
      x : -600,
      opacity : 0,
      filter : "blur(5px)",
      duration : 0.5,
      stagger : 0.2,
      scrollTrigger : {
        trigger : '.photo-container',
        start : "200px bottom",
      }
    })
    gsap.from('#welcome', {
      x : -300,
      opacity : 0,
      filter : "blur(5px)",
      duration : 0.7,
      stagger : 0.2,
      scrollTrigger : {
        trigger : '#welcome',
        start : "200px bottom",
      }
    })
    gsap.from('#welcome-text', {
      y : 300,
      opacity : 0,
      filter : "blur(5px)",
      duration : 0.7,
      stagger : 0.2,
      scrollTrigger : {
        trigger : '#welcome',
        start : "200px bottom",
      }
    })
  },[])
 
  return (
    <div className="bg-[#F7F7F7]">
      <div className="w-[90vw] lg:w-[80vw] flex flex-col items-center mx-auto ">
        {/* about section */}
        <div className="pt-10 lg:flex items-center justify-center gap-10 select-none">
          <div id="welcome" className="text-blue-900 min-w-fit">
            <h1 className="text-5xl font-medium">Welcome to</h1>
            <h3 className="text-3xl mt-1 md:mt-3">National Service Scheme</h3>
          </div>
          <p id="welcome-text" className="text-justify mt-3 lg:mt-0 ">
            The National Service Scheme (NSS) is a Central Sector Scheme of
            Government of India, Ministry of Youth Affairs & Sports. It provides
            opportunity to the student youth of 11th & 12th Class of schools at
            +2 Board level and student youth of Technical Institution, Graduate
            & Post Graduate at colleges and University level of India to take
            part in various government led community service activities &
            programmes.The sole aim of the NSS is to provide hands on experience
            to young students in delivering community service.
            <span> </span>
            <span className="text-orange-400 hover:underline">
              <a href="">Read More</a>
            </span>
          </p>
        </div>

        {/* event section */}
        <div className="md:flex mt-10 md:mt-20 justify-between gap-5 space-y-5 md:space-y-0">
          <Announcements title={"Latest News"} data={item1} />
          <Announcements title={"Latest Events"} data={item2} />
          <div className="bg-blue-900 text-white flex flex-col justify-center px-4 py-3 gap-6 ">
            <div className="flex items-center gap-3">
              <div className="w-[150px] h-[150px] shrink-0">
                <img
                  src={Governor_Img}
                  alt="Governor Image"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="divide-y-[1px]">
                <h1 className="font-bold">Shri k. Kailashnathan, IAS</h1>
                <h1 className="text-white/75">Hon'ble Lt. Governor</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[150px] h-[150px] shrink-0">
                <img
                  src={CM_Img}
                  alt="CM Image"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="divide-y-[1px]">
                <h1 className="font-bold">Shri N. Rangasamy</h1>
                <h1 className="text-white/75">Hon'ble Chief Minister</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* features section */}
      <div className="flex justify-center mt-10 py-10 bg-blue-900">
        <div className="md:flex w-[90%] lg:w-[75%] items-center gap-8 space-y-5 md:space-y-0">
          <div className="photo-container group flex flex-col w-400 shadow-2xl">
            <div className="w-full overflow-clip duration-500">
              <img
                src={manualCover}
                className="group-hover:scale-110 object-cover duration-500"
                alt="NSS Manual Cover pic"
              />
            </div>
            <a
              href=""
              className="hover:bg-red-700 duration-300 bg-red-600 flex-1 text-center py-2 text-white"
            >
              National Service Scheme Manual - 2006
            </a>
          </div>
          <div className="photo-container group flex flex-col w-400 shadow-2xl">
            <div className="w-full overflow-clip duration-500">
              <img
                src={photoGalleryCover}
                className="group-hover:scale-110 object-cover duration-500"
                alt="Photo gallery cover"
              />
            </div>
            <a
              href=""
              className="hover:bg-red-700 duration-300 bg-red-600 flex-1 text-center py-2 text-white"
            >
              Photo Gallery
            </a>
          </div>
          <div className="photo-container group flex flex-col w-400 shadow-2xl">
            <div className="w-full overflow-clip duration-500">
              <img
                src={videoGalleryCover}
                className="group-hover:scale-110 object-cover duration-500"
                alt="Video gallery cover"
              />
            </div>
            <a
              href=""
              className="hover:bg-red-700 duration-300 bg-red-600 flex-1 text-center py-2 text-white"
            >
              Video Gallery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
