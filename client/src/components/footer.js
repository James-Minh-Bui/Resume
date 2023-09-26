import React, { useEffect, useState } from 'react';
import linkedin from "../assets/LinkedIn.png"
import git from "../assets/github.png"
import { useLocation } from 'react-router-dom';
import "./footer.css"

export default function Footer() {
  const [ scrollPage, setScrollPage ] = useState();
  const location = useLocation()
  useEffect(() => {
    const currentURL = location.pathname;
    console.log("this is my url", currentURL)
    if (currentURL.includes("about") || currentURL.includes("contact")) setScrollPage(true) 
    else setScrollPage(false)
  }, [location.pathname]);

  return (
    <div className={`footer ${ scrollPage ? 'nonscrollable' : ''}`}>
        <p className='txt'>Copyright James Bui 2023</p>
        <div className='links'>
          <a href='https://github.com/James-Minh-Bui' target='blank'>
            <img className="git" alt='git' src={git} /> 
          </a>
          <a href='https://www.linkedin.com/in/jamesminhbui/' target='blank'>
            <img className='linkedin' alt='linkedin' src={linkedin} />
          </a>
        </div>
    </div>
  )
}