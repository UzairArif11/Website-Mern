import React from "react";
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink className="navbar-brand" to="/">Exercise Tracker</NavLink>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            
                    </ul>
                    <form className="d-flex" role="search">
                        <button type="button" className="btn btn-outline-dark">
                          <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
                          </button>
                        <button type="button" className="btn btn-outline-dark">
                        <NavLink className="nav-link active" aria-current="page" to="/signup"> Sign Up</NavLink>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
