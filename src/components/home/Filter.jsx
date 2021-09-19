/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import RadioButton from "../common/RadioButton/RadioButton";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import "../../assets/movieImg.png";
import "./filter.scss";

const Filter = ({ filter, onChangeFilter }) => {
  const genresFilter = ["Horror", "Romance", "Comedy"];
  const history = useHistory();

  return (
    <section className="container">
      <div className="filter-container">
        <div className="radio-buttons-container">
          {genresFilter.map((genre) => (
            <RadioButton
              key={genre}
              value={genre}
              text={genre}
              isSelected={genre.toLocaleLowerCase() === filter.genre.toLocaleLowerCase()}
              onChange={() => history.push(`/genre=${genre.toLocaleLowerCase()}`)}
              id={genre}
              name={genre}
            />
          ))}
        </div>
        <label className="label-container" htmlFor="name">
          Search movie:
          <Input
            onChange={(e) => onChangeFilter({ ...filter, name: e.target.value })}
            value={filter.name}
            name="name"
            placeholder="Insert the movie's title"
            type="text"
            className="label-container__input"
          />
        </label>
        <Button
          type="button"
          className="simple-button"
          text="Reset"
          handleClick={() => history.push("/")}
        />
      </div>
    </section>
  );
};

Filter.propTypes = {
  filter: PropTypes.objectOf(PropTypes.any),
  onChangeFilter: PropTypes.func,

};

Filter.defaultProps = {
  filter: {},
  onChangeFilter: null,

};

export default Filter;
