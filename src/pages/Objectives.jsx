import React from "react";
import { useRef, useEffect } from "react";
import SidebarMenu from "../Components/SidebarMenu";
import { ObjectivesPic } from "../assets/images";

const Objectives = () => {
  const objectiveSectionRef = useRef(null);

  useEffect(() => {
    if (objectiveSectionRef.current)
      objectiveSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gray-100 w-screen">
      <div
        className="pt-10 w-[90%] md:w-[75%] mx-auto "
        ref={objectiveSectionRef}
      >
        <SidebarMenu
          breadCrumb={[
            { label: "Home", path: "/" },
            { label: "Objectives", path: "/objectives" },
          ]}
        >
          <div>
            <h1 className="text-3xl text-black/65">Objectives</h1>
            <img
              src={ObjectivesPic}
              className="object-fill w-full mt-5"
              alt="Group pic"
            />

            <h3 className="font-semibold mt-5 text-blue-900 max-w-fit text-2xl pb-1 border-b-4 border-red-500">
              The main objectives of National Service Scheme (NSS) are :
            </h3>
            <ul className="list-decimal text-lg list-inside mt-4">
              <li className="mb-2">
                understand the community in which they work
              </li>
              <li className="mb-2">
                understand themselves in relation to their community
              </li>
              <li className="mb-2">
                identify the needs and problems of the community and involve
                them in problem-solving
              </li>
              <li className="mb-2">
                develop among themselves a sense of social and civic
                responsibility
              </li>
              <li className="mb-2">
                utilise their knowledge in finding practical solutions to
                individual and community problems
              </li>
              <li className="mb-2">
                develop competence required for group-living and sharing of
                responsibilities
              </li>
              <li className="mb-2">
                gain skills in mobilising community participation
              </li>
              <li className="mb-2">
                acquire leadership qualities and democratic attitudes
              </li>
              <li className="mb-2">
                develop capacity to meet emergencies and natural disasters and
              </li>
              <li className="mb-2">
                practice national integration and social harmony
              </li>
            </ul>
          </div>
        </SidebarMenu>
      </div>
    </div>
  );
};

export default Objectives;
