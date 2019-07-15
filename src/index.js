import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./vars.css";
import "./main.css";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
