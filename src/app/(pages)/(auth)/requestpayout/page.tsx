"use client";
import React from "react";
import { TopBar } from "../components/topbar";
import Link from "next/link";
import { BottomBar } from "../components/bottomBar";
import { Alert, Flex } from "antd";
import { Select } from "antd";
import RequestPayoutTable from "../components/requestPayoutTable";

const PayoutMethod = () => {
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, "I was closed.");
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="flex flex-col justify-between h-[100%]">
    {/* TopBar */}
     <div className=" w-full max-w-[1128px] ">
            <TopBar />
          </div>

    {/* Main Content */}
    <div className="flex-grow p-6 bg-gray-50">
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between md:items-center">
          <div className="">
            <h1 className="text-[24px] text-[#1F2A37] leading-[32px] font-bold">
              Request Payout
            </h1>
            <p className="font-normal text-[#9DA4AE] font-urbanist leading-[24px] text-[16px]">
              You can View, manage and request the payout from here
            </p>
          </div>
          <div className=" flex gap-2">
            <Link href="/">
              <button className="py-[10px] border-[1px] border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 transform font-urbanist font-semibold text-[14px] leading-[20px] text-[#2D3035]  rounded-[8px] px-[10px] md:px-[14px]">
                View Payouts
              </button>
            </Link>
          </div>
        </div>
        {/* alert note */}
        <div className="mt-5">
          <Alert
            className=" w-full max-w-[1081px] "
            message={
              <>
                <div className="flex items-center gap-3">
                  <div className="">
                    <img src="/plane/icon.png" alt="" />
                  </div>
                  <div className="">
                    <h1 className="text-[#475467] font-semibold font-urbanist leading-[28px] text-[18px]">
                      Note :
                    </h1>
                  </div>
                </div>
              </>
            }
            description={
              <>
                <div className="ml-9">
                  <h1 className="text-[#475467] font-normal font-urbanist leading-[24px] text-[16px]">
                    This request form is only active between (1-5 and 15-20) of
                    each month. If you don't see your account in the drop-down:
                  </h1>
                  <h1 className="text-[#475467] pt-2 font-normal font-urbanist leading-[24px] text-[16px]">
                    .Account may have not yet hit minimum balance
                    <br />. Already requested a payout for this account recently
                    <br />. Number of trading days required not met.
                  </h1>
                </div>
              </>
            }
            type="error"
            closable
            onClose={onClose}
          />
        </div>

        {/* request a payouts div start */}
        <div className="p-4 mt-4 rounded-xl border-[1px] bg-white border-[#D0D5DD]">
          <div className="">
            <div className=" flex gap-4 flex-col md:flex-row">
              <div className="">
                <label className="font-medium font-urbanist text-[14px] text-[#344054] leading-[20px] ">
                  Payout Method
                </label>
                <div className=" w-full md:w-[349px] border-[1px] border-[#D0D5DD] rounded-[8px] bg-gray pt-[10px] pb-2 font-urbanist mt-[6px] font-normal  text-[16px] leading-[27px]">
                  <Select
                    className=" custom-selects"
                    defaultValue="Select Payout Method"
                    style={{ width: "100%" }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "strip",
                        label: (
                          <div className="flex justify-between items-center">
                            <div className="flex gap-1 lg:gap-3 items-center">
                              <img
                                src="/requestPyouts/Stripe.png"
                                alt="Avatar"
                                className=""
                              />
                              <div>
                                <h1 className="font-medium text-[#2D3035] text-[16px] leading-[24px]">
                                  Stripe
                                </h1>
                              </div>
                            </div>
                            {/* <img src="/sidebar/Button.png" alt="Button" className="w-5 h-5" /> */}
                          </div>
                        ),
                      },
                      {
                        value: "Payoneer",
                        label: (
                          <div className="flex justify-between items-center">
                            <div className="flex gap-1 lg:gap-3 items-center">
                              <img
                                src="/requestPyouts/Payoneer.png"
                                alt="Avatar"
                                className=""
                              />
                              <div>
                                <h1 className="font-medium text-[#2D3035] text-[16px] leading-[24px]">
                                  Payoneer
                                </h1>
                              </div>
                            </div>
                            {/* <img src="/sidebar/Button.png" alt="Button" className="w-5 h-5" /> */}
                          </div>
                        ),
                      },
                      {
                        value: "Bank Account",
                        label: (
                          <div className="flex justify-between items-center">
                            <div className="flex gap-1 lg:gap-3 items-center">
                              <img
                                src="/requestPyouts/BankAccount.png"
                                alt="Avatar"
                                className=""
                              />
                              <div>
                                <h1 className="font-medium text-[#2D3035] text-[16px] leading-[24px]">
                                  Bank Account
                                </h1>
                              </div>
                            </div>
                            {/* <img src="/sidebar/Button.png" alt="Button" className="w-5 h-5" /> */}
                          </div>
                        ),
                      },
                      {
                        value: "Paypal",
                        label: (
                          <div className="flex justify-between items-center">
                            <div className="flex gap-1 lg:gap-3 items-center">
                              <img
                                src="/requestPyouts/Paypal.png"
                                alt="Avatar"
                                className=""
                              />
                              <div>
                                <h1 className="font-medium text-[#2D3035] text-[16px] leading-[24px]">
                                  Paypal
                                </h1>
                              </div>
                            </div>
                            {/* <img src="/sidebar/Button.png" alt="Button" className="w-5 h-5" /> */}
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
                <p className="pt-[6px] text-[#475467] font-medium font-urbanist text-[14px] leading-[24px]">
                  Click to <span className="text-[#89AD28]">add a new</span>{" "}
                  Payout method
                </p>
              </div>
              <div className="">
                <label className="font-medium font-urbanist text-[14px] text-[#344054] leading-[20px] ">
                  Account
                </label>
                <div className=" w-full md:w-[349px] border-[1px] border-[#D0D5DD] rounded-[8px] bg-gray pt-[10px] pb-2  font-urbanist mt-[6px] font-normal  text-[16px] leading-[27px]">
                  <Select
                    className=" custom-selects "
                    defaultValue="Select account "
                    style={{ width: "100%" }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "Paypal",
                        label: (
                          <div className="flex justify-between items-center">
                            <div className="flex gap-1 lg:gap-3 items-center">
                              <img
                                src="/requestPyouts/Paypal.png"
                                alt="Avatar"
                                className=""
                              />
                              <div>
                                <h1 className="font-medium text-[#2D3035] text-[16px] leading-[24px]">
                                  Paypal
                                </h1>
                              </div>
                            </div>
                            {/* <img src="/sidebar/Button.png" alt="Button" className="w-5 h-5" /> */}
                          </div>
                        ),
                      },
                      {
                        value: "strip",
                        label: (
                          <div className="flex justify-between items-center">
                            <div className="flex gap-1 lg:gap-3 items-center">
                              <img
                                src="/requestPyouts/Stripe.png"
                                alt="Avatar"
                                className=""
                              />
                              <div>
                                <h1 className="font-medium text-[#2D3035] text-[16px] leading-[24px]">
                                  Stripe
                                </h1>
                              </div>
                            </div>
                            {/* <img src="/sidebar/Button.png" alt="Button" className="w-5 h-5" /> */}
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="">
                <label className="font-medium font-urbanist text-[14px] text-[#4D525A] leading-[20px] ">
                  Amount
                </label>
              </div>
              <div className="">
                <input
                  type="text"
                  name="Amount "
                  placeholder="Enter amount (USD)"
                  className="outline-none focus:outline-none focus:ring-4 focus:ring-[#1018280D] focus:ring-offset-1 focus:ring-offset-[#c1f338] w-full xl:max-w-[339px] border-[1px] border-[#D0D5DD] rounded-[8px] bg-gray py-[10px] pl-[14px] mt-[9.7px]  font-urbanist font-normal  text-[16px] leading-[27px]"
                />
              </div>
            </div>
            <div className="mt-8">
              <div className="flex items-center">
                {/* Hidden Checkbox */}
                <input
                  type="checkbox"
                  id="myCheckbox"
                  className="inputs w-5 h-5 peer hidden"
                />
                {/* Custom Checkbox Label */}
                <label
                  htmlFor="myCheckbox"
                  className="  relative w-5 h-5 border-2 border-gray-400 rounded-md cursor-pointer flex items-center justify-center peer-checked:bg-[#C1F338] peer-checked:border-[#C1F338]"
                >
                  {/* Checkmark Icon */}
                  <svg
                    className="w-4 h-4 text-[#2D3035] opacity-0 peer-checked:opacity-100 transition-opacity duration-200 ease-in-out pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </label>
                {/* Text beside Checkbox */}
                <span className="ml-3 text-gray-600 font-urbanist text-[16px] leading-[24px]">
                  I Agree to Payout Request Agreement
                </span>
              </div>
              <div className="mt-3">
                <div className="flex items-center border border-gray-300 p-3 w-[263px] bg-gray-100 rounded-lg">
                  <input
                    type="checkbox"
                    // checked={checked}
                    // onChange={() => setChecked(!checked)}
                    className="w-5 h-5 mr-3"
                  />
                  <div className="flex-grow">
                    <p className="text-[#090808]">I'm not a robot</p>
                  </div>
                  <div className=" flex flex-col justify-center items-center">
                    <img
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      alt="reCAPTCHA"
                      className="w-8 h-8"
                    />
                    <div className="text-xs text-gray-500">reCAPTCHA</div>
                    <div className="text-xs text-gray-500">Privacy - Terms</div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Link href="/">
                  <button className="py-[10px] border-[1px] border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 transform font-urbanist font-semibold text-[14px] leading-[20px] text-[#2D3035]  rounded-[8px] px-[10px] md:px-[14px]">
                    Request a Payout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*  taable content start */}
        <div className="mt-4 rounded-xl border-[1px] bg-white border-[#D0D5DD]">
          <div className="">
            <div className=" p-4 ">
              <h1 className="text-[18px] text-[#1F2A37] leading-[28px] font-bold">
                PA Payments
              </h1>
            </div>
            <div className="p-[2px]">
              <RequestPayoutTable />
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-xl border-[1px] bg-white border-[#D0D5DD]">
          <div className="">
            <div className=" p-4 ">
              <h1 className="text-[18px] text-[#1F2A37] leading-[28px] font-bold">
                PA Payments
              </h1>
            </div>
            <div className=" p-4 flex items-center justify-center">
             <div className=" flex flex-col justify-center gap-4 items-center">
             <div className="">
              <img src="/requestPyouts/Illustration.png" alt="" />
             </div>
             <div className="">
             <h1 className="text-[16px] text-center text-[#263238] leading-[24px] font-bold">
             Nothing to Show Just Yet!
              </h1>
              <h1 className="text-[14px] pt-1 text-center text-[#898F99] leading-[20px] font-normal">
              Looks like you haven't added anything yet. Don't worry, Click below to request for payout"
              </h1>
             </div>
             <div className="">
             <Link href="/">
                  <button className="py-[10px] border-[1px] border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 transform font-urbanist font-semibold text-[14px] leading-[20px] text-[#2D3035]  rounded-md px-[10px] md:px-[14px]">
                    Request a Payout
                  </button>
                </Link>
             </div>

             </div>
           
            </div>
          </div>
        </div>
      </div>
    {/* fotter  */}
    <BottomBar />
  </div>





  );
};
export default PayoutMethod;