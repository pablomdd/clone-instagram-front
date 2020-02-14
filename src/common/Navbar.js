import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { FaInstagram } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCompass, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const instagram_logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png";

class Navbar extends Component {
  constructor(props) {
    //Inicializa el estado
    super(props);
    this.state = {
      num: 1,
      data: []
    };
  }

  render() {
    // Pintar UI
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* <a className="navbar-brand" href="#">
                Instagram 
              </a> */}

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            {/* <FaInstagram/> */}
            {/* <img src="/assets/img/bootstrap.svg" alt="" width="32" height="32" title="Bootstrap"/> */}
            <Link to="/">
              <FontAwesomeIcon className="" icon={faInstagram} size="2x" />
              <span class="nav-line"></span>
              <img
                className="instagram_logo"
                src={instagram_logo}
                alt="Intagram Logo"
              />
            </Link>

            <div className="ml-auto">
              <FontAwesomeIcon icon={faCompass} size="2x mr-4" />
              <FontAwesomeIcon icon={faHeart} size="2x mr-4" />
              <Link to="/profile">
                <FontAwesomeIcon icon={faUser} size="2x" />
              </Link>
            </div>

            {/* <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
