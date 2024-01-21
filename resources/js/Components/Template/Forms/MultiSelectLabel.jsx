import React from "react";
import CreatableSelect from "react-select/creatable";
import "../../../../css/select-custome-styles.css";

const MultiSelectLabel = ({
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
        <CreatableSelect
          className="custom-select"
          isMulti
          tabSelectsValue
          cacheOptions
          closeMenuOnSelect={false}
          onChange={onChange}
          {...props}
        />
      </div>
    </div>
  );
};

export default MultiSelectLabel;
