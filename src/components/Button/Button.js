import PropTypes from "prop-types";
import React from "react";

const colors = {
  primary: "bg-black text-white hover:bg-gray-600",
  secondary: "bg-blue-600 text-white hover:bg-blue-400",
  error: "bg-red-600 text-white hover:bg-red-400",
};

const sizes = {
  xs: "h-10 w-28",
  s: "h-12 w-32",
};

const Button = ({
  variant = "primary",
  size = "s",
  children,
  customStyle = "",
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`${colors[variant]} ${sizes[size]} ${customStyle}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element,
  customStyle: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
