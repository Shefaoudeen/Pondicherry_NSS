import React, { useEffect, useRef } from "react";
import SidebarMenu from "../Components/SidebarMenu";
import { volunteers_details } from "../Data/Volunteers";
import { total } from "../Data/Volunteers";
import gsap from "gsap";
import { useGSAP  } from "@gsap/react";

const Volunteers = () => {
  const volunteerSectionRef = useRef(null);

  useEffect(() => {
    if (volunteerSectionRef.current)
      volunteerSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  useGSAP(() => {
    gsap.from('.row-items',{
        opacity : 0,
        duration : 0.5,
        stagger : 0.05,
        delay : 0.5
    })
  },[])

  return (
    <div className="mt-10 md:w-[90%] w-[75%] mx-auto " ref={volunteerSectionRef}>
      <SidebarMenu
        breadCrumb={[
          { label: "Home", path: "/" },
          { label: "Volunteers", path: "/volunteers" },
        ]}
      >
        <div>
          <h1 className="text-3xl text-black/65 border-b-4 pb-2 border-red-500">
            NSS Volunteers
          </h1>
        </div>
        <div className="py-5">
          <table className="w-full border-separate border-spacing-0.5">
            <tr className="bg-blue-900 text-white">
              <th className="w-[40%] py-2 border-r-1 border-white">State</th>
              <th className="w-[60%]">No. of volunteer</th>
            </tr>
            {volunteers_details.map((ele) => {
              return (
                <tr className="bg-slate-300 max-md:text-sm">
                  <td className="row-items w-[40%] py-2 border-r-1 border-white text-center">
                    {ele.school_Clg}
                  </td>
                  <td className="row-items w-[60%] text-center">{ele.number}</td>
                </tr>
              );
            })}
            <tr className="bg-slate-300">
              <th className="row-items w-[40%] py-2 border-r-1 border-white">Total</th>
              <th className="row-items w-[60%]">{total}</th>
            </tr>
          </table>
        </div>
      </SidebarMenu>
    </div>
  );
};

export default Volunteers;
