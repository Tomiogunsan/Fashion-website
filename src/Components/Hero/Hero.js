import React from 'react';
import classes from './Hero.module.css';

const Hero = () => {
    return(
        <div className={classes.hero}>
            <div className={classes.content}>
            <h2>Discover Fashion</h2>
            <p>Cozy meets colorful in a fresh new lineup of hues</p>
            </div>
        </div>
    )
}

export default Hero;