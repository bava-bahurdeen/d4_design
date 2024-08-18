"use client";
import React, { useState } from "react";
import { CgArrowRightR } from "react-icons/cg";
import Image from "next/image";
import zoho from "@assets/hero/zoho-logo-512.png";
import tally from "@assets/hero/Tally_-_Logo-1.png";
import monday from "@assets/hero/monday logo.png";
import partner1 from "@assets/hero/Zoho advanced_partner Logo.png";
import partner2 from "@assets/hero/monday partner logo.png";
import partner3 from "@assets/hero/tally partner logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaRedhat, FaRegUser } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import logo from "@assets/nav/D4A-logo Only-final-vertical -1.png";
import { FaRegCheckCircle } from "react-icons/fa";
import { boxes, Flex, saas, countryTimezones } from "./data";
import { PiChatsBold } from "react-icons/pi";
import { Select,SelectProps } from "antd";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const { Option } = Select;
export default function Home() {
  const [Tab, setTab] = useState<Number>(1);
  const hero1 = {
    hidden: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const hero2 = {
    hidden: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 0.5,
      },
    },
  };
 
  return (
    <main>
      <span className="fixed z-50 text-3xl md:text-4xl bg-[#949393] rounded-full text-white p-2 md:p-3 bottom-5 right-2 ">
        <PiChatsBold />
      </span>
      {/* hero section */}
      <section>
        <div className="container mx-auto py-14">
          <div className="flex flex-col lg:flex-row gap-y-5 justify-center gap-x-52 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={hero1}
              className="grid place-items-center gap-y-4"
            >
              <h1 className="text-primary font-Arvo w-[18rem]  md:w-[25rem] font-semibold !leading-[3rem]  text-center text-wrap text-2xl lg:text-3xl">
                {" "}
                <span className="text-4xl md:text-6xl font-semibold">
                  TRANSFORM
                </span>{" "}
                YOUR{" "}
                <span className="text-4xl md:text-6xl font-semibold">
                  BUSINESS{" "}
                </span>{" "}
                WITH THE WORLD{"'"}S
                <span className=" text-4xl md:text-6xl font-semibold">
                  BEST AUTOMATION
                </span>{" "}
                SOFTWARE!
              </h1>
              <div className="hidden lg:block">
                <button className=" p-3 px-12 outline-none border rounded shadow-lg shadow-primary border-primary flex items-center gap-x-2 text-primary text-xl hover:bg-primary hover:text-white transition-all duration-300 ">
                  Get Started!{" "}
                  <span className="text-xl">
                    <CgArrowRightR />
                  </span>
                </button>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={hero2}
              className=" grid place-items-center space-y-14"
            >
              <Image src={zoho} alt="zoho" className="w-[290px]"></Image>
              <Image src={tally} alt="tally" className="w-[236px]"></Image>
              <Image src={monday} alt="monday" className="w-[325px]"></Image>
              <div className="block lg:hidden">
                <button className=" p-3 px-12 border rounded shadow-lg shadow-primary border-primary flex items-center gap-x-2 text-primary text-xl ">
                  Get Started!{" "}
                  <span className="text-xl">
                    <CgArrowRightR />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* We are Certified SaaS Consultants section */}

      <section>
        <div className="container mx-auto grid place-items-center  lg:h-svh">
          <div className="grid place-items-center font-trebuchet gap-y-8  ">
            <h2 className="font-trebuchet text-center text-primary text-4xl leading-10 font-semibold">
              We are Certified SaaS Consultants
            </h2>
            <p className="font-light text-center text-lg  md:w-10/12">
              <span className="text-primary font-semibold">
                D4A Cloud ERP Solutions is a SaaS Consulting Partner{" "}
              </span>{" "}
              certified to help businesses customize, integrate, and implement
              SaaS products for a large spectrum of industry. Once your
              customized system is live and running in your processes, we will
              train you and your users about its functionality and also offer
              first-level customer support and manage relationships.
            </p>
            <p className="font-light text-center text-lg md:w-10/12">
              With more than 10 years of experience in SaaS business, We know
              just what you need. D4A is led by experienced business and
              technology professionals. We have focus on cloud based ERP and CRM
              solutions. We provide services of Technology Planning and
              Deployment, SaaS (Software as a Service) applications deployment,
              Application Maintenance and Data Management. We also have
              expertise on Zoho{"'"}s industry specific vertical solutions .
            </p>
            <p className="font-light text-center text-lg md:w-10/12">
              With our{" "}
              <span className="text-primary font-semibold">
                SaaS Consultation services
              </span>
              , we help SMBs and enterprises in streamlining and transforming
              their complex business processes while connecting to their
              customers in a whole anew way.
            </p>
          </div>
        </div>
      </section>
    
      {/* partner images section */}
      <section>
        <div className="container mx-auto overflow-hidden  ">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{once:true}}
            transition={{ duration: 0.8 }}
            className="  flex flex-col lg:flex-row justify-center items-center gap-y-3 gap-x-7 mt-10 lg:mt-0  xl:mt-0"
          >
            <Image
              src={partner1}
              alt="zoho partner"
              className="lg:w-[250px] xl:w-[350px]"
            ></Image>
            <Image
              src={partner2}
              alt="monday partner"
              className=" lg:w-[250px] w-[704px] xl:w-[350px]"
            ></Image>
            <Image
              src={partner3}
              alt="tally partner"
              className=" lg:w-[250px] xl:w-[350px]"
            ></Image>
          </motion.div>
        </div>
      </section>
      <section></section>
      {/* welcome section */}
      <section>
        <div className="container mx-auto welcome w-full h-screen mt-20  lg:py-6">
          <div className="hidden lg:block">
            <h2 className="text-secondary text-center font-roboto text-3xl font-semibold ">
              Welcome!
            </h2>
            <p className="text-white text-center text-xs mt-3">
              Book your appointment in a few simple steps: Choose a service,
              pick your date and time, and fill in your details. See you soon!
            </p>
          </div>
          <div className="hidden xl:block">
            <div className="flex items-start  ml-28 mt-10 ">
              <div className="w-full space-y-10">
                <div
                  className={` ${
                    Tab == 1 ? "border-l-2 border-l-secondary" : "border-none"
                  } h-16 w-9/12  flex justify-between items-center  text-white cursor-pointer p-2 px-4  `}
                  onClick={() => setTab(1)}
                >
                  <div className="flex gap-x-2 items-center">
                    <span className=" text-secondary font-light">
                      <FaRedhat />{" "}
                    </span>
                    <div className="flex flex-col gap-x-2">
                      <p>Lets Talk</p>
                      <p className="text-xs">15 mins</p>
                    </div>
                  </div>
                  <span className="text-secondary text-xl">
                    <MdOutlineKeyboardArrowRight />
                  </span>
                </div>
                <div
                  className={` ${
                    Tab == 2 ? "border-l-2 border-l-secondary " : "border-none"
                  } w-9/12 h-16 flex justify-between items-center  text-white cursor-pointer p-2 px-4  `}
                  onClick={() => setTab(2)}
                >
                  <div className="flex gap-x-2 items-center">
                    <span className="text-secondary ">
                      <FaRegCalendarAlt />{" "}
                    </span>
                    <p className="text-xs">Date,Time & consultant</p>
                  </div>
                  <span className="text-secondary text-xl">
                    <MdOutlineKeyboardArrowRight />
                  </span>
                </div>
                <div className="flex justify-between items-center w-9/12 text-white cursor-pointer  p-2 px-4 ">
                  <div className="flex gap-x-2 items-center">
                    <span className="text-[#949393] ">
                      <FaRegUser />{" "}
                    </span>
                    <p className="text-xs text-[#949393]">Your info</p>
                  </div>
                  <span className="text-secondary text-xl">
                    <MdOutlineKeyboardArrowRight />
                  </span>
                </div>
              </div>

              <div className="w-full  ">
                <div
                  className={`${
                    Tab == 1 ? "block" : "hidden"
                  }  flex justify-between bg-[#595959] p-2 px-4`}
                >
                  <div className="flex items-center">
                    <Image src={logo} className="w-16" alt="logo" />
                    <p className="text-white">Let{"'"}s Talk</p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <p className="text-xs text-white">15 mins</p>
                    <span className="text-secondary">
                      <FaRegCheckCircle />
                    </span>
                  </div>
                </div>
                <div className={`${Tab == 2 ? "block" : "hidden"} space-y-5  `}>
                  <div>
                    <p className="text-white text-xs font-semibold">
                      Your appointment will be booked with
                    </p>
                  </div>
                  <div className="flex flex-col-reverse md:flex-row justify-between">
                    <div>
                    <Calendar defaultView="month" className='custom-calendar'/>     
                    </div>
                    <div>
                      <Select
                        showSearch
                        placeholder="Select a Timezone"
                        className="!w-56 !h-10 !bg-transparent !text-slate-400"
                        // filterOption={(input, option) =>
                        //   (option?.label ?? "").toLowerCase()
                        //     .includes(input.toLowerCase())
                        // }
                        //   optionFilterProp="children"
                      >
                        {countryTimezones.map(
                          ({id, country, timezone, utcOffset }) => (
                            <Option
                              key={id}
                              value={timezone}
                              label={country}
                            >
                              {`${country} (${utcOffset})`}
                            </Option>
                          )
                        )}
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 xl:hidden">
            <p className="text-white text-xs">
              Your appointment will be booked with{" "}
            </p>
            <div className="flex  flex-col-reverse gap-y-2 md:flex-row  justify-between">
              <div className="grid place-items-center mt-10">
              <Calendar defaultView="month"/>     
                         </div>
              <div className="mt-10">
              <Select
                        showSearch
                        placeholder="Select a Timezone"
                        className="!w-full !h-10 !text-slate-400"
                        // filterOption={(input, option) =>
                        //   (option?.label ?? "")
                        //     .toLowerCase()
                        //     .includes(input.toLowerCase())
                        // }
                      >
                        {countryTimezones.map(
                          ({id, country, timezone, utcOffset }) => (
                            <Option
                              key={id}
                              value={timezone}
                              label={country}
                            >
                              {`${country} (${utcOffset})`}
                            </Option>
                          )
                        )}
                      </Select>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* box section */}
      <section>
        <div className="overflow-hidden">
          <div className="container mx-auto  flex flex-wrap justify-between items-center gap-8 xl:gap-0  mt-28">
            {boxes.map(({ id, Img, text }) => {
              return (
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  key={id}
                  className="w-full md:w-80 border"
                >
                  <div className="grid place-items-center bg-primary h-48">
                    <Image src={Img} alt="images" className="w-44" />
                  </div>

                  <h2 className="font-trebuchet text-2xl font-semibold text-center py-8">
                    {text}
                  </h2>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* flex section */}
      <section>
        <div className="container mx-auto mt-20 ">
          <div className="xl:pl-40 overflow-hidden">
            {Flex.map(({ id, Img, head, lead }) => {
              return (
                <motion.div
                key={id}
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`${
                    id % 2 === 0 ? "lg:flex-row-reverse" : ""
                  } gap-x-20 flex flex-col lg:flex-row items-center`}
                >
                  <Image src={Img} alt="flex image" className="lg:w-5/12" />
                  <div className="font-trebuchet grid place-items-center text-start md:text-center  w-full lg:text-start space-y-4">
                    <h2 className="text-primary text-start text-2xl  md:text-3xl font-semibold ">
                      {head}
                    </h2>
                    <p className="  text-lg w-10/12 text-start md:text-center lg:text-start ">
                      {lead}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* saas solutions */}
      <section>
        <div className="grid place-items-center mt-6">
          <h2 className="text-primary text-2xl md:text-3xl font-trebuchet font-semibold text-center">
            SaaS Solutions We Offer
          </h2>
          <div className=" w-10 h-[3px] translate-y-8 bg-primary"></div>
        </div>

        <div className="container mx-auto bg-[#f6f6f8] py-10 md:py-20 md:px-28 h-full mt-10 ">
          <div className="flex flex-wrap justify-center gap-y-8 items-center xl:px-20">
            {saas.map(({ id, icon, head, lead, high, lead2 }) => {
              return (
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  key={id}
                  className="font-trebuchet text-center grid place-items-center gap-5 lg:w-4/12 lg:p-2 lg:px-4"
                >
                  <span className="text-2xl text-white bg-primary rounded-full p-2">
                    {icon}
                  </span>
                  <h2 className="text-lg font-semibold text-primary">{head}</h2>
                  <p className="">
                    {lead}{" "}
                    <span className="text-primary font-semibold">{high}</span>{" "}
                    {lead2}{" "}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
