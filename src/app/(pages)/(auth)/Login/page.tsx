"use client";
import React from "react";
import { Inputs } from "@/app/(pages)/(auth)/components/inputs";
import Image from "next/image";
import InfoPenal from "../components/InfoPanel";
import Link from "next/link";
const Login = () => {
  return (
    <div className=" xl:bg-[url('/bg-imges/ds.png')] h-screen  flex justify-center bg-cover ">
      <div className="flex  xl:w-[1440px]">
        {" "}
        {/* Left container */}
        <div className="">
          <div className="bg-[url('/bg-imges/bg.png')] xl:bg-none bg-cover">
            <div className="">
              <div className="flex flex-col justify-evenly w-full xl:w-[619px] h-screen">
                <div className="w-full flex flex-col items-center justify-center ">
                  <div className="flex flex-col justify-center items-center w-full gap-6">
                    <div className="">
                      <img src="/formimges/login-imges/logo-71.png" alt="" />
                    </div>
                    <div className="mb-8">
                      <h1 className="text-[#2D3035] font-semibold text-center font-urbanist leading-[38px] text-[30px]">
                        Welcome back
                      </h1>
                      <h1 className="text-[#626974] font-normal text-center font-urbanist tracking-[0%] leading-[24px] text-[16px]">
                        Welcome back! Please enter your details.
                      </h1>
                    </div>
                  </div>
                  <div className="w-full xl:max-w-[360px]">
                    <div className="">
                      <Inputs
                        type="email"
                        name="Email"
                        heading="Email"
                        Placeholder="olivia@untitledui.com"
                        svg={<img src="/mail.svg" alt="" />}
                        svg2
                        className="w-full xl:max-w-[360px] "
                      />
                    </div>
                    <div className="">
                      <Inputs
                        type="password"
                        name="Enter_Password"
                        heading="Enter Password"
                        Placeholder="Enter Password"
                        svg={""}
                        svg2={<img src="/visibility.svg" alt="" />}
                        className="mt-[20px] w-full xl:max-w-[360px]"
                      />
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                      <div className="">
                        <input
                          type="checkbox"
                          id="myCheckbox"
                          // This will trigger handleCheckboxChange function
                        />
                        <label
                          className="text-[#344054] font-normal text-center font-urbanist leading-[20px] text-[14px] pl-2"
                          htmlFor="myCheckbox"
                        >
                          Remember for 30 days
                        </label>
                      </div>
                      <div className="">
                        <h1 className="font-semibold text-[#2D3035] text-center font-urbanist leading-[20px] text-[14px]">
                          <Link href="/ForgotPassword">Forgot password</Link>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <button className="py-[10px] border-[1px] border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 transform   rounded-[8px] px-24 md:px-[160.5px]">
                      Login
                    </button>
                    <div className="flex justify-center mt-4">
                      <h1 className="text-[#626974] font-normal text-center font-urbanist tracking-[0%] leading-[20px] text-[14px]">
                        Don’t have an account?
                      </h1>
                      <h1 className="text-[#2D3035] font-semibold text-center font-urbanist tracking-[0%] leading-[20px] text-[14px]">
                       
                        <Link href="/SignUp"> Sign up</Link>
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
        <div className="scrollbar-hide overflow-y-auto">
          <InfoPenal />
        </div>
      </div>
    </div>
  );
};

export default Login;
