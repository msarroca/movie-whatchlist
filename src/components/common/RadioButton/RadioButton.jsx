import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({
  value, text, isSelected, onChange, required, id, name,
}) => (
  <div className="RadioButton">
    <input id={id} type="radio" onChange={onChange} value={value} name={name} checked={isSelected} required={required} />
    <label htmlFor={id}>{text}</label>
  </div>
);

RadioButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  id: PropTypes.string,
};

RadioButton.defaultProps = {
  value: null,
  onChange: null,
  required: false,
  text: "",
  name: "",
  isSelected: false,
  id: "",
};

export default RadioButton;
