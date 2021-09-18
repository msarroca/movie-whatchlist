/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import CheckBox from "../common/Checkbox/Checkbox";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import Edit from "../../assets/edit.png";

import "./card.scss";

const Card = ({
  image, name, genres, watched, setUpdateMovie, setDeleteMovie,
}) => {
  const [isEdit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  return (

    <article className="card">
      <div className="container-image">
        <img className="image" src={image} alt="movie" />
      </div>
      <div className="container-info">

        {isEdit
          ? (
            <>
              <Input
                placeholder="Enter new name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                name="editName"
              />
              <Button
                className="edit-button"
                text="Save"
                type="button"
                handleClick={() => setUpdateMovie("name", inputValue)}
              />
            </>
          ) : (
            <>
              <p className="container-info__title">{name}</p>
              <div onClick={() => setEdit(!isEdit)}>
                <img className="image" src={Edit} alt="edit" width="20px" />
              </div>
            </>
          )}
        <ul className="container-info__genres">
          {genres.map((genre) => <li className="tag" key={genre}>{genre}</li>)}
        </ul>
        <CheckBox
          className="container-info__checkbox"
          isChecked={watched}
          onChange={() => setUpdateMovie("watched", !watched)}
          value={watched}
          name={name}
          text="watched?"
        />
        <Button
          className="delete-button"
          text="delete"
          type="button"
          handleClick={setDeleteMovie}
        />
      </div>
    </article>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  watched: PropTypes.bool,
  setUpdateMovie: PropTypes.func,
  setDeleteMovie: PropTypes.func,

};

Card.defaultProps = {
  image: "",
  name: "",
  genres: [],
  watched: false,
  setUpdateMovie: null,
  setDeleteMovie: null,
};

export default Card;
