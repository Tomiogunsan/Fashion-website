import React from 'react';
import classes from './Top.module.css';
import sweaterOne from '../../Images/sweater.jpg';
import sweaterTwo from '../../Images/sweater1.jpg';
import sweaterThree from '../../Images/sweater2.jpg';
import sweaterFour from '../../Images/sweater3.jpg';
import sweaterFive from '../../Images/sweater4.jpg';
import sweaterSix from '../../Images/sweater5.jpg';

const Top = () => {
    return (
        <div className={classes.top}>
            <div className={classes.heading}>
                <h2>New Collection</h2>
                <div className={classes.text_bg}>
                    <p>
                        <span>Select from our latest sweat-shirt to roll in your style</span>
                    </p>
                </div>
            </div>

            <div className={classes.container}>
                <div className={classes.card}>
                    <img src={sweaterOne} alt='/' />
                </div>
                <div className={classes.card}>
                    <img src={sweaterTwo} alt='/' />
                </div>
                <div className={classes.card}>
                    <img src={sweaterThree} alt='/' />
                </div>
                <div className={classes.card}>
                    <img src={sweaterFour} alt='/' />
                </div>
                <div className={classes.card}>
                    <img src={sweaterFive} alt='/' />
                </div>
                <div className={classes.card}>
                    <img src={sweaterSix} alt='/' />
                </div>
            </div>
        </div>
    )
}

export default Top;