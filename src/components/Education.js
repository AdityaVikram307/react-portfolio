import React from "react";


const Education = () => {
    return (
        <div id="education" className="education">
            <div className="d-flex justify-content-center my-5">
                <h1>educational qualifications</h1>
            </div>
            <div id="contentedu" className="container education-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div id="marker" className="marker"></div>
                    <div className="timeline-content">
                    <h3>Mary Gardiner's Convent School</h3>
                    <p> Class - X  
                    <br />CGPA : 10  
                    <br />May 2016
                    <br />
                    <br /> 
                    </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Lovely Professional University</h3>
                    <p> B.Tech Computer Science and Engineering
                    <br />Grade - 8.64 
                    <br /> July 2019 - Present
                    </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Mary Gardiner's Convent School</h3>
                    <p> Class - XII
                    <br />Percentage - 76.4% 
                    <br /> May 2018
                    </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Education;