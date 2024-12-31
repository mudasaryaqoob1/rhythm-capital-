
"use client";
import React, { useState } from "react";
// import CreditCardInput from "react-credit-card-input";
import { Inputs } from "@/app/(pages)/(auth)/components/inputs";

const CreditCardForm = () => {
  // State variables
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  // Handlers
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiry(e.target.value);
  };

  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(e.target.value);
  };

  return (
    <div className="">
      {/* Title */}
      <div className="w-full xl:max-w-[380px]">
      <Inputs
        type="text"
        name="Name on Card*"
        heading="Name on Card*"
        Placeholder="Name on Card*"
        svg={""}
        svg2
        className="w-full xl:max-w-[380px] "
      />
    </div>
      {/* Card Number */}
      <div className="my-4">
        <label className="font-normal font-urbanist text-[16px] text-[#4D525A] leading-[24px]">
          Card Number*
        </label>
        <input
          type="text"
          placeholder="1234-5678-9012-3456"
          value={cardNumber}
          onChange={handleCardNumberChange}
          className=" outline-none focus:outline-none focus:ring-4 w-full xl:max-w-[380px] focus:ring-[#1018280D] focus:ring-offset-1 focus:ring-offset-[#c1f338]  border-[2px] rounded-[8px] bg-gray py-[10px] pl-[14px] mt-[9.7px]  font-urbanist font-normal  text-[16px] leading-[27px]"
        />
      </div>

      {/* Expiry Date and CVC */}
      <div className=" flex ga gap-4 mb-6">
        {/* Expiry Date */}
        <div className="w-[84px]">
          <label className="font-normal font-urbanist text-[16px] text-[#4D525A] leading-[24px]">
            Expiry Date
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={handleExpiryChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 text-gray-700"
          />
        </div>
        {/* CVC */}
        <div className="w-[84px]">
          <label className="font-normal font-urbanist text-[16px] text-[#4D525A] leading-[24px]">
            CVC
          </label>
          <input
            type="text"
            placeholder="•••"
            value={cvc}
            onChange={handleCVCChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 text-gray-700"
          />
        </div>
      </div>
      <div className="mb-4">
        <h1 className=" text-gray-600 font-semibold font-urbanist text-[14px] leading-[20px]">Billing contact</h1>
        <h1 className=" text-gray-600 font-normal font-urbanist text-[14px] leading-[20px] mb-3">Add a second billing contact email.</h1>
        <Inputs
        type="email"
        name="marslan412@gmail.com"
        heading="Email"
        Placeholder="marslan412@gmail.com"
        svg={""}
        svg2
        className="w-full xl:max-w-[380px] "
      />
      
      </div>
    </div>
  );
};

export default CreditCardForm;
