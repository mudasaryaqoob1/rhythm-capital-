"use client";
import React from "react";
import { TopBar } from "../components/topbar";
import { BottomBar } from "../components/bottomBar";
import { Alert } from "antd";
import SignatureTable from "../components/signatureTable";

const signaturetable = () => {
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, "I was closed.");
  };
  return (
    <div className="flex flex-col justify-between h-[100%]">
      {/* TopBar */}
      <div className=" w-full max-w-[1128px] ">
        <TopBar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-50">
        <div className="">
          <h1 className="text-[24px] text-[#1F2A37] leading-[32px] font-bold">
            Signature
          </h1>
          <p className="font-normal text-[#9DA4AE] font-urbanist leading-[24px] text-[16px]">
            You can View all the details about signature from here
          </p>
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
                      Warning :
                    </h1>
                  </div>
                </div>
              </>
            }
            description={
              <>
                <div className="ml-9">
                  <h1 className="text-[#475467]  text-justify font-normal font-urbanist leading-[24px] text-[16px]">
                    To set up your account, please follow these guidelines:
                  </h1>
                  <div className="">
                    <h1 className="text-[#475467] text-justify pt-2 font-normal font-urbanist leading-[24px] text-[16px]">
                      If you are interested in a lifetime subscription, begin by
                      signing the lifetime contract and completing your payment
                      for the lifetime subscription.
                    </h1>
                    <h1 className="text-[#475467] text-justify font-normal font-urbanist leading-[24px] text-[16px]">
                      Once your lifetime account is established, you may also
                      sign up for monthly subscriptions by signing a separate
                      contract and arranging monthly payments.
                    </h1>
                    <h1 className="text-[#475467]  text-justify font-normal font-urbanist leading-[24px] text-[16px]">
                      If you prefer not to opt for a lifetime subscription, you
                      may directly sign the contract for a monthly subscription
                      and proceed with the monthly payments.
                    </h1>
                  </div>
                </div>
              </>
            }
            type="error"
            closable
            onClose={onClose}
          />
        </div>

        {/* request a payouts div start */}
        <div className="p mt-4 rounded-xl border-[1px] bg-white border-[#D0D5DD]">
          <div className="p-[2px]">
            <SignatureTable />
          </div>
        </div>
        {/*  taable content start */}
      </div>
      {/* fotter  */}
      <BottomBar />
    </div>
  );
};
export default signaturetable;
