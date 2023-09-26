import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import "./navBar.css"
import Logo from "../assets/JB.png"

export default function NavBar() {
    const navigate = useNavigate();

    function navToHome() {
        navigate('/')
    }
    function navToAbout() {
        navigate('/about')
    }
    function navToContact() {
        navigate('/contact')
    }
    return (
        <div>
            <div className="navBar">
                <img onClick={navToHome} className="logo" src={Logo} alt="JamesBuiLogo" />
                <div>
                    <Button onClick={navToHome} className='button'>Portfolio</Button>
                    <Button onClick={navToAbout} className='button' >About</Button>
                    <Button onClick={navToContact} className='button' >Contact</Button>
                </div>
            </div>
        </div>
    )
}