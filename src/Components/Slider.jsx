import React from "react";
import { slideImages } from "../assets/images";
import { useState, useEffect } from "react";
import { arrowIcon, play, pause } from "../assets/Icons";

let videoInterval;
const SLIDE_SHOW_DELAY = 4000;

const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const [isSlideActive, setIsSlideActive] = useState(true);
  useEffect(() => {
    if (isSlideActive) {
      videoInterval = setInterval(() => {
        setCurrSlide((prevSLide) => ++prevSLide % slideImages.length);
      }, SLIDE_SHOW_DELAY);
    }
    return () => {
      clearInterval(videoInterval);
    };
  }, [currSlide]);

  return (
    <div className="bg-gray-100">
      <section className="w-full relative overflow-hidden bg-gray-100">
        <div className="relative w-full h-[30vh] md:h-[40vh] lg:h-[73vh] flex">
          <div
            className={`flex transition-transform duration-1000`}
            style={{
              transform: `translateX(-${currSlide * 100}vw)`,
              width: `${slideImages.length * 100}vw`,
            }}
          >
            {slideImages.map((ele, i) => {
              return (
                <div
                  className="w-screen bg-blue-100 flex justify-center "
                  key={i}
                >
                  <img src={ele} className="object-cover w-full" />
                </div>
              );
            })}
          </div>
        </div>
        {/* bubbles for navigation of slides */}
        <div className="flex gap-2 md:gap-3 justify-center item-center md:py-4 absolute bottom-2 w-full ">
          {slideImages.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  currSlide === index
                    ? "bg-red-500 opacity-100"
                    : "bg-blue-900 opacity-50"
                } min-w-3 md:min-w-[15px] border-[2px] border-white rounded-full min-h-3 md:min-h-[15px] cursor-pointer`}
                onClick={() => {
                  setCurrSlide(index);
                  clearInterval(videoInterval);
                  if (isSlideActive) {
                    console.log("entered");

                    videoInterval = setInterval(() => {
                      setCurrSlide(
                        (prevSLide) => ++prevSLide % slideImages.length
                      );
                    }, SLIDE_SHOW_DELAY);
                  }
                }}
              />
            );
          })}
        </div>
        {/* arrows for navigating slides */}
        <div
          className="hidden md:block absolute top-[30%] md:top-[40%] left-0 py-5 px-2 cursor-pointer bg-blue-900/75 shadow-lg"
          onClick={() =>
            currSlide != 0 &&
            setCurrSlide((prevSlide) => --prevSlide % slideImages.length)
          }
        >
          <img src={arrowIcon} alt="prev" className=" w-4 md:w-12" />
        </div>
        <div
          className="hidden  md:block absolute  top-[30%] md:top-[40%] right-0 py-5 px-2 cursor-pointer bg-blue-900/75 shadow-lg"
          onClick={() =>
            setCurrSlide((prevSlide) => ++prevSlide % slideImages.length)
          }
        >
          <img src={arrowIcon} alt="next" className="rotate-180 w-4 md:w-12" />
        </div>
        {/* play pause button */}

        <div className="absolute left-2 md:bottom-5 bottom-2 md:left-5 cursor-pointer opacity-65">
          <img
            src={isSlideActive ? pause : play}
            alt="pause"
            onClick={() => {
              isSlideActive
                ? clearInterval(videoInterval)
                : (videoInterval = setInterval(() => {
                    setCurrSlide(
                      (prevSLide) => ++prevSLide % slideImages.length
                    );
                  }, SLIDE_SHOW_DELAY));
              setIsSlideActive(!isSlideActive);
            }}
            className="w-5 md:w-10"
          />
        </div>
      </section>
    </div>
  );
};

export default Slider;
