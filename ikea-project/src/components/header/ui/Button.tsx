import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary" }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${
        variant === "primary"
          ? "bg-blue-500 text-white"
          : "border border-blue-500 text-blue-500"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
