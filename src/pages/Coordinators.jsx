import React, { useEffect, useRef } from "react";
import SidebarMenu from "../Components/SidebarMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { coordinators_details } from "../Data/Coordinators";

const Coordinators = () => {
  const coordinatorSectionRef = useRef(null);

  useEffect(() => {
    if (coordinatorSectionRef.current)
      coordinatorSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      className="mt-10 md:w-[75%] max-sm:w-[85%] mx-auto "
      ref={coordinatorSectionRef}
    >
      <SidebarMenu
        breadCrumb={[
          { label: "Home", path: "/" },
          { label: "Co-ordinatorts", path: "/coordinators" },
        ]}
      >
        <div>
          <h1 className="text-3xl text-black/65">Co-ordinators</h1>

          <h3 className="font-semibold mt-5 text-blue-900 md:max-w-fit text-2xl pb-1 border-b-4 border-red-500 max-sm:hidden">
            NSS Programme Co-ordinators in Pondicherry
          </h3>
          <h3 className="font-semibold mt-5 text-blue-900 md:max-w-fit text-2xl pb-1 border-b-4 border-red-500 max-sm:text-md md:hidden">
            Co-ordinators in Pondicherry
          </h3>
        </div>
        <div className="flex justify-center items-center ">
          <div className="py-5 grid gap-4 grid-cols-3 w-full max-sm:grid-cols-1 ">
            {coordinators_details.map((ele) => {
              return (
                <div className="flex  p-3  max-md:justify-center max-md:items-center">
                  <div>
                    <h1 className="text-red-600 font-bold text-xl">
                      {ele.name}
                    </h1>
                    <h1 className="text-blue-900">{ele.university}</h1>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faPhone} />
                      <h1>{ele.phone}</h1>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <h1>{ele.mail}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SidebarMenu>
    </div>
  );
};

export default Coordinators;
