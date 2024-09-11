import React, { useEffect, useRef } from "react";
import SidebarMenu from "../Components/SidebarMenu";
import { volunteers_details } from "../Data/Volunteers";
import { total } from "../Data/Volunteers";

const Volunteers = () => {
  const volunteerSectionRef = useRef(null);

  useEffect(() => {
    if (volunteerSectionRef.current)
      volunteerSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      className="mt-10 md:w-[75%] max-md:w-[85%] mx-auto "
      ref={volunteerSectionRef}
    >
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
                  <td className="w-[40%] py-2 border-r-1 border-white text-center">
                    {ele.school_Clg}
                  </td>
                  <td className="w-[60%] text-center">{ele.number}</td>
                </tr>
              );
            })}
            <tr className="bg-slate-300">
              <th className="w-[40%] py-2 border-r-1 border-white">Total</th>
              <th className="w-[60%]">{total}</th>
            </tr>
          </table>
        </div>
      </SidebarMenu>
    </div>
  );
};

export default Volunteers;
