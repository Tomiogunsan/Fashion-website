import React from 'react';
import classes from './Footer.module.css';
import logo from '../../Images/logo3.jpg';

const Footer = () => {
    return (
    <div className={classes.footer}>
        <div className={classes.container}>
            <img src={logo} alt='/' />  
            <button>Choose Your Style</button> 
        </div>
    </div>
    )
}

export default Footer;