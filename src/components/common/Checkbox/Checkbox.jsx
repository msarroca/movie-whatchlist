import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({
  isChecked, onChange, value, required, name, text,
}) => (
  <div>
    <input
      id={name}
      name={name}
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
      value={value}
      required={required}
    />
    <span />
    <label htmlFor={name}>{text}</label>
  </div>
);

Checkbox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  text: PropTypes.string,
};

Checkbox.defaultProps = {
  value: null,
  onChange: null,
  required: false,
  isChecked: false,
  name: "",
  text: "",
};

export default Checkbox;
