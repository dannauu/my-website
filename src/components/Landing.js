import React from "react";

const Landing = () => {
  return (
    <>
      <div className="container">
        <h1 className='text-center landingh1 display-3'>Need a website for your business?</h1>
        <p className='display-5 text-center'>Hire experienced developers here!</p>
        <div className="row skills">
          <button className="col-md-3 bounce-in-top"><i class="fas fa-code fa-3x"></i></button>
          <button className="col-md-3 bounce-in-top"><i class="fab fa-node fa-3x"></i></button>
          <button className="col-md-3 bounce-in-top"><i class="fab fa-react fa-3x"></i></button>
          <button className="col-md-3 bounce-in-top"><i class="fab fa-js fa-3x"></i></button>
        </div>

        <div className='yes text-center'>
          <h1>Hire me for any skill</h1>
          <ul className='display-4'>
            <li>Development</li>
            <li>UX/UI Design</li>
            <li>Maintenance</li>
            <li>Support</li>
          </ul>
        </div>
        
      </div>
    </>
  );
};

export default Landing;
