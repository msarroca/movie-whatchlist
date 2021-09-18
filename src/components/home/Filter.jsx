/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";
import RadioButton from "../common/RadioButton/RadioButton";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import "../../assets/movieImg.png";
import "./card.scss";

const Filter = ({ filter, onChangeFilter }) => {
  const genresFilter = ["Horror", "Romance", "Comedy"];

  return (
    <section>
      {genresFilter.map((genre) => <RadioButton key={genre} value={genre} text={genre} isSelected={genre === filter.genre} onChange={() => onChangeFilter({ ...filter, genre })} id={genre} name={genre} />)}
      <Input onChange={(e) => onChangeFilter({ ...filter, name: e.target.value })} value={filter.name} name="name" placeholder="Search" type="text" />
      <Button type="button" className="simple-button" text="Reset" handleClick={() => onChangeFilter({ name: "", genre: "" })} />
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
