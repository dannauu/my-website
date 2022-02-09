import React from "react";

const Landing = () => {
  function databaseClick() {
    const skill = document.getElementById("database");
    skill.classList.add("slide-rotate-hor-b-bck");
    setTimeout(function () {
      skill.classList.remove('slide-rotate-hor-b-bck')
    }, 500);
  }

  function nodeClick() {
    const skill = document.getElementById("node");
    skill.classList.add("slide-rotate-hor-b-bck");
    setTimeout(function () {
      skill.classList.remove('slide-rotate-hor-b-bck')
    }, 500);
  }

  function reactClick() {
    const skill = document.getElementById("react");
    skill.classList.add("slide-rotate-hor-b-bck");
    setTimeout(function () {
      skill.classList.remove('slide-rotate-hor-b-bck')
    }, 500);
  }

  function jsClick() {
    const skill = document.getElementById("js");
    skill.classList.add("slide-rotate-hor-b-bck");
    setTimeout(function () {
      skill.classList.remove('slide-rotate-hor-b-bck')
    }, 500);
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center landingh1 display-3 slide-in-left">
          I design fast, responsive websites.
        </h1>
        <p className="display-5 text-center slide-in-left">
          Full Stack React Developer
        </p>
        <div className="row skills">
          <button
            className="col bounce-in-top"
            onClick={databaseClick}
            id="database"
          >
            <i className="fas fa-database database fa-3x"></i>
          </button>
          <button
            className="col bounce-in-top"
            onClick={nodeClick}
            id="node"
          >
            <i className="fab fan fa-node fa-3x nodejs"></i>
          </button>
          <button
            className="col bounce-in-top"
            onClick={reactClick}
            id="react"
          >
            <i className="fab fan fa-react fa-3x react"></i>
          </button>
          <button className="col bounce-in-top" onClick={jsClick} id="js">
            <i className="fab fan fa-js fa-3x javascript"></i>
          </button>
        </div>
        <div className="yes text-center">
          <ul className="display-4 bounce-in-bottom">
            <p className="pHeader">Hello, I'm Daniel Nau</p>
            <p className="pUnderHeader">I strive to make the web an easier, more approachable platform for whatever your requirements are. I also manage to be on time and on budget!</p>
          </ul>
        </div>
        <div className="contact">
          <div className="row">
            <div className="col-md-12">
              <a
                href="https://github.com/dannauu"
                className="btn btn-social"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github github fa-7x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-nau-070441194/"
                className="btn btn-social"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin linkedIn fa-7x"></i>
              </a>
              <a
                href="https://www.facebook.com/webdevnau/"
                className="btn btn-social"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-square facebook fa-7x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
