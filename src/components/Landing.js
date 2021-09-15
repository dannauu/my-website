import React from "react";
import pdf from "./assets/Daniel Nau Resume 2021 (2).pdf";

const Landing = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center landingh1 display-3">
          Need a website for your business?
        </h1>
        <p className="display-5 text-center">
          Hire experienced developers here!
        </p>
        <div className="row skills">
          <button className="col-md-3 bounce-in-top" id='col-md-3'>
            <i class="fas fan fa-code fa-3x"></i>
          </button>
          <button className="col-md-3 bounce-in-top">
            <i class="fab fan fa-node fa-3x"></i>
          </button>
          <button className="col-md-3 bounce-in-top">
            <i class="fab fan fa-react fa-3x"></i>
          </button>
          <button className="col-md-3 bounce-in-top">
            <i class="fab fan fa-js fa-3x"></i>
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
        <div className="box1" id='my-content'>
          <div className="row d-flex justify-content-center">
            <div className="col- box3">
              <div className="card">
                <div className="card-body">
                <i class="fas fa-file-code fa-3x"></i>
                  <h4 className="card-title focus-in-expand">Development</h4>
                  <h5 className="card-subtitle mb-2">$60/hr</h5>
                  <p>
                    Work with our full stack react developer and design and
                    create the website for your business or personal needs!
                  </p>
                </div>
              </div>
            </div>
            <div className="col- box3">
              <div className="card">
                <div className="card-body">
                <i class="fas fa-user-clock fa-3x"></i>
                  <h4 className="card-title focus-in-expand">
                    Development w/Tech Support
                  </h4>
                  <h5 className="card-subtitle mb-2">$60/hr</h5>
                  <h6>$99 monthly for 24/7 support</h6>
                  <p>
                    Industry standard development of website and 24 hour support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col- box3 box4">
              <div className="card">
                <div className="card-body">
                <i class="fas fa-tools fa-3x"></i>
                  <h4 className="card-title focus-in-expand">Maintenance</h4>
                  <h5 className="card-subtitle mb-2">$60/hr</h5>
                  <p>
                    Need a feature added to your website? Need your website
                    updated with your latest merchandise? Hire us for any task!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact">
        <div className="row">
          <div className="col-md-12">
            <a
              href={pdf}
              className="btn btn-social"
              target="_blank"
              rel="noreferrer"
            >
              <i className="far fa-file-pdf fa-7x"></i>
            </a>
            <a
              href="https://github.com/dannauu"
              className="btn btn-social"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-7x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-nau-070441194/"
              className="btn btn-social"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-7x"></i>
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Landing;
