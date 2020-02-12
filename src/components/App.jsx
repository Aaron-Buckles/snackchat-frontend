import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import jsonwebtoken from "jsonwebtoken";

import Container from "react-bootstrap/Container";

import Navigation from "./Navigation";
import DiscoverPage from "./Discover/DiscoverPage";
import BusinessPage from "./Business/BusinessPage";
import ReviewPage from "./Review/ReviewPage";
import SignupPage from "./Users/SignupPage";
import LoginPage from "./Users/LoginPage";

export default function App() {
  const [user, setUser] = useState({});

  const checkLoginStatus = () => {
    if (Cookies.get("token")) {
      setUser(jsonwebtoken.decode(Cookies.get("token")));
    } else {
      setUser({});
    }
  };

  useEffect(checkLoginStatus, []);

  const handleLogin = res => {
    Cookies.set("token", res.token);
    checkLoginStatus();
  };

  const handleLogout = () => {
    Cookies.remove("token");
    setUser({});
  };

  return (
    <>
      <Router>
        <Navigation user={user} onLogout={handleLogout} />
        <Container className="p-5">
          <Switch>
            <Route
              path="/review"
              render={props => <ReviewPage {...props} user={user} />}
            />
            <Route path="/business" component={BusinessPage} />
            <Route path="/signup" component={SignupPage} />
            <Route
              path="/login"
              render={props => <LoginPage {...props} onLogin={handleLogin} />}
            />
            <Route path="/" exact component={DiscoverPage} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}
