"use client"; // Add this if you are using Next.js App Router and need client-side behavior

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@assets/nav/D4A-logo Only-final-vertical -1.png";
import { social1, social2, menu } from "./data";
import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [Isopen, setIsopen] = useState(false);
  const [Openindex, setOpenindex] = useState<number | null>(null);
  const [onMenu, setOnMenu] = useState<boolean>(false);

  const handleEnter = (index: number) => {
    setOpenindex(index);
  };

  const handleLeave = () => {
    setOpenindex(null);
  };
  const handleToggle = () => {
    setIsopen(!Isopen);
  };
  const handleclick = (index: number) => {
    setOpenindex(index);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setOnMenu(true);
      } else if (window.screenY < 200) {
        setOnMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <header className="container mx-auto pt-12 shadow">
        <nav className="flex justify-between items-center lg:items-stretch lg:flex-col lg:justify-center">
          {/* First Menu */}
          <div className="flex  justify-around items-center">
            <div className="flex flex-col lg:flex-row gap-x-2">
              <Image src={logo} alt="logo" className="w-20 object-contain" />
              <div>
                <h1 className="text-primary font-Arvo font-medium max-w-8/12  text-2xl ">
                  D4A Cloud ERP Solutions
                </h1>
                <p className="text-sm font-Arimo text-black1">
                  Drive For Automation
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex gap-5">
                {social1.map(({ id, icon, text }) => (
                  <div
                    key={id}
                    className="h-12 px-3 flex items-center gap-2 border-r-[1px] border-black border-dotted"
                  >
                    <span>{icon}</span>
                    <p className=" text-black2 font-serif">{text}</p>
                  </div>
                ))}
                {social2.map(({ id, icon }) => (
                  <div
                    key={id}
                    className="flex gap-1 items-center text-[18px] text-primary"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Second Menu */}
          <div className="hidden lg:block">
            <div className="flex pl-28 py-4 items-center gap-5">
              {menu.map(({ id, link, icon, submenu }) => (
                <div
                  key={id}
                  className={`${
                    id === 1 ? "bg-primary text-white" : ""
                  } text-center relative flex gap-2 items-center py-[8px] px-[16px] rounded cursor-pointer hover:bg-primary hover:text-white`}
                  onMouseEnter={() => handleEnter(id)}
                  onMouseLeave={handleLeave}
                >
                  <p className="font-serif lg:text-xs xl:text-base ">{link}</p>
                  <span>{icon}</span>
                  {submenu && (
                    <ul
                      className={`${
                        Openindex === id
                          ? "block transition-all duration-300 opacity-100"
                          : "hidden opacity-0"
                      } absolute top-14 left-0 bg-primary w-64 text-start font-serif`}
                    >
                      {submenu.map(({ id, text }) => (
                        <li
                          key={id}
                          className="px-4 py-3 border-b-[1px] border-white text-white"
                        >
                          {text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={handleToggle}
            className="lg:hidden cursor-pointer w-8 h-5 relative flex flex-col justify-between items-center"
          >
            <span
              className={`block w-7 md:w-full h-[2px] bg-primary transition-transform duration-300 transform ${
                Isopen ? "rotate-45 -translate-y-0" : ""
              }`}
            ></span>
            <span
              className={`block w-7 md:w-full h-[2px] bg-primary transition-opacity duration-300 ${
                Isopen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-7 md:w-full h-[2px] bg-primary transition-transform duration-300 transform ${
                Isopen ? "-rotate-45 -translate-y-[18px]" : ""
              }`}
            ></span>
          </div>
        </nav>
        {/* Mobile Menu */}
      </header>
      <div className="overflow-hidden">
        <AnimatePresence>
          {Isopen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className={` flex flex-col  w-full h-full items-start  bg-primary transition-all duration-1000`}
            >
              {menu.map(({ id, link, icon, icon2, submenu }) => (
                <div
                  key={id}
                  className={` text-white text-center  w-full   flex  flex-wrap justify-between mt-6   border-b-[1px] items-center   cursor-pointer `}
                  onClick={() => handleclick(id)}
                >
                  <p
                    className={`${
                      Openindex === id ? "text-black" : "text-white"
                    } font-serif text-center pb-2  pl-4 text-sm`}
                  >
                    {link}
                  </p>
                  {Openindex === id ? (
                    <span className="text-2xl ">{icon2}</span>
                  ) : (
                    <span className="text-2xl ">{icon}</span>
                  )}
                  {submenu && (
                    <ul
                      className={`${
                        Openindex === id ? "block" : "hidden"
                      } w-full   gap-y-5  font-serif`}
                    >
                      {submenu.map(({ id, text }) => {
                        return (
                          <li
                            key={id}
                            className="text-start px-8 py-2 text-sm  border-t-[1px] border-white text-white"
                          >
                            {text}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
              <div className=" pl-80 flex py-4 gap-2 items-center justify-center w-full ">
                <LuPhone color="#252530" />
                <MdMailOutline color="#252530" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fixed Menu on Scroll */}
      <div className="hidden lg:block">
        <div
          className={`flex pl-52 py-4 items-center gap-5 bg-transparent fixed top-0 left-0 z-50  bg-white bg-opacity-75 w-full  ${
            onMenu ? "translate-y-0" : "-translate-y-96"
          }`}
        >
          {menu.map(({ id, link, icon, submenu }) => (
            <div
              key={id}
              className={`${
                id === 1 ? "bg-primary text-white" : ""
              } text-center relative flex gap-2 items-center py-[8px] px-[16px] font-serif rounded cursor-pointer hover:bg-primary hover:text-white`}
              onMouseEnter={() => handleEnter(id)}
              onMouseLeave={handleLeave}
            >
              <p className="font-roboto text-sm">{link}</p>
              <span>{icon}</span>
              {submenu && (
                <ul
                  className={`${
                    Openindex === id
                      ? "block transition-all duration-300 opacity-100"
                      : "hidden opacity-0"
                  } absolute top-14 left-0 font-serif bg-primary w-64 text-start`}
                >
                  {submenu.map(({ id, text }) => (
                    <li
                      key={id}
                      className="px-4 py-3 border-b-[1px] border-white text-white"
                    >
                      {text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
