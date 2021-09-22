import emailjs from "emailjs-com";
import React from "react";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_bz1me1q",
        e.target,
        "user_KqZoKJsgDW9eoJcs43zPJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    const tym = document.getElementById('thankYouMsg')
    const tym2 = document.getElementById('thankYouMsg2')
    const haveAQuestion = document.getElementById('haveAQuestion')
    const checkMark = document.getElementById('checkMark')

    tym.innerHTML = 'Thank You!'
    tym2.innerHTML = 'Your submission has been sent!'
    haveAQuestion.style.display = 'none'
    checkMark.classList= 'far fa-check-square fa-5x'
  }

  return (
    <div>
      <div className="container">
        <div className="contacth1">
          <h1 className="text-focus-in display-3 haveAQuestion" id='haveAQuestion'>
            Have a question or want to work together?
          </h1>
          <div className="" id='checkMark'></div>
          <div id='thankYouMsg' className='thankYouMsg'></div>
          <div id='thankYouMsg2' className='thankYouMsg2'></div>
        </div>
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Add your message or plan you would like to buy!"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-dark"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
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
    </div>
  );
}

// figure out why there is margin on the bottom of the 3 icons