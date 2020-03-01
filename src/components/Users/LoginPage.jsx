import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Alert from "react-bootstrap/Alert"
import { useState } from "react";

import { useAuth } from "../../customHooks/use-auth"

function LoginPage(props) {

  const auth = useAuth();

  const [flag, setFlag] = useState(false)
  const {from} = props.location.state || {from: "/"}

  const loginUser = async (event, loginInfo) => {
    event.preventDefault();
    try {
      await auth.signin(loginInfo)
      props.history.push("/")
    } catch (err) {
      setFlag(true);
    }

    // try {
    //   const res = await userService.loginUser(user);
    //   props.onLogin(res);
    //   props.history.push("/");
    // } catch (err) {
    //   setFlag(true);
    //   console.log(err);
    // }
  };

  return (
    <>
      <h1 className="brand-text text-center">Login</h1>
      <hr />    
      {from === "/signup" && !flag && <Alert variant="success" className="text-center">Account successfully created!</Alert>}
      {flag && <Alert variant="danger" className="text-center">Incorrect username or password!</Alert>}
      <LoginForm handleOnSubmit={loginUser} />
      <Link className="text-center" to="/signup">
        <p className="py-2">Don't have an account? Register here!</p>
      </Link>
    </>
  );
}

export default LoginPage;
