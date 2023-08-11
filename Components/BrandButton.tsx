import React from "react";

interface ButtonProps {
  className?: string;
  title: string;
}

const BrandButton: React.FC<ButtonProps> = ({ className, title }) => {
  return (
    <button
      className={`py-2 px-6 text-white outline-none border-0 rounded-md bg-brand_primary-50 ${className}`}
    >
      {title}
    </button>
  );
};

export default BrandButton;
