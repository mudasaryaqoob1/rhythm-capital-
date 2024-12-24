"use client";
import React from "react";
import { Inputs } from "@/app/(pages)/(auth)/components/inputs";

const CardInputForm: React.FC = () => {
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
    </div>
  );
};

export default CardInputForm;
