import React from "react";

const Checkbox = ({ id, checked, onChange, label, ...props }) => (
  <div className="flex items-start">
    <div className="flex h-6 items-center">
      <input
        id={id}
        name={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary bg-background-light dark:bg-background-dark dark:checked:bg-primary"
        {...props}
      />
    </div>
    <div className="ml-3 text-sm leading-6">
      <label htmlFor={id} className="font-medium text-slate-600 dark:text-slate-400">
        {label}
      </label>
    </div>
  </div>
);

export default Checkbox;
