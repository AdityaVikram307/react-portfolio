import React from "react";
import logo from "../lpulogo.png";
import {Link} from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
            <a style={{color: "white"}} className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/>Aditya Vikram</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="about" className="nav-link" href="#">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="education" className="nav-link" href="#">Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link  smooth={true} to="skills" className="nav-link" href="#">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="portfolio" className="nav-link" href="#">Projects</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar