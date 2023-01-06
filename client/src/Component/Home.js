import React from "react";
import triangle from '../images/triangle.png'
const Home = () => {
  return <>
  <div className="container-fluid">
        <div className="row">
            <div className="col-11">

    <main className="main">
        <div className="row">
            <div className="column">
                <h1>Exercise Tracker</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                    repudiandae, cum deserunt nesciunt ipsa quia atque dolore obcaecati
                    eveniet excepturi est non qui corrupti soluta blanditiis. Assumenda
                    delectus possimus voluptatibus.
                </p>
            </div>
            <div className="column">
                <img src={triangle} alt="" srcset=""/>
            </div>
        </div>
    </main>
    
    </div>
        </div>
    </div>
  </>
};

export default Home;
