import React, { useEffect, useState } from "react";
import { NAV_ITEMS } from "../Data/index";
import { NavLink, Link, useLocation } from "react-router-dom";
import { hamburger } from "../assets/Icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [currRoute, setCurrRoute] = useState("/");
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState("");

  useEffect(() => {
    setCurrRoute(location.pathname);
    setNavOpen(false);
  }, [location.pathname]);

  useGSAP(() => {
    gsap.from('#navSidebar', {
      x: 200,
      duration: 0.5
    })
  }, [navOpen])
  useEffect(() => {
    gsap.from('.subMenu-items',
    {
        opacity : 0,
        duration: 0.5,
        stagger : 0.15
    })
    return () => {
      gsap.set('.subMenu-items',
    {
        opacity : 1,
    })
    }
  }, [subMenuOpen])

  return (
    <nav className="bg-blue-900 relative -mb-0.5">
      <ul className="flex items-center relative justify-end lg:justify-center px-5 lg:px-10 text-white font-semibold">
        {NAV_ITEMS.map((ele, i) => {
          if (ele.subItems)
            return (
              <div className="group duration-300 hidden lg:block" key={i}>
                <Link
                  to="/aboutUs"
                  className={`${ele.subItems.some((item) => item.path === currRoute)
                      ? "bg-blue-500"
                      : "bg-blue-900"
                    } px-4 text-center py-4 cursor-pointer group-hover:bg-blue-500 duration-300`}
                >
                  {ele.title}
                </Link>
                <div className="hidden bg-blue-500 -mt-1 z-[10000] absolute top-[100%] items-start justify-start flex-col min-w-64 group-hover:flex duration-300">
                  {ele.subItems.map((subItem, i) => {
                    return (
                      <NavLink
                        key={i}
                        to={subItem.path}
                        className="sub-items w-full px-4 py-4 hover:bg-white hover:text-red-500 cursor-pointer duration-500"
                      >
                        {subItem.title}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            );
          //nav items other than Organisation
          else
            return (
              <NavLink
                key={i}
                to={ele.path}
                className="hidden lg:block px-4 text-center py-4  cursor-pointer hover:bg-blue-500 duration-300"
              >
                {ele.title}
              </NavLink>
            );
        })}
        {/* responsive nav for mobile */}
        <div  //hamburger icon
            className="py-2 md:hidden flex flex-col justify-center items-center cursor-pointer duration-300 "
            onClick={() => setNavOpen(!navOpen)}
          >
          {/* hamburger icon animationDuration */}
            <div
              className={`w-7 h-1 my-0.5 bg-white transition-transform duration-300 ${
                navOpen ? "rotate-[135deg] translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-7 h-1 my-0.5 bg-white transition-opacity duration-300 ${
                navOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-7 h-1 my-0.5 bg-white transition-transform duration-300 ${
                navOpen ? "-rotate-[135deg] -translate-y-2.5" : ""
              }`}
            ></div>
          </div>
        {navOpen && ( //shows the menus only when hamburger icon is clicked
          <div id="navSidebar" className="absolute top-[100%] z-[1000] flex flex-col  right-0 bg-blue-500 text-white">
            {NAV_ITEMS.map((ele, i) => {
              if (ele.subItems)
                return (
                  <div
                    className={`py-4 px-4 group relative duration-300 hover:bg-white ${ele.subItems.some((item) => item.path === currRoute)
                        ? "bg-white text-red-500"
                        : "bg-blue-500"
                      }`}
                    key={i}
                  >
                    <Link
                      onClick={() => setSubMenuOpen(ele.title)}
                      className={`peer px-4 text-center py-4 cursor-pointer w-full group-hover:text-red-500  duration-300`}
                    >
                      {ele.title}
                    </Link>
                    <div
                      className={`${subMenuOpen === ele.title ? "flex" : "hidden"
                        } bg-blue-600 text-white z-[100] min-w-40 absolute top-0 right-[100%] flex-col peer-active:flex  duration-300`}
                    >
                      {ele.subItems.map((subItem, i) => {
                        return (
                          <NavLink
                            key={i}
                            to={subItem.path}
                            onClick={() => setSubMenuOpen("")}
                            className="subMenu-items sub-items w-full px-4 py-4 text-wrap hover:bg-white hover:text-red-500 cursor-pointer duration-300"
                          >
                            {subItem.title}
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                );
              //nav items other than Organisation
              else
                return (
                  <NavLink
                    key={i}
                    to={ele.path}
                    onClick={() => setSubMenuOpen("")}
                    className="mobile-screen-links sub-items px-8 py-4   cursor-pointer w-full hover:text-red-500 hover:bg-white active:bg-white duration-300"
                  >
                    {ele.title}
                  </NavLink>
                );
            })}
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
