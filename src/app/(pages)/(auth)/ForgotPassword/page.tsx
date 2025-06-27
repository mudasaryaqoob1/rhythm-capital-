// "use client";
// import React from "react";
// import { Inputs } from "@/app/(pages)/(auth)/components/inputs";
// import Link from "next/link";
// import InfoPenal from "../components/InfoPanel";
// const ForgotPassword = () => {
//   return (
//     <div className="xl:bg-[url('/bg-imges/ds.png')] h-screen  flex justify-center bg-cover ">
//       <div className="flex  xl:w-[1440px]">
//         {" "}
//         {/* Left container */}
//         <div className="">
//           <div className="bg-[url('/bg-imges/bg.png')] xl:bg-none bg-cover">
//             <div className="">
//               <div className="flex flex-col justify-evenly w-full xl:w-[619px] h-screen">
//                 <div className="w-full flex flex-col items-center justify-center">
//                   <div className="flex flex-col justify-center items-center w-full gap-6">
//                     <div className="">
//                       <img src="/formimges/login-imges/logo-71.png" alt="" />
//                     </div>
//                     <div className="mb-8 w-[360px] ">
//                       <h1 className="text-[#2D3035] font-semibold text-center font-urbanist leading-[38px] text-[30px]">
//                         Account Recovery
//                       </h1>
//                       <h1 className="text-[#626974] font-normal text-center  tracking-[0%] font-urbanist leading-[24px] text-[16px]">
//                         Reset your password to regain access to your Venue
//                         account. Enter your email for further instructions.
//                       </h1>
//                     </div>
//                   </div>
//                   <div className="w-full xl:max-w-[360px]">
//                     <div className="">
//                       <Inputs
//                         type="email"
//                         name="Email"
//                         heading="Email"
//                         Placeholder="olivia@untitledui.com"
//                         svg={<img src="/mail.svg" alt="" />}
//                         svg2
//                         className="w-full xl:max-w-[360px] "
//                       />
//                     </div>
//                   </div>
//                   <div className="mt-8">
//                     <Link href="\OtpRecovery">
//                       <button className="py-[10px] border-[1px] border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 transform   rounded-[8px]  px-24 md:px-[160.5px]">
//                         Confirm
//                       </button>
//                     </Link>
//                     <div className="flex justify-center mt-4">
//                       <h1 className="text-[#626974] font-normal text-center font-urbanist tracking-[0%] leading-[20px] text-[14px]">
//                         Don’t have an account?
//                       </h1>
//                       <h1 className="text-[#2D3035] font-semibold text-center font-urbanist tracking-[0%] leading-[20px] text-[14px]">
//                         Sign up
//                       </h1>
//                     </div>
//                   </div>
//                 </div>
//                 <div className=" ml-[32px] text-[#475467] font-urbanist text-[14px] leading-5">
//                   <h1>© Rythm Capital 2027</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Right container */}
//         <div className="scrollbar-hide overflow-y-auto">
//           <InfoPenal />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


"use client";
import React, { useState } from "react";
import { Inputs } from "@/app/(pages)/(auth)/components/inputs";
import Link from "next/link";
import axios from "axios"; // ✅ Import Axios

const ForgotPassword = () => {
  const [email, setEmail] = useState(""); // 🔹 State to store email
  const [message, setMessage] = useState(""); // 🔹 State to store API response

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/recoverymail", {
        Email: email, // 🔹 Sending email to backend
      });

      if (response.data.success) {
        setMessage("✅ OTP sent successfully! Check your email.");
      } else {
        setMessage("❌ " + response.data.message);
      }
    } catch (error) {
      setMessage("❌ Error sending OTP. Try again later.");
    }
  };

  return (
    <div className="xl:bg-[url('/bg-imges/ds.png')] h-screen flex justify-center bg-cover">
      <div className="flex xl:w-[1440px]">
        {/* Left container */}
        <div className="">
          <div className="bg-[url('/bg-imges/bg.png')] xl:bg-none bg-cover">
            <div className="">
              <div className="flex flex-col justify-evenly w-full xl:w-[619px] h-screen">
                <div className="w-full flex flex-col items-center justify-center">
                  <div className="flex flex-col justify-center items-center w-full gap-6">
                    <div className="">
                      <img src="/formimges/login-imges/logo-71.png" alt="" />
                    </div>
                    <div className="mb-8 w-[360px]">
                      <h1 className="text-[#2D3035] font-semibold text-center font-urbanist leading-[38px] text-[30px]">
                        Account Recovery
                      </h1>
                      <h1 className="text-[#626974] font-normal text-center tracking-[0%] font-urbanist leading-[24px] text-[16px]">
                        Reset your password to regain access to your Venue
                        account. Enter your email for further instructions.
                      </h1>
                    </div>
                  </div>
                  <div className="w-full xl:max-w-[360px]">
                    <Inputs
                      type="email"
                      name="Email"
                      heading="Email"
                      Placeholder="olivia@untitledui.com"
                      svg={<img src="/mail.svg" alt="" />}
                      svg2
                      className="w-full xl:max-w-[360px]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} // 🔹 Update email state
                    />
                  </div>
                  <div className="mt-8">
                    <button
                      onClick={handleSubmit} // ✅ Call API when clicked
                      className="py-[10px] border-[1px] border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 transform rounded-[8px] px-24 md:px-[160.5px]"
                    >
                      Confirm
                    </button>
                    {message && (
                      <p className="mt-4 text-center text-red-500">{message}</p>
                    )}
                    <div className="flex justify-center mt-4">
                      <h1 className="text-[#626974] font-normal text-center font-urbanist tracking-[0%] leading-[20px] text-[14px]">
                        Don’t have an account?
                      </h1>
                      <h1 className="text-[#2D3035] font-semibold text-center font-urbanist tracking-[0%] leading-[20px] text-[14px]">
                        Sign up
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="ml-[32px] text-[#475467] font-urbanist text-[14px] leading-5">
                  <h1>© Rythm Capital 2027</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right container */}
      </div>
    </div>
  );
};

export default ForgotPassword;
