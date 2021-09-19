/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import CheckBox from "../common/Checkbox/Checkbox";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import "./card.scss";

const Card = ({
  image, name, genres, watched, setUpdateMovie, setDeleteMovie,
}) => {
  const [isEdit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  return (

    <article className="card">
      <div className="card-image">
        <img className="image" src={image} alt="movie" />
      </div>
      <div className="card-info">
        {isEdit
          ? (
            <div className="card-info__input-edit">
              <Input
                placeholder="Enter new name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                name="editName"
              />
              <Button
                className="save-button"
                text={<i className="far fa-check-circle" />}
                type="button"
                handleClick={() => setUpdateMovie("name", inputValue)}
              />
            </div>
          ) : (
            <div className="card-info__edit">
              <Button className="edit-button" handleClick={() => setEdit(!isEdit)} type="button" text={<i className="far fa-edit" />} />
              <p className="title">{name}</p>
            </div>
          )}
        <ul className="card-info__genres">
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
