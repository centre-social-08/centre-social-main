import Nav from "./components/Nav";
import Home from "./components/Home";
import Podcasts from "./components/Podcasts";
import Live from "./components/Live";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./components/Footer";
import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-type"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

function App() {
  const [hasToken, setHasToken] = useState(
    localStorage.getItem("auth_token") ? true : false
  );

  return (
    <Router>
      <div>
        <Nav hasToken={hasToken} setHasToken={setHasToken} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/podcasts">
            <Podcasts />
          </Route>
          <Route path="/live">
            <Live />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/register">
            {hasToken ? (
              <Redirect to="/" />
            ) : (
              <Register />
            )}
          </Route>
          <Route path="/login">
            {hasToken ? (
              <Redirect to="/" />
            ) : (
              <Login setHasToken={setHasToken} />
            )}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
