import * as React from 'react';
import linkedin from "../assets/LinkedIn.png"
import git from "../assets/github.png"
import "./footer.css"

export default function footer() {
  return (
    <div className='footer'>
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