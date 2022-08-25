import React from 'react';
import classes from './Shopper.module.css';
import shopper from '../../Images/shopper.jpg';

const Shopper = () => {
    return (
        <div className={classes.shopper}>
          <div className={classes.left}>
            <img src={shopper} alt='/' />
          </div>
          <div>
            <h2>Find your perfect design <span> from our forever changing catalogue</span></h2>
            <p>These pieces are versatile and suitable for any environment through your day, 
                whether it be formal, casual or a bit of both. </p>
                <button>Visit Our Shop</button>
          </div>
        </div>
    )
}

export default Shopper;