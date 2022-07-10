import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../images/avatars/avatar1.svg";
import avatar2 from "../images/avatars/avatar2.svg";
import avatar3 from "../images/avatars/avatar3.svg";
import avatar4 from "../images/avatars/avatar4.svg";
import avatar5 from "../images/avatars/avatar5.svg";
import avatar6 from "../images/avatars/avatar6.svg";
import avatar7 from "../images/avatars/avatar7.png";


const SkillsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={2000}
    >
      <>
        <img src={avatar1} alt="html" />
        <div className="myCarousel">
          <h3>H.T.M.L</h3>
          <h4>Hyper Text Markup Language</h4>
          <br />
            <br />
        </div>
      </>
      <>
        <img src={avatar2} alt="css" />
        <div className="myCarousel">
        <br />
            <br />
          <h3>C.S.S</h3>
          <h4>Cascading Style Sheets</h4>
        </div>
      </>
      <>
        <img src={avatar3} alt="javasceipt" />
        <div className="myCarousel">
        <br />
            <br />
          <h3>JavaScript</h3>
          <h4>Most Popular Programming Language</h4>
        </div>
      </>
      <>
        <img src={avatar4} alt="reactjs" />
        <div className="myCarousel">
        <br />
            <br />
          <h3>ReactJs</h3>
          <h4>Front-End Javascript Framework</h4>
        </div>
      </>
      <>
        <img src={avatar5} alt="mysql" />
        <div className="myCarousel">
        <br />
            <br />
          <h3>MySQL</h3>
          <h4>My Structured Query Language</h4>
        </div>
      </>
      <>
        <img src={avatar6} alt="php" />
        <div className="myCarousel">
        <br />
            <br />
          <h3>P.H.P</h3>
          <h4>Hypertext Preprocessor</h4>
        </div>
      </>
      <>
        <img src={avatar7} alt="laravel" />
        <div className="myCarousel">
            <br />
            <br />
          <h3>Laravel</h3>
          <h4>PHP Web Framework</h4>
        </div>
      </>
    </Carousel>
  )
}

export default SkillsCarousel;