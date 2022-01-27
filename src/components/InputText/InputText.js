import PropTypes from "prop-types";
import React from "react";

const InputText = ({
  onChange,
  value,
  label,
  placeholder,
  id,
  labelStyle,
  ...others
}) => {
  return (
    <div className="flex w-full px-3 mb-6 md:mb-0">
      <label
        className={`block tracking-wide text-gray-700 text-lg m-2 text-right ${labelStyle}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...others}
      />
    </div>
  );
};

InputText.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  labelStyle: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default InputText;
