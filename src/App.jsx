import { Provider } from "react-redux";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import store from "./store/store";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "./app.scss";

const App = () => (

  <div className="App">
    <Provider store={store}>
      <Router>
        <Header />
        <main className="main-container">
          <Switch>
            <Route
              path="/"
              exact
              component={Home}
            />
            <Route
              path="/genre=:genreId"
              component={Home}
            />
          </Switch>
        </main>
      </Router>
    </Provider>

  </div>

);

export default App;
