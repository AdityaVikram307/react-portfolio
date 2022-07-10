import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi, there I'm Aditya Vikram
                </h1>
                <Typed className="typed-text"
                strings={[ "Full-Stack Web Developer", "ReactJs", "HTML", "CSS", "JavaScript", "Laravel", "PHP", "MySQL", "NodeJs" ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="https://www.linkedin.com/in/adityav21"  className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header;