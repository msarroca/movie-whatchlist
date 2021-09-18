import React from "react";
import PropTypes from "prop-types";
import CheckBox from "../common/Checkbox/Checkbox";
import Button from "../common/Button/Button";
import "../../assets/movieImg.png";
import "./card.scss";

const Card = ({
  image, name, genres, watched, updateMovie, deleteMovie,
}) => (
  <article className="card">
    <div className="container-image">
      <img className="image" src={image} alt="movie" />
    </div>
    <div className="container-info">
      <p className="container-info__title">{name}</p>
      <ul className="container-info__genres">
        {genres.map((genre) => <li className="tag" key={genre}>{genre}</li>)}
      </ul>
      <CheckBox className="container-info__checkbox" isChecked={watched} onChange={() => updateMovie("watched", !watched)} value={watched} name={name} text="watched?" />
      <Button className="delete-button" text="delete" type="button" handleClick={deleteMovie} />
    </div>
  </article>
);

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  watched: PropTypes.bool,
  updateMovie: PropTypes.func,
  deleteMovie: PropTypes.func,

};

Card.defaultProps = {
  image: "",
  name: "",
  genres: [],
  watched: false,
  updateMovie: null,
  deleteMovie: null,
};

export default Card;
