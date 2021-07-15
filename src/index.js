import React from "react";

import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.render(
  <Provider store={store}>
    <Router>
      <App />{" "}
    </Router>{" "}
  </Provider>,
  document.getElementById("root")
);
