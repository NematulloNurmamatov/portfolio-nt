import React from 'react'
import "../styles/nav.css"
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav>
            <div className='nav container'>
                <h1>Only <span className='nur'>Nur</span></h1>
                <ul>
                    <li>
                        <Link style={{color:"#9C9C9C", textDecoration: "none"}} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link style={{color:"#9C9C9C", textDecoration: "none"}} to="/about">
                            Case Studies
                        </Link>
                    </li>
                    <li>
                        <Link style={{color:"#9C9C9C", textDecoration: "none"}} to="/work">
                            Recent work
                        </Link>
                    </li>
                    <li>
                        <Link style={{color:"#9C9C9C", textDecoration: "none"}} to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div>
                    <a href="https://www.instagram.com/0nly.nur/"><i class=" ii fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100078410160039"><i class=" ii fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/0nly.nur/"><i class=" ii fa-brands fa-instagram"></i></a>
                    <a href="tel:+998900677796"><i class=" ii fa-solid fa-phone"></i></a>
                    <a href="https://t.me/Nurmamatov_o71"><i class=" ii fa-brands fa-telegram"></i></a>
                </div>
            </div>
        </nav>
    )
}

