"use client";
import React, { useState } from "react";
import { usePaymentInputs, PaymentInputsContainer } from "react-payment-inputs";
import { default as cardImages } from "react-payment-inputs/images";
import { Inputs } from "@/app/(pages)/(auth)/components/inputs";

interface PaymentInputHandlers {
  getCardNumberProps: (options?: any) => any;
  getExpiryDateProps: (options?: any) => any;
  getCVCProps: (options?: any) => any;
}

const CardInputForm: React.FC = () => {
  const [cardInfo, setCardInfo] = useState({ email: "" });
  const { getCardImageProps, getCardNumberProps, meta } = usePaymentInputs();

  return (
    <div className="w-full md:max-w-[380px]">
      <Inputs
        type="text"
        name="Name on Card*"
        heading="Name on Card*"
        Placeholder="Name on Card*"
        svg={""}
        svg2
        className="w-full xl:max-w-[380px] "
      />
      <PaymentInputsContainer>
        {({
          getCardNumberProps,
          getExpiryDateProps,
          getCVCProps,
        }: PaymentInputHandlers) => (
          <form className="w-full">
            {/* Card Number */}
            <div className="relative ">
              <h1 className="mt-[20px] font-normal font-urbanist text-[16px] text-[#4D525A] leading-[24px]">
                Card Number*
              </h1>
              <input
                {...getCardNumberProps({
                  className:
                    "mt-[9.7px] border rounded focus:outline-none focus:ring-4 focus:ring-[#1018280D] focus:ring-offset-1 focus:ring-offset-[#c1f338] w-full xl:max-w-[500px] border-[2px] rounded-[8px] py-[10px] pl-[40px]  font-urbanist font-normal  text-[16px] leading-[27px]",
                })}
                placeholder="Card Number"
              />
              <div className="absolute  top-[51px] left-1 transform -translate-y-3">
                {/* Display the card image here */}
                <svg
                  {...getCardImageProps({ images: cardImages })}
                  className="w-8 h-8"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="">
                <h1 className="mt-[20px] font-normal font-urbanist text-[16px] text-[#4D525A] leading-[24px]">
                  Expiry date
                </h1>
                {/* Expiry Date */}
                <input
                  {...getExpiryDateProps({
                    className:
                      " outline-none focus:outline-none focus:ring-4 focus:ring-[#1018280D] focus:ring-offset-1 focus:ring-offset-[#c1f338] w-full max-w-[84px] border-[2px] rounded-[8px] bg-gray py-[10px] pl-[14px] mt-[9.7px]  font-urbanist font-normal  text-[16px] leading-[27px]",
                  })}
                  placeholder="MM/YY"
                />
              </div>
              <div className="">
                <h1 className="mt-[20px] font-normal font-urbanist text-[16px] text-[#4D525A] leading-[24px]">
                  CVV
                </h1>
                {/* CVV */}
                <input
                  {...getCVCProps({
                    className:
                      "mt-[9.7px]  outline-none focus:outline-none focus:ring-4 focus:ring-[#1018280D] focus:ring-offset-1 focus:ring-offset-[#c1f338] w-full max-w-[84px] border-[2px] rounded-[8px] bg-gray py-[10px] pl-[14px] mt-[9.7px]  font-urbanist font-normal  text-[16px] leading-[27px]",
                  })}
                  placeholder="CVV"
                />
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-[#2D3035] font-semibold font-urbanist leading-[20px] text-[14px]">
                Billing contact
              </h1>
              <h1 className="text-[#626974] pt-1 font-normal font-urbanist tracking-[0%] leading-[24px] text-[16px]">
                Add a second billing contact email.
              </h1>
              <h1 className="mt-[12px] font-normal font-urbanist text-[16px] text-[#4D525A] leading-[24px]">
                Email
              </h1>
              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                value={cardInfo.email}
                onChange={(e) =>
                  setCardInfo({ ...cardInfo, email: e.target.value })
                }
                className="  outline-none focus:outline-none focus:ring-4 focus:ring-[#1018280D] focus:ring-offset-1 focus:ring-offset-[#c1f338] w-full xl:max-w-[500px] border-[2px] rounded-[8px] bg-gray py-[10px] pl-[14px] mt-[9.7px]  font-urbanist font-normal  text-[16px] leading-[27px]"
              />
            </div>
          </form>
        )}
      </PaymentInputsContainer>

      {/* Validation Errors */}
      {meta.isTouched && meta.error && (
        <span className="text-red-500">{meta.error}</span>
      )}
    </div>
  );
};

export default CardInputForm;
