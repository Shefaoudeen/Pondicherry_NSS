import React, { useEffect, useRef } from "react";
import SidebarMenu from "../Components/SidebarMenu";
import { newsletter_Details } from "../Data/newsletter";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useGSAP  } from "@gsap/react";

const NewsLetters = () => {
  const NewsLetterRef = useRef(null);

  useEffect(() => {
    if (NewsLetterRef.current)
      NewsLetterRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  useGSAP(() => {
    gsap.from('.row-items',{
        opacity : 0,
        duration : 0.5,
        stagger : 0.1,
        delay : 0.5
    })
  },[])

  return (
    <div className="mt-10 md:w-[90%] w-[75%] mx-auto " ref={NewsLetterRef}>
      <SidebarMenu
        breadCrumb={[
          { label: "Home", path: "/" },
          { label: "News Letter", path: "/news" },
        ]}
      >
        <div>
          <h1 className="text-3xl text-black/65 border-b-4 pb-2 border-red-500">
            News Letters
          </h1>
        </div>
        <div className="py-5">
          <table className="w-full border-separate border-spacing-0.5 max-md:text-sm">
            <tr className="bg-blue-900 text-white">
              <th className="w-[40%] py-2 border-r-1 border-white">Title</th>
              <th className="w-[60%]">Attachment</th>
            </tr>
            {newsletter_Details.map((ele) => {
              return (
                <tr className="bg-slate-300 row-items">
                  <td className="w-[40%] text-center py-2 border-r-1 border-white">
                    {ele.title}
                  </td>

                  <td className="w-[60%] text-center max-sm:p-2">
                    <Link to={ele.link}>
                      <FontAwesomeIcon icon={faFilePdf} className="mr-1" />
                      {ele.file}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </SidebarMenu>
    </div>
  );
};

export default NewsLetters;
