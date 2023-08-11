import React from "react";

interface BrandInputProps {
  placeholder: string;
  type: string;
}

const BrandInput: React.FC<BrandInputProps> = ({ placeholder, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-9 text-brand_gray-250 border-b border-brand_gray-200 text-sm w-full"
    />
  );
};

export default BrandInput;
