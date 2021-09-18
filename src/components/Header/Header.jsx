import React from "react";
import logo from "../../assets/movieImg.png";
import "./header.scss";

const Home = () => (
  <nav className="nav-container">
    <div className="container-logo">
      <img className="logo" src={logo} alt="movie" />
    </div>
    <div className="container-button">
      <button className="simple-button" type="button">
        <a className="contact-link" target="_blank" href="https://github.com/msarroca/movie-whatchlist" rel="noreferrer">
          contact us
        </a>
      </button>
    </div>
  </nav>

);

export default Home;
