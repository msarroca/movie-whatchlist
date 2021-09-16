/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { updateMovie, deleteMovie } from "../../store/slices/movies/slice";

import "./form.scss";

const List = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  return (
    <section className="list-container">
      {movies && movies.map((movie, index) => (
        <Card
          {...movie}
          updateMovie={(name, value) => dispatch(updateMovie({ index, name, value }))}
          deleteMovie={() => dispatch(deleteMovie(index))}
        />
      ))}

    </section>
  );
};

export default List;
