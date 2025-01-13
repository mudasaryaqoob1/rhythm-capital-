// "use client";
import React, { useState } from "react";

interface Propss {
  heading: string;
  name: string;
  type: string;
  Placeholder: string;
  svg: React.ReactNode; // First icon (e.g., mail/lock icon)
  svg2?: React.ReactNode; 
  className?: string; // Additional CSS classes
  value: string; // Value of the input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Formik onChange handler
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void; 
}

export const Inputs: React.FC<Propss> = ({
  heading,
  Placeholder,
  svg,
  className,
  svg2,
  type,
  value,
  name,
  onChange,
  onBlur,
}) => {
  // Move useState inside the functional component
  const [showPassword, setShowPassword] = useState(false);

  // Toggle visibility handler
  const handleToggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${className}`}>
      {/* Input heading */}
      <div className="flex items-center gap-2">
        {svg}
        <h1 className="font-normal font-urbanist text-[16px] text-[#4D525A] leading-[24px]">
          {heading}
        </h1>
      </div>

      {/* Input field */}
      <div className="relative">
        <input
          name={name} // Use the 'name' prop
          className="outline-none focus:outline-none focus:ring-4 focus:ring-[#1018280D] focus:ring-offset-1 focus:ring-offset-[#c1f338] w-full xl:max-w-[500px] border-[2px] rounded-[8px] bg-gray py-[10px] pl-[14px] mt-[9.7px]  font-urbanist font-normal  text-[16px] leading-[27px]"
          type={type === "password" && showPassword ? "text" : type} // Toggle password visibility
          placeholder={Placeholder}
          value={value} // Bind formik value
          onChange={onChange} // Bind formik onChange
          onBlur={onBlur} // Bind formik onBlur
        />
        {/* Optional second icon (e.g., visibility toggle) */}
        {svg2 && (
          <div
            className="absolute inset-y-0 right-0 pt-2 pr-3 flex items-center cursor-pointer"
            onClick={handleToggleVisibility}
          >
            {svg2}
          </div>
        )}
      </div>
    </div>
  );
};
