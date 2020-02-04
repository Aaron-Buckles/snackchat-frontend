import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Container from "react-bootstrap/Container";

import DiscoverPage from "./Discover/DiscoverPage";
import BusinessPage from "./Business/BusinessPage";
import SubmitPage from "./Submit/SubmitPage";


export default function App() {
  return (
    <Router>
      
      <Container className="p-5">
        <Switch>
          <Route path="/" exact component={DiscoverPage} />
          <Route path="/submit" component={SubmitPage} />
          <Route path="/business" component={BusinessPage} />
        </Switch>
      </Container>

    </Router>
  );
}
