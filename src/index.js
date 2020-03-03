import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

// Styles
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-awesome-button/dist/styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
