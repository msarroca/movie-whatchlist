import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./inputTag.scss";

const InputTag = ({
  placeholder, tags, setTags,
}) => {
  const [input, setInput] = useState("");
  const removeTags = (event, indexToRemove) => {
    event.preventDefault();
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
  };
  const onChangeGenres = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const addTags = (event) => {
    event.preventDefault();
    const cleanedInput = input.trim().toLowerCase();
    if (cleanedInput.length && !tags.includes(cleanedInput.toLowerCase())) {
      setInput(cleanedInput);
      setTags([...tags, cleanedInput]);
      setInput("");
    }
  };

  useEffect(() => {
    if (tags.length === 0) setInput("");
  }, [tags]);

  return (
    <div className="container-input">
      <ul className="container-input__list" id="tags">
        {tags.map((tag, index) => (
          <li key={tag} className="tag">
            <span className="tag-title">{tag}</span>
            <button
              className="tag-close-icon"
              id={index}
              onClick={(e) => removeTags(e, index)}
              type="button"
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <input
        className="container-input__tag"
        type="text"
        onKeyDown={(event) => (event.key === "Enter" ? addTags(event) : null)}
        onChange={onChangeGenres}
        value={input}
        placeholder={placeholder}
      />
    </div>
  );
};

InputTag.propTypes = {
  placeholder: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  setTags: PropTypes.func,

};

InputTag.defaultProps = {
  placeholder: null,
  tags: [],
  setTags: null,
};

export default InputTag;
