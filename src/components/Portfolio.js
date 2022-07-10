import React from "react";
import commerce from "../images/commerce.JPG";
import todo from "../images/todo.jpg";
import event from "../images/event.jpg";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";





import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";


const Portfolio = () => {

    const openPopupboxCommerce = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={commerce} alt="E-Commerce Project..." />
                <p>
                <br />A responsive website that allows users to surf through various products
                <br />This project was used purely to get comfortable with designing with HTML, CSS, and Laravel and PHP.
                </p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/AdityaVikram307/E-Commerce_Project")}>https://github.com/AdityaVikram307/E-Commerce_Project</a>
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({  content, config: {
          titleBar: {  text: "E-Commerce Project With Laravel and PHP"  }
},
});
    }

    const popupboxConfigCommerce = {
        titleBar: {
            enable: true,
            text: "Portfolio Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    
  const openPopupboxTodoApp = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={todo} alt="React Todo Project..." />
        <p>
        <br />A Todo App made using ReactJs. 
        <br />People can add tasks for themselves and can even modify or delete the specific task. 
        <br />Once task is completed, it will be striked off and people have the ability to filter tasks they add.</p>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/AdityaVikram307/To-Do-App", "_blank")}>https://github.com/AdityaVikram307/To-Do-App</a>
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
      titleBar: {  text: "Todo app with ReactJs"  }
},
});
  }

  const popupboxConfigTodoApp = {
    titleBar: {
      enable: true,
      text: "Portfolio Project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  const openPopupboxEvent = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={event} alt="Event Management Project..." />
        <p>
        <br />This is a responsive event management website, made with HTML, CSS, JavaScript,
        <br />PHP and MySQL for backend control.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/AdityaVikram307/Event_Management_INT_220", "_blank")}>https://github.com/AdityaVikram307/Event_Management_INT_220</a>
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
      titleBar: {  text: "Event Management Project"  }
},
});
  }

  const popupboxConfigEvent = {
    titleBar: {
      enable: true,
      text: "Event Management Project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
  
  //

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">projects</h1>
                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxCommerce}>
                        <img className="portfolio-image" src={commerce} alt="Commerce Company Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        <a className="prodlink" href="https://github.com/AdityaVikram307/E-Commerce_Project"><p className="card-title">E-Commerce Website</p></a>
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxTodoApp}>
                        <img className="portfolio-image" src={todo} alt="React Todo Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        <a className="prodlink" href="https://github.com/AdityaVikram307/To-Do-App"><p className="card-title">ToDo App</p></a>
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxEvent}>
                        <img className="portfolio-image" src={event} alt="Event Management Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        <a className="prodlink" href="https://github.com/AdityaVikram307/Event_Management_INT_220"><p className="card-title">Event Management Website</p></a>
                    </div>
                </div>
            </div>
            <popupboxConfigCommerce {...popupboxConfigCommerce} />
            <PopupboxContainer {...popupboxConfigTodoApp} />
            <PopupboxContainer {...popupboxConfigEvent} />
        </div>

    )
}


export default Portfolio;