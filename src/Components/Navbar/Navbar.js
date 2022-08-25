import React, {useState} from 'react';
import classes from './Navbar.module.css';
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai';
import logo from '../../Images/logo3.jpg'


const Navbar = () => {

    const [nav, setNav] =useState(false);
    const toggleHandler = () => {
        setNav(!nav);
    }
return(
   <header className= {classes.navbar}>
        <img src={logo} alt='A logo' />
        
        <nav>
            <ul className={nav ? [classes.menu, classes.active].join(' '): [classes.menu]}>
                <li>
                    <a href="/#">Shop</a>
                </li>
                <li>
                    <a href="/#">Collections</a>
                </li>
                <li>
                    <a href="/#">About</a>
                </li>
                 <li>
                    <a href="/#">Journal</a>
                </li>
                <li>
                    <AiOutlineSearch size={25} style={{marginTop: '6px'}}/>
                </li>
                <li>
                    <AiOutlineUser size={25} style={{marginTop: '6px'}}/>
                </li>
            </ul>
        </nav>

        <div onClick={toggleHandler} className={classes.mobile_btn}>
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu  size={30}/>}
           
        </div>
   </header>
)
}

export default Navbar;