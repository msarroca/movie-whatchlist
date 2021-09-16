import { Provider } from "react-redux";
import React from "react";
import store from "./store/store";
import Home from "./pages/Home";

const App = () => (

  <div className="App">
    <Provider store={store}>
      <header className="header-container">
        <h1>Movies</h1>
      </header>
      <main className="main-container">
        <Home />
      </main>
    </Provider>

  </div>

);

export default App;
