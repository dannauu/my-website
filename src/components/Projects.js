import React from "react";
import pdf from "./assets/Daniel Nau Resume 2021 (2).pdf";

const Projects = () => {
  return (
      <>
    <div className="container">
      <div className="row comingSoon">
        <div className="text-focus-in display-3 col text-center">
          Previous work coming soon! In the meantime connect with me on social media!
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
            <a
              href="https://www.facebook.com/webdevnau/"
              className="btn btn-social"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-facebook-square fa-7x"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
