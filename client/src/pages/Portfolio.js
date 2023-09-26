import React, { useState, useEffect } from "react"
import home from "../assets/home.jpg"
import "./portfolio.css"
import doorcast from "../assets/Doorcast.png"
import squeezed from "../assets/squeezed.png"
import denotes from "../assets/ComingSoon.png"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Portfolio() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Trigger the fade-in effect after a delay (e.g., 1000ms or 1 second)
      const delay = 200;
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, delay);
  
      // Clean up the timeout to prevent memory leaks
      return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="portfolio">
            <div className="header">
                <img className={`fading-image ${isVisible ? 'fade-in' : ''}`} alt="homepicture" src={home} />
            </div>
            <div className={`projects ${isVisible ? 'fade-in' : ''}`} >
            <p className="intro">Here are some of my most recent projects</p>
                <div className="box">
                    <div className="projectTxt">
                        <p className="projectTittle">Squeezed</p>
                        <p className="description">DoorCast is a prototyping tool that allows developers to render code in the new fullstack framework called Fresh. Simply by selecting the element you want to render, dropping it into the workspace, and specifiy the necessary attribute values, users then have the ability to copy and utulize production ready code for their application.</p>
                        <a className="atag" href="https://medium.com/@alexaroberts/prototyping-tool-for-the-freshest-deno-framework-3df9c4c718dc" target="blank">
                            <p className="link">Learn More</p>
                            <KeyboardArrowRightIcon className="arrow"/>
                        </a>
                    </div>
                    <img className="projectimg1" alt="squeezed" src={squeezed} />
                </div>
                <div className="box">
                    <div className="projectTxt">
                        <p className="projectTittle">DoorCast</p>
                        <p className="description">At Doorcast, a multi-family, real estate investment company, I developed a full stack application that automated a number of internal process including due diligence, renovation, maintenance, and personnel/resource management. The technology stack for this project included cutting-edge tools and frameworks like React for building the user interface, Redux for state management, Storybook for component documentation and testing, Next.js for server-side rendering, and Atlassian tools for project management and collaboration.</p>
                    </div>
                    <img className="projectimg" alt="doorcast" src={doorcast} />
                </div>
                <div className="box">
                    <div className="projectTxt">
                        <p className="projectTittle">Denotes</p>
                        <p className="description">Experience Denotes, a cutting-edge note-taking web application built using Fresh, the new full stack framework that developed in Deno. With a lightweight, responsive design, it's the perfect platform for users to create accounts, compose and securely store their notes, and effortlessly share them with others. Leveraging innovative server-side rendering, Denotes ensures fast load times and exceptional performance. Seamlessly synchronize your notes across devices, and access them from anywhere, anytime.</p>    
                    </div>
                    <img className="projectimg" alt="denotes" src={denotes} />
                </div>
            </div>
        </div>
    )
}