import React from "react";

const SocialButton = ({ icon, children, className = "", ...props }) => (
  <button
    className={`flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-100 ${className}`}
    {...props}
  >
    {icon && <span className="h-5 w-5">{icon}</span>}
    {children}
  </button>
);

export default SocialButton;
