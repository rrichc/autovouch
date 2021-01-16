import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuditorConfig from './components/auditorConfig'
import Review from './components/review'
import Client from './components/client.js'

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/auditor-config" component={AuditorConfig} />
        <Route path="/review" component={Review} />
        <Route path="/client-docs" component={Client} />
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
