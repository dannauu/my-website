import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import backgroundVideo from './components/img/DJI_0424.mp4'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
        <video autoPlay loop muted id="bgVid">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="row">
          <Link to="/" id="box" className="col text-center display-6 box">
            Home
          </Link>
          <Link to="/about" id="box" className="col text-center display-6 box">
            About
          </Link>
          <Link
            to="/projects"
            id="box"
            className="col text-center display-6 box"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            id="box"
            className="col text-center display-6 box"
          >
            Contact
          </Link>
        </div>
        <div className="coloredLine"></div>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
