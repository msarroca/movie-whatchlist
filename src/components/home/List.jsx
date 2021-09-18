/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateMovie, deleteMovie } from "../../store/slices/movies/slice";
import Card from "./Card";
import "../../assets/movieImg.png";
import "./list.scss";

const List = ({ movies }) => {
  const dispatch = useDispatch();

  return (
    <section className="list-container">
      {movies && movies.map((movie, index) => (
        <Card
          {...movie}
          key={movie.name}
          updateMovie={(name, value) => dispatch(updateMovie({ index, name, value }))}
          deleteMovie={() => dispatch(deleteMovie(index))}
        />
      ))}
    </section>
  );
};

List.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
  movies: [],
};

export default List;
