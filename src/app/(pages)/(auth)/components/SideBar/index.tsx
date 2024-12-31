"use client";
import { useState } from "react";
// import React {useState} from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation'
 
export const SideBar = ({}) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const pathname = usePathname()
  // const searchParams = useSearchParams()
  console.log("pethamame",pathname)
  // console.log("searchParams",searchParams)
  return (
    <>
      <button
       className="absolute lg:hidden left-[20px] top-6"
       onClick={() => setIsSidebar(!isSidebar)}
      >
        <svg
          width="28"
          height="22"
          viewBox="0 0 28 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.8125"
            width="27.6618"
            height="2.16133"
            rx="1.08066"
            fill="black"
          />
          <rect
            y="9.94336"
            width="27.6618"
            height="2.16133"
            rx="1.08066"
            fill="black"
          />
          <rect
            y="19.0762"
            width="27.6618"
            height="2.16133"
            rx="1.08066"
            fill="black"
          />
        </svg>
      </button>
     
      <div
        className={`md:w-[312px] w-full fixed lg:relative z-10 h-full overflow-y-scroll  scrollbar-hide bg-gray-100 transform ${
          isSidebar ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300`}
      >
        <div className="bg-[#022213] w-full md:max-w-[312px] h-[1420px] left-[-100%]  text-white">
        <button
            className="absolute top-7 right-[20px] lg:hidden bg-[#C1F338] text-black px-2 rounded-md"
            onClick={() => setIsSidebar(false)}
          >
            X
          </button>
          <div className=" flex h-full flex-col justify-between">
            {/* Logo Section */}
            <div className="logo flex justify-center items-center gap-2 text-center py-6 ">
              <img src="/sidebar/logo-71.png" alt="" />
              <h1 className="text-xl font-bold">Rythm Capital</h1>
            </div>

            {/* Navigation Links */}
            <div className=" flex  flex-col justify-between  h-full">
              <div className="">
                <ul className="menu mt-4 flex flex-col gap-1 justify-center items-center ">
                  <li className={`menu-item hover:bg-[#C1F338] rounded-sm ${pathname=="/Dashboard"?"bg-[#C1F338] text-black":""} hover:text-black w-full md:w-[272px] px-3 py-2`}  onClick={() => setIsSidebar(false)}>
                    <Link href="/Dashboard">
                      <div className="flex items-center gap-3">
                        <span className="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={ ` ${pathname=="/Dashboard"?"stroke-black":"stroke-white"}`}
                              d="M8.12602 14C8.57006 15.7252 10.1362 17 12 17C13.8638 17 15.4299 15.7252 15.874 14M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>

                        <h1 className="font-urbanist font-semibold leading-[24px] text-[16px]">
                          Dashboard
                        </h1>
                      </div>
                    </Link>
                  </li>
                  <li  className={`menu-item hover:bg-[#C1F338] rounded-sm ${pathname=="/payoutmethod"?"bg-[#C1F338] text-black":""} hover:text-black w-full md:w-[272px] px-3 py-2`}>
                    <Link href="/payoutmethod">
                      <div className="flex items-center gap-3">
                        <span className="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={ ` ${pathname=="/payoutmethod"?"stroke-black":"stroke-white"}`}
                              d="M8 21V7C8 6.07003 8 5.60504 8.10222 5.22354C8.37962 4.18827 9.18827 3.37962 10.2235 3.10222C10.605 3 11.07 3 12 3C12.93 3 13.395 3 13.7765 3.10222C14.8117 3.37962 15.6204 4.18827 15.8978 5.22354C16 5.60504 16 6.07003 16 7V21M5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V10.2C22 9.07989 22 8.51984 21.782 8.09202C21.5903 7.71569 21.2843 7.40973 20.908 7.21799C20.4802 7 19.9201 7 18.8 7H5.2C4.07989 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>

                        <h1 className="font-urbanist font-semibold leading-[24px] text-[16px]">
                          Payment Method
                        </h1>
                      </div>
                    </Link>
                  </li>
                  <li  className={`menu-item hover:bg-[#C1F338] rounded-sm ${pathname=="/requestpayout"?"bg-[#C1F338] text-black":""} hover:text-black w-full md:w-[272px] px-3 py-2`}>
                    <Link href="/requestpayout">
                      <div className="flex items-center gap-3">
                        <span className="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                             className={ ` ${pathname=="/requestpayout"?"stroke-black":"stroke-white"}`}
                              d="M10 16H14M8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>

                        <h1 className="font-urbanist font-semibold leading-[24px] text-[16px]">
                          Request Payout
                        </h1>
                      </div>
                    </Link>
                  </li>
                  <li className={`menu-item hover:bg-[#C1F338] rounded-sm ${pathname=="/flattenaccounts"?"bg-[#C1F338] text-black":""} hover:text-black w-full md:w-[272px] px-3 py-2`}>
                    <Link href="/flattenaccounts">
                      <div className="flex items-center gap-3">
                        <span className="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={ ` ${pathname=="/flattenaccounts"?"stroke-black":"stroke-white"}`}
                              d="M16.5 16L21.5 21M21.5 16L16.5 21M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>

                        <h1 className="font-urbanist font-semibold leading-[24px] text-[16px]">
                          Flatten Accounts
                        </h1>
                      </div>
                    </Link>
                  </li>
                  <li className={`menu-item hover:bg-[#C1F338] rounded-sm ${pathname=="/signatures"?"bg-[#C1F338] text-black":""} hover:text-black w-full md:w-[272px] px-3 py-2`}>
                    <Link href="/signatures">
                      <div className="flex items-center gap-3">
                        <span className="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={ ` ${pathname=="/signatures"?"stroke-black":"stroke-white"}`}
                              d="M16 8.00001L2 22M18 15H9M6.6 19H13.3373C13.5818 19 13.7041 19 13.8192 18.9724C13.9213 18.9479 14.0188 18.9075 14.1083 18.8526C14.2092 18.7908 14.2957 18.7043 14.4686 18.5314L19.5 13.5C19.739 13.261 19.8584 13.1416 19.9546 13.0358C22.0348 10.7473 22.0348 7.25269 19.9546 4.96424C19.8584 4.85845 19.739 4.73897 19.5 4.50001C19.261 4.26105 19.1416 4.14157 19.0358 4.04541C16.7473 1.96525 13.2527 1.96525 10.9642 4.04541C10.8584 4.14157 10.739 4.26105 10.5 4.50001L5.46863 9.53138C5.29568 9.70433 5.2092 9.79081 5.14736 9.89172C5.09253 9.9812 5.05213 10.0787 5.02763 10.1808C5 10.2959 5 10.4182 5 10.6628V17.4C5 17.9601 5 18.2401 5.10899 18.454C5.20487 18.6422 5.35785 18.7951 5.54601 18.891C5.75992 19 6.03995 19 6.6 19Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>

                        <h1 className="font-urbanist font-semibold leading-[24px] text-[16px]">
                          Signatures
                        </h1>
                      </div>
                    </Link>
                  </li>
                  <li className={`menu-item hover:bg-[#C1F338] rounded-sm ${pathname=="/terminal"?"bg-[#C1F338] text-black":""} hover:text-black w-full md:w-[272px] px-3 py-2`}>
                    <Link href="/terminal">
                      <div className="flex items-center gap-3">
                        <span className="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={ ` ${pathname=="/terminal"?"stroke-black":"stroke-white"}`}
                              d="M21.2 22C21.48 22 21.62 22 21.727 21.9455C21.8211 21.8976 21.8976 21.8211 21.9455 21.727C22 21.62 22 21.48 22 21.2V10.8C22 10.52 22 10.38 21.9455 10.273C21.8976 10.1789 21.8211 10.1024 21.727 10.0545C21.62 10 21.48 10 21.2 10L18.8 10C18.52 10 18.38 10 18.273 10.0545C18.1789 10.1024 18.1024 10.1789 18.0545 10.273C18 10.38 18 10.52 18 10.8V13.2C18 13.48 18 13.62 17.9455 13.727C17.8976 13.8211 17.8211 13.8976 17.727 13.9455C17.62 14 17.48 14 17.2 14H14.8C14.52 14 14.38 14 14.273 14.0545C14.1789 14.1024 14.1024 14.1789 14.0545 14.273C14 14.38 14 14.52 14 14.8V17.2C14 17.48 14 17.62 13.9455 17.727C13.8976 17.8211 13.8211 17.8976 13.727 17.9455C13.62 18 13.48 18 13.2 18H10.8C10.52 18 10.38 18 10.273 18.0545C10.1789 18.1024 10.1024 18.1789 10.0545 18.273C10 18.38 10 18.52 10 18.8V21.2C10 21.48 10 21.62 10.0545 21.727C10.1024 21.8211 10.1789 21.8976 10.273 21.9455C10.38 22 10.52 22 10.8 22L21.2 22Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 6.8C10 6.51997 10 6.37996 10.0545 6.273C10.1024 6.17892 10.1789 6.10243 10.273 6.0545C10.38 6 10.52 6 10.8 6H13.2C13.48 6 13.62 6 13.727 6.0545C13.8211 6.10243 13.8976 6.17892 13.9455 6.273C14 6.37996 14 6.51997 14 6.8V9.2C14 9.48003 14 9.62004 13.9455 9.727C13.8976 9.82108 13.8211 9.89757 13.727 9.9455C13.62 10 13.48 10 13.2 10H10.8C10.52 10 10.38 10 10.273 9.9455C10.1789 9.89757 10.1024 9.82108 10.0545 9.727C10 9.62004 10 9.48003 10 9.2V6.8Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M3 12.8C3 12.52 3 12.38 3.0545 12.273C3.10243 12.1789 3.17892 12.1024 3.273 12.0545C3.37996 12 3.51997 12 3.8 12H6.2C6.48003 12 6.62004 12 6.727 12.0545C6.82108 12.1024 6.89757 12.1789 6.9455 12.273C7 12.38 7 12.52 7 12.8V15.2C7 15.48 7 15.62 6.9455 15.727C6.89757 15.8211 6.82108 15.8976 6.727 15.9455C6.62004 16 6.48003 16 6.2 16H3.8C3.51997 16 3.37996 16 3.273 15.9455C3.17892 15.8976 3.10243 15.8211 3.0545 15.727C3 15.62 3 15.48 3 15.2V12.8Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2 2.8C2 2.51997 2 2.37996 2.0545 2.273C2.10243 2.17892 2.17892 2.10243 2.273 2.0545C2.37996 2 2.51997 2 2.8 2H5.2C5.48003 2 5.62004 2 5.727 2.0545C5.82108 2.10243 5.89757 2.17892 5.9455 2.273C6 2.37996 6 2.51997 6 2.8V5.2C6 5.48003 6 5.62004 5.9455 5.727C5.89757 5.82108 5.82108 5.89757 5.727 5.9455C5.62004 6 5.48003 6 5.2 6H2.8C2.51997 6 2.37996 6 2.273 5.9455C2.17892 5.89757 2.10243 5.82108 2.0545 5.727C2 5.62004 2 5.48003 2 5.2V2.8Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>

                        <h1 className="font-urbanist font-semibold leading-[24px] text-[16px]">
                          Terminal
                        </h1>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <div className="">
                  <ul className="menu mt-4 flex flex-col gap-1 justify-center items-center ">
                    <li className={`menu-item hover:bg-[#C1F338] rounded-sm ${pathname=="/settings"?"bg-[#C1F338] text-black":""} hover:text-black w-full md:w-[272px] px-3 py-2`}>
                      <Link href="/settings">
                        <div className="flex items-center gap-3">
                          <span className="">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className={ ` ${pathname=="/settings"?"stroke-black":"stroke-white"}`}
                                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                stroke="#2D3035"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z"
                                stroke="#2D3035"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>

                          <h1 className="font-urbanist font-semibold leading-[24px] text-[16px]">
                            Settings
                          </h1>
                        </div>
                      </Link>
                    </li>
                    <li className={`menu-item hover:bg-[#C1F338] rounded-sm ${pathname=="/helpsupport"?"bg-[#C1F338] text-black":""} hover:text-black w-full md:w-[272px] px-3 py-2`}>
                      <Link href="/helpsupport">
                        <div className="flex items-center gap-3">
                          <span className="">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                               className={ ` ${pathname=="/helpsupport"?"stroke-black":"stroke-white"}`}
                                d="M9.13626 9.13628L4.92893 4.92896M4.92893 19.0711L9.16797 14.8321M14.8611 14.8638L19.0684 19.0711M19.0684 4.92896L14.8287 9.16862M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>

                          <h1 className="font-urbanist font-semibold leading-[24px] text-[16px]">
                            Help & Support
                          </h1>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <div className=" flex my-6 pt-4 border-t-[1px] border-[#D0D5DD] w-[280px]">
                    <div className=" flex gap-3">
                      <div className="">
                        <img src="/sidebar/Avatar.png" alt="" />
                      </div>
                      <div className="">
                        <h1 className="font-urbanist font-semibold leading-[20px] text-[14px]">
                          Muhammad Hamza
                        </h1>
                        <h1 className="font-urbanist font-normal text-[#BBBFC4] leading-[24px] text-[16px]">
                          mhamza421@gmail.com
                        </h1>
                      </div>
                    </div>
                    <div className="">
                      <img src="/sidebar/Button.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
