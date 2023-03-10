import React, { useContext, useEffect, useState } from "react";
import triangle from "../images/triangle.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Home = () => {
  const { state, dispatch } = useContext(UserContext);
  const [userData, setUserData] = useState("");
  const [show, setShow] = useState("false");
  const navigate = useNavigate();
  const homePage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      // Successfully Login profile
      const data = await res.json();
      setUserData(data);
      setShow(true);
      dispatch({ type: "USER", payload: true });

      // Logout profile
      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (error) {
      console.log(error);
      setShow(false);
      dispatch({ type: "USER", payload: false });
    }
  };
  useEffect(() => {
    homePage();
  }, [setUserData, setShow]);

  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-11">
            <main className="main">
              <div className="row">
                <div className="col-8">
                  <h1>
                    {show
                      ? `Welcome ${userData.name} to Exercise Tracker`
                      : `Exercise Tracker`}
                  </h1>
                  Exercise Tracker
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nam repudiandae, cum deserunt nesciunt ipsa quia atque
                    dolore obcaecati eveniet excepturi est non qui corrupti
                    soluta blanditiis. Assumenda delectus possimus voluptatibus.
                  </p>
                </div>
                <div className="DisplayPic1 col-4">
                  <img src={triangle} alt="" srcSet="" />
                </div>
              </div>
            </main>
            <h1>Demo</h1>
            <p>
              React (also known as React.js or ReactJS) is a free and
              open-source front-end JavaScript library[3] for building user
              interfaces based on UI components. It is maintained by Meta
              (formerly Facebook) and a community of individual developers and
              companies.[4][5][6] React can be used as a base in the development
              of single-page, mobile, or server-rendered applications with
              frameworks like Next.js. However, React is only concerned with
              state management and rendering that state to the DOM, so creating
              React applications usually requires the use of additional
              libraries for routing, as well as certain client-side
              functionality.[7][8]
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
