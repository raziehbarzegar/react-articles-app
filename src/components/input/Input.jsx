import React, { useId } from "react";

function Input({ label, type, placeholder, required, name, onChange }) {
  const inputId = useId();
  return (
    <div className="p-3 basis-full">
      <div className="flex flex-col">
        <label htmlFor={inputId} className="mb-3 text-secondary font-medium">
          {label} :
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="outline-none py-2 px-5 border border-primary rounded ml-3"
          id={inputId}
          required={required}
          name={name}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Input;
