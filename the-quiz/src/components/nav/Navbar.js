// Libraries
import { Routes, Route } from "react-router-dom";

// Assets
import "./../../assets/styles/Navbar.css";
import testIcon from "./../../assets/images/test.png";

// Components
import SideMenu from "./SideMenu";

function Navbar() {
  return (
    <nav id="Navbar" className="navbar navbar-expand-md bg-gradient navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><h3>The Quiz</h3></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <hr className="navbarDivider"/>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <button><h4 className="d-flex">Login/Logout</h4></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
