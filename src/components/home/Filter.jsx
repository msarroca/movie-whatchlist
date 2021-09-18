import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import RadioButton from "../common/RadioButton/RadioButton";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import "../../assets/movieImg.png";
import "./card.scss";

const Filter = ({ filter, onChangeFilter }) => {
  const genresFilter = ["Horror", "Romance", "Comedy"];
  const history = useHistory();

  return (
    <section>
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
      <Input
        onChange={(e) => onChangeFilter({ ...filter, name: e.target.value })}
        value={filter.name}
        name="name"
        placeholder="Search"
        type="text"
      />
      <Button
        type="button"
        className="simple-button"
        text="Reset"
        handleClick={() => history.push("/")}
      />
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
