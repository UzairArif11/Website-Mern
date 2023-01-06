import React from "react";
import triangle from "../images/triangle.png";

export const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="DisplayPic1 col-4">
              <img src={triangle} alt="Thapa" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5> Uzair Arif</h5>
                <h6>Web development</h6>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
