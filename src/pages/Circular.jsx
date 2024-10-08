import React, { useEffect, useRef } from "react";
import SidebarMenu from "../Components/SidebarMenu";
import { circular_details } from "../Data/Circular";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Circular = () => {
  const circularSectionRef = useRef(null);

  useEffect(() => {
    if (circularSectionRef.current)
      circularSectionRef.current.scrollIntoView({ behavior: "smooth" });
  });

  useGSAP(() => {
    const t1 = gsap.timeline({repeat: 4,yoyo : true})
    t1.from('.notes', {
      rotation : 3,
      duration :0.4,
      // stagger : 0.1,
      // yoyo : true,
      ease : "linear"
    })
    t1.to('.notes',{
      rotation : -1,
      duration :0.4,
      // stagger : 0.1,
      // yoyo : true,
      ease : "linear"
    })
    t1.set('.notes',{
      rotation : 2,
    })
  },[])

  return (
    <div className="mt-10 w-[75%] mx-auto " ref={circularSectionRef}>
      <SidebarMenu
        breadCrumb={[
          { label: "Home", path: "/" },
          { label: "Circulars", path: "/circulars" },
        ]}
      >
        <div>
          <h1 className="text-3xl text-black/65 max-sm:text-center">
            Circulars
          </h1>
          <div className="py-10 px-5">
            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 max-sm:gap-10">
              {circular_details.map((ele,index) => {
                return (
                  <div key={index} className="notes w-fit px-4 py-5 bg-yellow-200 rotate-[2deg]">
                    <div className="absolute min-w-[10px] max-w-[10px] min-h-[10px] bg-red-600 rounded-full top-0 left-0"></div>
                    <div className="-rotate-[2deg]">
                      <h1>
                        <span className="text-red-600 font-semibold">
                          Title :
                        </span>{" "}
                        {ele.title}
                      </h1>
                      <h1>
                        <span className="text-red-600 font-semibold">
                          From :
                        </span>{" "}
                        {ele.From}
                      </h1>
                      <h1>
                        <span className="text-red-600 font-semibold">
                          Date :
                        </span>{" "}
                        {ele.Date}
                      </h1>
                      <div className="flex justify-center py-2">
                        <Link to={ele.link}>
                          <button className="bg-blue-900 text-white px-4 py-2 rounded-xl">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SidebarMenu>
    </div>
  );
};

export default Circular;
