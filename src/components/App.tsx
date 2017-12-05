import React from "react";
import PropTypes from "prop-types";
import { Switch, NavLink, Route } from "react-router-dom";
import SelectPage from "../containers/SelectPage";
import HomePage from "../containers/HomePage";
import DetailPage from "../containers/DetailPage";
import NotFoundPage from "./NotFound";

class App extends React.Component {
  render() {
    const activeStyle = { color: "blue" };
    return (
      <div>
        <header className="bs-docs-nav navbar navbar-default navbar-static-top" role="banner">
        <div className="container">
          <div className="navbar-collapse bs-navbar-collapse collapse">
              <ul className="nav navbar-nav" id="top" role="navigation">
                <li>
                <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
                </li>
                <li>
                <NavLink to="/search" activeStyle={activeStyle}>Search</NavLink>
                </li>
                <li>
                <NavLink to="/carOfWeek" activeStyle={activeStyle}>Car of Week</NavLink>
                </li>
              </ul>
          </div>
        </div>
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={SelectPage} />
            <Route path="/carOfWeek" component={HomePage} />
            <Route path="/make/model/:id" component={DetailPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
