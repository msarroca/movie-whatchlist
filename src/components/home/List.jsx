/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteMovie, updateMovie } from "../../store/slices/movies/actions";
import Card from "./Card";
import "../../assets/movieImg.png";
import "./list.scss";

const List = ({ movies }) => {
  const dispatch = useDispatch();

  return (
    <section className="list-container">
      {movies && movies.map((movie) => (
        <Card
          {...movie}
          key={movie.name}
          setUpdateMovie={(name, value) => dispatch(updateMovie({ id: movie.id, name, value }))}
          setDeleteMovie={() => dispatch(deleteMovie(movie.id))}
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
