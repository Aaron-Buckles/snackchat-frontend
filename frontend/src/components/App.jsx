import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Navigation from "./Navigation";
import DiscoverPage from "./Discover/DiscoverPage";
import BusinessPage from "./Business/BusinessPage";
import ReviewPage from "./Review/ReviewPage";
import SignupPage from "./Users/SignupPage";

export default function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Container className="p-5">
          <Switch>
            <Route path="/" exact component={DiscoverPage} />
            <Route path="/review" component={ReviewPage} />
            <Route path="/business" component={BusinessPage} />
            <Route path="/signup" component={SignupPage} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}
