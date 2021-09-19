/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Filter from "../../components/Home/Filter";
import Form from "../../components/Home/Form";
import List from "../../components/Home/List";
import Spinner from "../../components/common/Spinner/Spinner";
import "./home.scss";

const Home = () => {
  const { genreId = "" } = useParams();
  const [isFilterLoading, setIsFilterLoading] = useState(false);
  const { data, isLoading } = useSelector((state) => state.movies);
  const [filter, setFilter] = useState({ name: "", genre: "" });
  const [list, setList] = useState(data);

  const setFilteredList = () => {
    let filteredList = data;
    if (filter.genre !== "") {
      filteredList = data.filter((movie) => movie.genres.some((genre) => genre.toLowerCase() === filter.genre.toLowerCase()));
      setIsFilterLoading(false);
    }
    if (filter.name !== "") {
      filteredList = filteredList.filter((movie) => movie.name.toLowerCase().includes(filter.name.toLowerCase()));
      setIsFilterLoading(false);
    }
    setList(filteredList);
  };

  useEffect(() => {
    setFilteredList();
  }, [data]);

  useEffect(() => {
    setFilter({ ...filter, genre: genreId });
  }, [genreId]);

  useEffect(() => {
    if (filter.genre !== "" || filter.name !== "") {
      setIsFilterLoading(true);
      setTimeout(setFilteredList, 3000);
    } else {
      setFilteredList();
    }
  }, [filter.genre, filter.name]);

  return (
    <div className="home-container">
      <Form />
      <Filter
        filter={filter}
        onChangeFilter={setFilter}
      />
      {isFilterLoading || isLoading
        ? <Spinner /> : <List movies={list} />}
    </div>
  );
};

export default Home;
