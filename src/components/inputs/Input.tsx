import { useState } from "react";
import { LightErrorIcon } from "../icons/Icons";

interface Props {
  disabled?: boolean;
  name: string;
  id?: string;
  label: string;
  placeholder: string;
  inputError?: boolean;
  errorMsg?: string;
  required?: boolean;
}
export const TextInput: React.FC<Props> = ({
  disabled,
  name,
  id,
  label,
  placeholder,
  inputError = true,
  errorMsg,
  required = true,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <div className="flex flex-col items-start">
      <label htmlFor={name} className="text-gray-700 text-sm font-medium">
        {label}
        {required && "*"}
      </label>
      <div
        tabIndex={-1}
        className={`w-full flex items-center pr-3.5 border my-1.5 ${
          focus && "shadow border-primary-300 shadow-primary-100"
        } ${
          inputError ? "border-error-300" : "border-gray-300"
        } rounded-lg text-gray-900 placeholder:text-gray-500`}
      >
        <input
          type="text"
          name={name}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          className="w-full focus:outline-none bg-white py-2.5 px-3.5 rounded-lg"
        />
        {inputError && !focus && <LightErrorIcon />}
      </div>
      {inputError && !focus && (
        <p className="text-error-500 text-sm">This is an error{errorMsg}</p>
      )}
    </div>
  );
};