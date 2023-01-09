import React, { useEffect } from "react";
import triangle from "../images/triangle.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="fluid-container my-5">
        <div className="row">
          <div className="col-8">
            <div className="container emp-profile">
              <form method="">
                <div className="row">
                  <div className="DisplayPic1 col-md-4">
                    <img src={triangle} alt="Thapa" />
                  </div>
                  <div className="col-md-6">
                    <div className="profile-head">
                      <h5>Uzair Arif</h5>
                      <h6>Full Stack Deveolper</h6>
                      <p>
                        Ranking: <span> 1/10 </span>
                      </p>
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            Home
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            Profile
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <button type="button" className="btn btn-light">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="row">
                  {/* left side url */}
                  <div className="col-md-4">
                    <div className="profile-work">
                      <p>Work link</p>
                      <a
                        className="nav-link"
                        href="http://google.com"
                        target="_thapa"
                      >
                        Google
                      </a>
                      <a
                        className="nav-link"
                        href="http://google.com"
                        target="_thapa"
                      >
                        Google
                      </a>
                      <a
                        className="nav-link"
                        href="http://google.com"
                        target="_thapa"
                      >
                        Google
                      </a>
                      <a
                        className="nav-link"
                        href="http://google.com"
                        target="_thapa"
                      >
                        Google
                      </a>
                      <a
                        className="nav-link"
                        href="http://google.com"
                        target="_thapa"
                      >
                        Google
                      </a>
                    </div>
                  </div>
                  {/* right side data toogle */}
                  <div className="col-md-8">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="row">
                          <div className="col-6">Name: </div>
                          <div className="col-6">Uzair</div>
                        </div>
                        <div className="row">
                          <div className="col-6">Name: </div>
                          <div className="col-6">Uzair</div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="row">
                          <div className="col-6">ID: </div>
                          <div className="col-6">Uzair</div>
                        </div>
                        <div className="row">
                          <div className="col-6">Name: </div>
                          <div className="col-6">Uzair</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default About;
