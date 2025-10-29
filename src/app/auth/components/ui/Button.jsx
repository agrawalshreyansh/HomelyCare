import React from "react";

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`flex h-12 w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
