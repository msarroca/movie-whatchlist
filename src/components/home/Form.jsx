/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../common/Input/Input";
import InputTag from "../common/InputTag/InputTag";
import Button from "../common/Button/Button";
import "./form.scss";
import { createMovie } from "../../store/slices/movies/actions";

const Form = () => {
  const dispatch = useDispatch();
  const [selectedTags, setSelectedTags] = useState([]);

  const onAddNewMovie = (event) => {
    event.preventDefault();
    const movie = {
      name: event.target.name.value,
      genres: selectedTags,
      watched: false,
    };
    dispatch(createMovie(movie));
  };

  return (
    <form className="form" onSubmit={onAddNewMovie}>
      <div className="form-container">
        <label className="form-container__label" htmlFor="title">
          Movie title
          <Input name="name" placeholder="Insert the movie's title and click enter to save" type="text" required />
        </label>
        <label className="form-container__label" htmlFor="genres">
          Movie genres
          <InputTag selectedTags={setSelectedTags} placeholder="Insert a genre and click enter to save" />
        </label>
        <Button type="submit" className="simple-button" text="Add movie" />
      </div>
    </form>
  );
};

export default Form;
