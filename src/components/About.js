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
            className="aboutmepic"
          />

          <p className="text-focus-in">
            Growing up in the midwest, (Kansas City) and working construction
            for the majority of my early adulthood I finally took the leap of
            faith and made a career change. In 2020 during the global pandemic I
            thought what better time to pursue my dream of being a Full Stack
            Developer. Through Kansas University I acheived a certificate for
            completing their Full Stack Bootcamp in May of 2021. During this
            bootcamp I learned a vast amount of knowledge, including React,
            NodeJs, jQuery, API interaction, SQL, MongoDB and more!
          </p>

          <img
            src={Certificate}
            width="400"
            height="300"
            alt=""
            className="certificate"
          />
        </div>
      </div>
    </>
  );
};

export default About;
