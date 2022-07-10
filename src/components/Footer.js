import React from "react";
import {Link} from "react-scroll"
import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';


const Footer = () => {
    return (
        <div style={{color: "#fff"}} className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Lucknow, Uttar Pradesh, India</p>
                        </div>
                        <div className="d-flex">
                            <p>adityavikram210@gmail.com </p>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link style={{color: "#fff"}} smooth={true} to="home" className="footer-nav">Home</Link>
                                <br />
                                <Link style={{color: "#fff"}} smooth={true} to="about" className="footer-nav">About me</Link>
                                <br />
                                <Link style={{color: "#fff"}} smooth={true} to="skills" className="footer-nav">Skills</Link>
                            </div>
                            <div className="col">
                                <Link style={{color: "#fff"}} smooth={true} to="education"  className="footer-nav">Education</Link>
                                <br />
                                <Link style={{color: "#fff"}} smooth={true} to="portfolio"  className="footer-nav">Projects</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <a className="socialslin" href = "https://www.linkedin.com/in/adityav21"><h3><FaLinkedin></FaLinkedin></h3></a>
                            <a className="socialslin" href = "https://github.com/AdityaVikram307"><h3><FaGithub></FaGithub></h3></a>
                            <a className="socialslin" href = "mailto: adityavikram210@gmail.com"><h3><FaMailBulk></FaMailBulk></h3></a>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp; All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;