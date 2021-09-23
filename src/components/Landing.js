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
            className="col-md-3 bounce-in-top"
            onClick={databaseClick}
            id="database"
          >
            <i className="fas fa-database database fa-3x"></i>
          </button>
          <button
            className="col-md-3 bounce-in-top"
            onClick={nodeClick}
            id="node"
          >
            <i className="fab fan fa-node fa-3x nodejs"></i>
          </button>
          <button
            className="col-md-3 bounce-in-top"
            onClick={reactClick}
            id="react"
          >
            <i className="fab fan fa-react fa-3x react"></i>
          </button>
          <button className="col-md-3 bounce-in-top" onClick={jsClick} id="js">
            <i className="fab fan fa-js fa-3x javascript"></i>
          </button>
        </div>
        <div className="yes text-center">
          <ul className="display-4 bounce-in-bottom">
            <li>Development</li>
            <li>UX/UI Design</li>
            <li>Maintenance</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="box1" id="my-content">
          <div className="row d-flex justify-content-center">
            <div className="col- box3">
              <div className="card">
                <div className="card-body">
                  <i className="fas fa-file-code fa-3x"></i>
                  <h4 className="card-title focus-in-expand">Development</h4>
                  <h5 className="card-subtitle mb-2">$60/hr</h5>
                  <p>
                    Work with our full stack React developer and design and
                    create the website for your business or personal needs!
                    Using MERN stack we will enable a fast and mobile-responsive
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col- box3">
              <div className="card">
                <div className="card-body">
                  <i className="fas fa-user-clock fa-3x"></i>
                  <h4 className="card-title focus-in-expand">
                    Development w/Tech Support
                  </h4>
                  <h5 className="card-subtitle mb-2">$60/hr</h5>
                  <h6>$99 monthly for 24/7 support</h6>
                  <p>
                    Industry standard development of website and 24 hour
                    support. Developed with MERN stack and always
                    mobile-responsive.
                  </p>
                </div>
              </div>
            </div>
            <div className="col- box3 box4">
              <div className="card">
                <div className="card-body">
                  <i className="fas fa-tools fa-3x"></i>
                  <h4 className="card-title focus-in-expand">Maintenance</h4>
                  <h5 className="card-subtitle mb-2">$60/hr</h5>
                  <p>
                    Need a feature added to your website and or updated? Hire us
                    for any task! Get in touch for specific details on our
                    contact page above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="coloredLine"></div>
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
