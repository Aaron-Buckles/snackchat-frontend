import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Navigation from "./Navigation";
import DiscoverPage from "./Discover/DiscoverPage";
import BusinessPage from "./Business/BusinessPage";
import ReviewPage from "./Review/ReviewPage";
import SignupPage from "./Users/SignupPage";
import LoginPage from "./Users/LoginPage";


import { ProvideAuth } from "../customHooks/use-auth"
import { usePosition } from "../customHooks/use-position"

export default function App() {


  // function success(position) {
  //   const latitude = position.coords.latitude;
  //   const longitude = position.coords.longitude;

  //   console.log(latitude, longitude)
  // }

  // function error() {
  //   console.log('Unable to retrieve your location');
  // }


  // useEffect(() => {
  //   if (!navigator.geolocation) {
  //     console.log('Geolocation is not supported by your browser');
  //   } else {
  //     console.log('Locating…');
  //     console.log(navigator.geolocation.getCurrentPosition(success, error));
  //   }
  // })


  return (
    <>
      <ProvideAuth>
        <Router>
          <Navigation/>
          <Container className="mt-5 px-0">
            <Switch>
              <Route path="/review" component={ReviewPage} />
              <Route path="/business" component={BusinessPage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/" exact component={DiscoverPage} />
            </Switch>
          </Container>
        </Router>
      </ProvideAuth>
    </>
  );
}
