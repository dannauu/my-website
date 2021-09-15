import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row sticky-top">
          <div className="col text-center display-6 box">
            <Link to="/">Services</Link>
          </div>
          <div className="col text-center display-6 box">
            <Link to="/about">About</Link>
          </div>
          <div className="col text-center display-6 box">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="warning text-center">
          <h6>
            <i class="fas fa-exclamation-circle"></i> Our website is currently
            still being developed. If you run into any issues feel free to
            contact us. Thank you for your patience. <i class="fas fa-exclamation-circle"></i>
          </h6>
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
