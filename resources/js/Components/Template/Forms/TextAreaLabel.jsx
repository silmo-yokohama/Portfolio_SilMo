import TextArea from "@/Components/Forms/Inputs/TextArea";
import React from "react";

const TextAreaLabel = ({
  name,
  label,
  value,
  onChange,
  labelClassName,
  inputClassName,
  isRequired,
  ...props
}) => {
  return (
    <div className="flex flex-wrap items-start justify-center md:justify-between">
      <div className="w-full md:w-1/4">
        <label
          htmlFor={name}
          className={`flex w-full items-center justify-between px-5 pb-3 pt-2 font-bold md:pb-0 ${labelClassName}`}
        >
          <span>{label}</span>

          {isRequired && (
            <span className="badge badge-error badge-xs h-auto rounded-none border border-error bg-transparent px-3 py-2 tracking-widest text-error">
              必須
            </span>
          )}
        </label>
      </div>

      <div className="w-11/12 md:w-3/4">
        <TextArea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`input-sm !h-36 rounded-none md:input-md ${inputClassName}`}
          required={isRequired || false}
        />
      </div>
    </div>
  );
};

export default TextAreaLabel;
