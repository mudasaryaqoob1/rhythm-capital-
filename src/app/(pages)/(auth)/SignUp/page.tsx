"use client";
import React from "react";
import { Inputs } from "@/app/(pages)/(auth)/components/inputs";
import Link from "next/link";
// import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const SignUp = () => {
  return (
    <div className=" xl:bg-[url('/bg-imges/sinupbg.png')] h-screen  flex justify-center bg-cover ">
      <div className="flex  xl:w-[1440px]">
        {" "}
        {/* Left container */}
        <div className="">
          <div className="bg-[url('/bg-imges/bg.png')] xl:bg-none bg-cover">
            <div className="scrollbar-hide overflow-y-auto px-4 md:px-0">
              <div className="flex flex-col justify-evenly w-full xl:w-[619px] h-screen">
                <div className="w-full flex flex-col items-center justify-center ">
                  <div className="flex flex-col justify-center items-center w-full gap-6">
                    <div className="">
                      <img src="/formimges/login-imges/logo-71.png" alt="" />
                    </div>
                    <div className="mb-8">
                      <h1 className="text-[#2D3035] font-semibold text-center font-urbanist leading-[38px] text-[30px]">
                        Sign Up
                      </h1>
                      <h1 className="pt-1 text-[#626974] font-normal text-center font-urbanist leading-[24px] text-[16px]">
                        Welcome to Rythm Capital! Please Fill the details.
                      </h1>
                    </div>
                  </div>
                  <div className="w-full xl:max-w-[360px]">
                    <div className="">
                      <Inputs
                        type="text"
                        name="First Name"
                        heading="First Name"
                        Placeholder="Enter First Name"
                        svg={""}
                        svg2
                        className="w-full xl:max-w-[360px] "
                      />
                    </div>
                    <div className="">
                      <Inputs
                        type="text"
                        name="Last Name"
                        heading="Last Name"
                        Placeholder="Enter Last Name"
                        svg={""}
                        svg2={""}
                        className="mt-[20px] w-full xl:max-w-[360px]"
                      />
                    </div>
                    <div className="">
                      <Inputs
                        type="email"
                        name="Email"
                        heading="Email"
                        Placeholder="Enter Email Address"
                        svg={<img src="/mail.svg" alt="" />}
                        svg2
                        className="mt-[20px] w-full xl:max-w-[360px] "
                      />
                    </div>
                    <div className="">
                      <h1 className="mt-[20px] font-normal font-urbanist text-[16px] text-[#4D525A] leading-[24px]">
                        Username
                      </h1>
                      <Input
                        className="custom-input outline-none focus:outline-none focus:ring-4 focus:ring-[#1018280D] focus:ring-offset-1 focus:ring-offset-[#c1f338] w-full xl:max-w-[500px] border-[2px] rounded-[8px] bg-gray py-[10px] pl-[14px] mt-[9.7px]  font-urbanist font-normal  text-[16px] leading-[27px]"
                        placeholder="Enter your username"
                        suffix={
                          <Tooltip
                            title={
                              <>
                                <div>Username Rules</div>
                                <ul
                                  style={{
                                    paddingLeft: "20px",
                                    marginTop: "5px",
                                    listStyleType: "disc", // Adding bullet points (dot)
                                  }}
                                >
                                  <li>Must Start with Letter</li>
                                  <li>Can Only contain letter </li>
                                  <li>Between 3 and 64 words</li>
                                  <li>Cannot Use an existing username</li>
                                </ul>
                              </>
                            }
                          >
                            <QuestionCircleOutlined
                              style={{ color: "#4D525A" }}
                            />
                          </Tooltip>
                        }
                      />
                    </div>
                    <div className="">
                      <h1 className="mt-[20px] font-normal font-urbanist text-[16px] text-[#4D525A] leading-[24px]">
                        Password
                      </h1>
                      <Input
                        type="password"
                        className="custom-input outline-none focus:outline-none focus:ring-4 focus:ring-[#1018280D] focus:ring-offset-1 focus:ring-offset-[#c1f338] w-full xl:max-w-[500px] border-[2px] rounded-[8px] bg-gray py-[10px] pl-[14px] mt-[9.7px]  font-urbanist font-normal  text-[16px] leading-[27px]"
                        placeholder="Enter Password"
                        suffix={
                          <Tooltip
                            title={
                              <>
                                <div>Password Rules:</div>
                                <ul
                                  style={{
                                    paddingLeft: "20px",
                                    marginTop: "5px",
                                    listStyleType: "disc", // Adding bullet points (dot)
                                  }}
                                >
                                  <li>Between 8 & 64 Characters.</li>
                                  <li>Atleast one upper case letter.</li>
                                  <li>Atleast one number.</li>
                                  <li>
                                    Atleast special symbol (i.e : !@#()$%^&*)
                                  </li>
                                  <li>Use Valid Character</li>
                                </ul>
                              </>
                            }
                          >
                            <QuestionCircleOutlined
                              style={{ color: "#4D525A" }}
                            />
                          </Tooltip>
                        }
                      />
                    </div>

                    <div className="mt-5">
                      <input
                        type="checkbox"
                        id="myCheckbox"
                        // This will trigger handleCheckboxChange function
                      />
                      <label
                        className="text-[#344054] font-normal text-center font-urbanist leading-[20px] text-[14px] pl-1"
                        htmlFor="myCheckbox"
                      >
                        I have read and agree to the Terms of Use and Privacy{" "}
                        <span className="lg:pl-4">Policy</span>
                      </label>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Link href="/planes">
                      <button className="py-[10px] border-[1px] border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 transform   rounded-[8px] px-24 md:px-[160.5px]">
                        Sign up
                      </button>
                    </Link>
                    <div className="flex justify-center mt-4">
                      <h1 className="text-[#626974] font-normal text-center font-urbanist tracking-[0%] leading-[20px] text-[14px]">
                        Already have an account?
                      </h1>
                      <h1 className="text-[#2D3035] font-semibold text-center font-urbanist tracking-[0%] leading-[20px] text-[14px]">
                        <Link href="/Login">Login</Link>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className=" lg:ml-8 mt-6 text-[#475467] font-urbanist text-[14px] leading-5">
                  <h1>© Rythm Capital 2027</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right container */}
        {/* <div className=""></div> */}
      </div>
    </div>
  );
};

export default SignUp;
