import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Projects from './components/Projects'

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row sticky-top">
            <Link to="/" id='box'  className="col text-center display-6 box">Home</Link>
            <Link to="/about" id='box'  className="col text-center display-6 box">About</Link>
            <Link to="/projects" id='box'  className="col text-center display-6 box">Portfolio</Link>
            <Link to="/contact" id='box'  className="col text-center display-6 box">Contact</Link>
        </div>
        <div className="warning text-center">
          <h6>
            <i className="fas fa-exclamation-circle"></i> Our website is currently
            still under development. If you run into any issues feel free to
            contact us. Thank you for your patience. <i className="fas fa-exclamation-circle"></i>
          </h6>
          <div className='coloredLine'></div>
        </div>
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
