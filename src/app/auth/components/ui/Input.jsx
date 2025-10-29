import React from "react";

const Input = ({ label, type = "text", placeholder, value, onChange, ...props }) => (
  <div className="flex flex-col">
    {label && (
      <label className="text-slate-800 text-sm font-medium pb-2">{label}</label>
    )}
    <input
      className="form-input w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  </div>
);

export default Input;
