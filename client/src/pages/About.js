import React, { useState, useEffect } from "react"
import "./about.css"
import portrait from "../assets/portrait.jpeg"

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    useEffect(() => {
      // Trigger the fade-in effect after a delay (e.g., 1000ms or 1 second)
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 600);

      const timeoutId2 = setTimeout(() => {
        setIsVisible2(true);
      }, 200);
  
      // Clean up the timeout to prevent memory leaks
      return () => clearTimeout(timeoutId, timeoutId2);
    }, []);

    return (
            <div className='container'>
                <div className={`frontdiv ${isVisible ? 'fade-in' : ''}`}>
                    <div className="abouttxt">
                        <p className="title">About Me</p>
                        <p className="txt">I'm a Full Stack Engineer specializing in Node.js and React. My journey in web development has led me to excel in both backend API development and crafting polished front-end interfaces. <br/> <br/>I'm passionate about staying at the forefront of technology trends and leveraging cutting-edge solutions to create innovative web applications. <br/><br/>Beyond coding, I'm an eager learner, always seeking fresh opportunities to expand my skill set. Let's connect and explore how I can contribute to your next project.</p>
                    </div>
                    <img className="portrait" alt="portrait" src={portrait} />
                </div>
                <div className={`backdiv ${isVisible2 ? 'fade-in' : ''}`} />
            </div>
    )
}