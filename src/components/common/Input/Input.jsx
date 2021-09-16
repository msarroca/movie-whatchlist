import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

const Input = ({
  placeholder, type, required, name,
}) => (
  <input
    id={name}
    name={name}
    className="input-text"
    placeholder={placeholder}
    type={type}
    required={required}
  />
);

Input.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,

};

Input.defaultProps = {
  name: null,
  required: false,
  placeholder: null,
  type: "text",
};

export default Input;
