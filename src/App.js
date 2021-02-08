import "./styles.css";
import "./App.css";

import Hero from "./HomePage/Hero/Hero.js";
import ProjectPage from "./ProjectPage/ProjectPage.js";
import BlogPage from "./BlogPage/BlogPage.js";

import HomePage from "./HomePage/HomePage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>

        

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Projects" exact component={ProjectPage} />
          <Route path="/Blogs" exact component={BlogPage} />
        </Switch>
      </div>
    </Router>
  );
}
