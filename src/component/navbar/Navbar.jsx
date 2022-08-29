import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div class="container">
            <div class="box">
                <div class="logo">
                    <img src="images/logo.png" alt="logo.jpg"/>
                </div>
                <div class="nav-item">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                    </ul>
                    <a class="button">
                        Contact us
                    </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar