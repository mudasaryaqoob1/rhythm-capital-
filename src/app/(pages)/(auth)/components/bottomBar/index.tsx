
import React from "react";

export const BottomBar = ({}) => {
  return (
    <>
     <div className="bg-[#022213] px-6 py-4">
        <div className=" flex justify-between">
          <div>
            <h1 className="text-[#FFFFFF] font-normal font-urbanist leading-[18px] text-[12px]">
              © 2022 Copyright Rythm Capital. All Rights Reserved.
            </h1>
          </div>
          <div className="flex gap-2">
            <img src="/tradingPlatform/facebook.png" alt="" />
            <img src="/tradingPlatform/insta.png" alt="" />
            <img src="/tradingPlatform/twitter.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
// export default bottomBar;