import React from "react";
import "./App.css";
import Home from "./Component/Home/Home";
// import EventPage from "./Component/EventPage/EventPage";
import Create from "./Component/Create/Create";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Event from "./Component/Event/Event";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/event" component={Event} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
