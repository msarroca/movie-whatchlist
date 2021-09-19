import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

const Input = ({
  placeholder, type, required, name, onChange, value,
}) => (
  <input
    id={name}
    data-testid="input"
    value={value}
    name={name}
    className="input-text"
    placeholder={placeholder}
    type={type}
    required={required}
    onChange={onChange}
  />
);

Input.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,

};

Input.defaultProps = {
  name: null,
  required: false,
  placeholder: null,
  type: "text",
  value: "",
  onChange: null,

};

export default Input;
