import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  required,
  className = "",
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-700"
        >
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <input
        {...props}
        className={`block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors duration-200 px-4 py-3 bg-white ${className}`}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
