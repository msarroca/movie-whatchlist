/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../common/Input/Input";
import InputTag from "../common/InputTag/InputTag";
import Button from "../common/Button/Button";
import { createMovie } from "../../store/slices/movies/actions";
import imageMovie from "../../assets/movieImg.png";
import "./form.scss";

const Form = () => {
  const dispatch = useDispatch();
  const [selectedTags, setSelectedTags] = useState([]);
  const [inputName, setInputName] = useState("");

  const { isLoading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (!isLoading && !error) {
      setSelectedTags([]);
      setInputName("");
    }
  }, [isLoading, error]);

  const onAddNewMovie = (event) => {
    event.preventDefault();
    const movie = {
      image: imageMovie,
      name: inputName,
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
          <Input
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
            name="name"
            placeholder="Insert the movie's title and click enter to save"
            type="text"
            required
          />
        </label>
        <label className="form-container__label" htmlFor="genres">
          Movie genres
          <InputTag
            setTags={setSelectedTags}
            placeholder="Insert a genre and click enter to save"
            tags={selectedTags}
          />
        </label>
        <Button
          type="submit"
          className="simple-button"
          text="Add movie"
        />
      </div>
    </form>
  );
};

export default Form;
