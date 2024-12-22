import React from "react";

interface CardProps {
  title: string;
  value: string;
  icon: JSX.Element;
  description?: string;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ title, value, icon, description, bgColor }) => {
  return (
    <div className="flex items-center gap-5 bg-white shadow-md rounded-[8px] p-4 w-full max-w-[304px]">
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-[8px] ${bgColor}`}
      >
        {icon}
        {/* <img src="/dashbord/Icon.png" alt="" /> */}
      </div>
     <div className="">
     <h3 className="mt-4 text-sm font-normal font-urbanist text-[#626974]">{title}</h3>
      <div className="flex items-center">
      {value.includes("out of") ? (
            <>
              <p className="text-2xl text-[#2D3035] font-urbanist font-bold">
                {value.split(" out of ")[0]} {/* Main Value */}
              </p>
              <span className="text-sm text-[#626974] font-urbanist mt-2  flex">
                out of {value.split(" out of ")[1]} {/* Out of Value */}
              </span>
            </>
          ) : (
            <p className="text-2xl text-[#2D3035] font-urbanist font-bold">{value}</p>
          )}
      {description && (
        <p className="text-sm text-[#22C55E] font-urbanist  bg-[#F0FDF4] rounded-[28px] py-[2px] px-[6px] mt-1">{description}</p>
      )}
      </div>
     </div>
    </div>
  );
};

export default Card;



// import React from "react";

// interface CardProps {
//   title: string;
//   value: string;
//   icon: JSX.Element;
//   description?: string;
//   bgColor: string;
// }

// const Card: React.FC<CardProps> = ({ title, value, icon, description, bgColor }) => {
//   return (
//     <div className="flex items-center gap-5 bg-white shadow-md rounded-[8px] p-4 w-full max-w-[304px]">
//       <div
//         className={`flex items-center justify-center w-12 h-12 rounded-[8px] ${bgColor}`}
//       >
//         {icon}
//       </div>
//       <div>
//         <h3 className="mt-4 text-sm font-normal font-urbanist text-[#626974]">{title}</h3>
//         <div className="flex flex-col gap-1">
//           {/* Handling "out of" for specific cards */}
//           {value.includes("out of") ? (
//             <>
//               <p className="text-2xl text-[#2D3035] font-urbanist font-bold">
//                 {value.split(" out of ")[0]} {/* Main Value */}
//               </p>
//               <span className="text-sm text-[#626974] font-urbanist mt-1">
//                 out of {value.split(" out of ")[1]} {/* Out of Value */}
//               </span>
//             </>
//           ) : (
//             <p className="text-2xl text-[#2D3035] font-urbanist font-bold">{value}</p>
//           )}
//           {/* Optional Description */}
//           {description && (
//             <p className="text-sm text-[#22C55E] font-urbanist bg-[#F0FDF4] rounded-[28px] py-[2px] px-[6px]">
//               {description}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;


// import React from "react";

// interface CardProps {
//   title: string;
//   value: string;
//   icon: JSX.Element;
//   description?: string;
//   bgColor: string;
// }

// const Card: React.FC<CardProps> = ({ title, value, icon, description, bgColor }) => {
//   return (
//     <div className="flex items-center gap-5 bg-white shadow-md rounded-[8px] p-4 w-full max-w-[304px]">
//       <div
//         className={`flex items-center justify-center w-12 h-12 rounded-[8px] ${bgColor}`}
//       >
//         {icon}
//       </div>
//       <div>
//         <h3 className="mt-4 text-sm font-normal font-urbanist text-[#626974]">{title}</h3>
//         <div className="flex flex-col gap-1">
//           {/* Main Value */}
//           <p className="text-2xl text-[#2D3035] font-urbanist font-bold">
//             {value.split(" out of ")[0]} {/* Main Value */}
//           </p>
//           {/* Out of Value */}
//           <span className="text-sm text-[#626974] font-urbanist mt-1">
//             out of {value.split(" out of ")[1]} {/* Out of Value */}
//           </span>
//           {/* Optional Description */}
//           {description && (
//             <p className="text-sm text-[#22C55E] font-urbanist bg-[#F0FDF4] rounded-[28px] py-[2px] px-[6px]">
//               {description}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
