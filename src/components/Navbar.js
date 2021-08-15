import React from 'react'
import Navbar from '../assets/css/Navbar.css'
export default function nav() {
    return (
            <>
            <header class="header">
            <nav class="navbar">
            <section class="logo">
                <a href="https://apple.com"><img src="https://img.icons8.com/ios-glyphs/30/000000/mac-os--v4.png"/></a>
            </section>
            <input type="checkbox" class="toggler"/>  
            <div class="hamburger"><div></div></div>
            <div class="menu">
                <ul class="nav_list">
                <li><a href="https://www.apple.com/eg/mac/">Mac</a></li>
                <li><a href="https://www.apple.com/eg/ipad/">iPad</a></li>
                <li><a href="https://www.apple.com/eg/iphone/">iPhone</a></li>
                <li><a href="https://www.apple.com/eg/tv/">TV</a></li>
                <li><a href="https://www.apple.com/eg/music/">Music</a></li>
                <li><a href="https://support.apple.com/en-eg/">Support</a></li>
                </ul>
            </div>
            </nav>
        </header>
            </>
    )
}
