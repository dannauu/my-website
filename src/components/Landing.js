import React from "react";

const Landing = () => {
  return (
    <>
      <div className="container">
        <div className="row skills">
          <button className="col-md-3 swirl-in-fwd"><i className="fab fa-html5 fa-3x"></i></button>
          <button className="col-md-3 swirl-in-fwd"><i class="fab fa-css3-alt fa-3x"></i></button>
          <button className="col-md-3 swirl-in-fwd"><i class="fab fa-react fa-3x"></i></button>
          <button className="col-md-3 swirl-in-fwd"><i class="fab fa-js fa-3x"></i></button>
        </div>
      </div>
    </>
  );
};

export default Landing;
