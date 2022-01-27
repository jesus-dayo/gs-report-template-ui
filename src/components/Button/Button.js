import PropTypes from "prop-types";
import React from "react";

const colors = {
  primary: "bg-black text-white hover:bg-gray-600",
};

const sizes = {
  small: "h-12 w-32",
};

const Button = ({
  variant = "primary",
  size = "small",
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
