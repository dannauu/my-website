import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col text-center display-6 box">
            <Link to="/">Home</Link>
          </div>
          <div className="col text-center display-6 box">
            <Link to="/about">About</Link>
          </div>
          <div className="col text-center display-6 box">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
