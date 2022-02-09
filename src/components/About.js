import React from "react";
import Pic from "./img/aboutmepic.jpg";
import Certificate from "./img/Certificate.PNG";

const About = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center about">Daniel Nau</h1>

        <div>
          <img
            src={Pic}
            width="300"
            height="300"
            alt=""
            className="aboutmepic" id='aboutmepic'
          />

          <p className="text-focus-in display-6">
            I am a full stack developer who is proficient in Javascript. I
            mainly create successful websites using a MERN stack.
          </p>

          <p className="text-focus-in display-6">
            I strive to make a better web; one that is fast, easy to use, and
            frustration-free. Regardless of your specific requirements,
            in solving these challenges, you have a great chance of finding
            success online.
          </p>

          <p className="text-focus-in display-6">
            Rather your needs be a e-commerce website for your business or a
            personal blog, it should be an approachable platform for everyone!
          </p>
          <br />
        </div>
        <div className="aa">
          <img
            src={Certificate}
            width="400"
            height="300"
            alt=""
            className="certificate"
          />

          <p className="text-focus-in display-6">
            On May 24th, 2021 I graduated Kansas University Full Stack Coding
            bootcamp. Since 2017 I have recognized web development as a hobby. In 2022 it's the way I am going to provide for myself and family. 
          </p>
        </div>
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
              <i class="fab fa-facebook-square facebook fa-7x"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
