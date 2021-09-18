import { Provider } from "react-redux";
import React from "react";
import store from "./store/store";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "./app.scss";

const App = () => (

  <div className="App">
    <Provider store={store}>
      <header className="header-container">
        <Header />
      </header>
      <main className="main-container">
        <Home />
      </main>
    </Provider>

  </div>

);

export default App;
