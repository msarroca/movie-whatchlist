import React from "react";
import PropTypes from "prop-types";
import CheckBox from "../common/Checkbox/Checkbox";
import Button from "../common/Button/Button";

const Card = ({
  name, genres, watched, updateMovie, deleteMovie,
}) => (
  <article className="card">
    <p>{name}</p>
    <ul>
      {genres.map((genre) => <li>{genre}</li>)}
    </ul>
    <CheckBox isChecked={watched} onChange={() => updateMovie("watched", !watched)} value={watched} name={name} text="Watched?" />
    <Button className="delete-button" text="delete" type="button" handleClick={deleteMovie} />
  </article>
);

Card.propTypes = {
  name: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  watched: PropTypes.bool,
  updateMovie: PropTypes.func,
  deleteMovie: PropTypes.func,

};

Card.defaultProps = {
  name: "",
  genres: [],
  watched: false,
  updateMovie: null,
  deleteMovie: null,
};

export default Card;
