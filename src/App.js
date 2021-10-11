import Nav from "./components/Nav"
import Home from "./components/Home"
import Podcasts from "./components/Podcasts"
import Live from "./components/Live"
import Contact from "./components/Contact"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
    <div>
      <Nav/>
      <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/podcasts">
            <Podcasts/>
        </Route>
        <Route path="/live">
            <Live/>
        </Route>
        <Route path="/contact">
            <Contact/>
        </Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
