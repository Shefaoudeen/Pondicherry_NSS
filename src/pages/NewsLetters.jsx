import React, { useEffect, useRef } from "react";
import SidebarMenu from "../Components/SidebarMenu";
import { newsletter_Details } from "../Data/newsletter";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const NewsLetters = () => {
  const NewsLetterRef = useRef(null);

  useEffect(() => {
    if (NewsLetterRef.current)
      NewsLetterRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="mt-10 w-[75%] mx-auto " ref={NewsLetterRef}>
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
          <table className="w-full border-separate border-spacing-0.5">
            <tr className="bg-blue-900 text-white">
              <th className="w-[40%] py-2 border-r-1 border-white">Title</th>
              <th className="w-[60%]">Attachment</th>
            </tr>
            {newsletter_Details.map((ele) => {
              return (
                <tr className="bg-slate-300">
                  <td className="w-[40%] text-center py-2 border-r-1 border-white">
                    {ele.title}
                  </td>

                  <td className="w-[60%] text-center">
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
