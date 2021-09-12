import React, {Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
    return (

        <nav class="main-nav">
        <ul class="menu">
            
            <li class="menu__items to-left">
                <img className="logo-img" src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1631379953/Screenshot__279__2-removebg-preview_3-removebg-preview_sl4qnp.png" alt="logo" />
            </li>
            <li class="menu__item">
                <a class="menu__link" href="#Home">Home</a>
            </li>
            <li class="menu__item">
                <a class="menu__link" href="#About">About</a>
            </li>
            <li class="menu__item">
                <a class="menu__link" href="#Dino">Dino</a>
            </li>
        </ul>
    </nav>
    )
 }
}

export default Navbar
