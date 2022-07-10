import React from "react";
import author from "../profile.jpg"

const About = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        Hello, my name is Aditya. I'm a budding Full-Stack Web Developer. Tech Stack I Frequently use are HTML, CSS, JavaScript, Laravel, PHP, MySQL, ReactJs.
                        I have been interested in computer engineering since my school days, and I began my journey in Computer Science and Engineering at Lovely Professional University. I completed a certification course as well on ReactJs through Simplilearn. I am highly organized, I have outstanding attention to details, and I believe that prioritization is what makes the field of CSE so successful. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About