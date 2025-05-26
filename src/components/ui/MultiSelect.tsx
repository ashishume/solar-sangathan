import React, { useState, useRef, useEffect } from "react";
import type { Tag } from "../../admin/types/tag";

interface MultiSelectProps {
  label?: string;
  options: Tag[];
  value: Tag[];
  onChange: (selectedOptions: Tag[]) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select options...",
  required,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: Tag) => {
    const isSelected = value.some((item) => item._id === option._id);
    if (isSelected) {
      onChange(value.filter((item) => item._id !== option._id));
    } else {
      onChange([...value, option]);
    }
  };

  const handleRemove = (optionId: string) => {
    onChange(value.filter((item) => item._id !== optionId));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2" ref={wrapperRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="relative">
        <div
          className="min-h-[42px] w-full rounded-lg border border-gray-300 bg-white px-3 py-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-wrap gap-2">
            {value.length > 0 ? (
              value.map((option) => (
                <span
                  key={option._id}
                  className="inline-flex items-center gap-1 bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm"
                >
                  {option.name}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(option._id);
                    }}
                    className="hover:text-red-900"
                  >
                    ×
                  </button>
                </span>
              ))
            ) : (
              <span className="text-gray-500">{placeholder}</span>
            )}
          </div>
        </div>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white rounded-lg border border-gray-300 shadow-lg">
            <div className="p-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="max-h-60 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <div
                    key={option._id}
                    className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                      value.some((item) => item._id === option._id)
                        ? "bg-red-50"
                        : ""
                    }`}
                    onClick={() => handleSelect(option)}
                  >
                    {option.name}
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-gray-500">No options found</div>
              )}
            </div>
          </div>
        )}
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default MultiSelect;
