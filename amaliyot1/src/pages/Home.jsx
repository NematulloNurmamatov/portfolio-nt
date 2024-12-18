import React from 'react'
import "../styles/home.css"
import man from "../images/uzm.jpg"
import logo1 from "../images/logo1.png"
import logo2 from "../images/logo2.png"
import logo3 from "../images/logo3.png"
import logo4 from "../images/logo4.png"
import logo5 from "../images/logo5.png"



export default function Home() {
    return (
        <div className=' container'>man
            <div className='home'>
                <div className='left'>
                    <h1>Nematullo Nurmuhammadov</h1>
                    <p className='intro'>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button>Let’s get started <i class=" right fa-solid fa-right-long"></i> </button>
                </div>
                <div>
                    <img src={man} alt="" />
                </div>
            </div>
            <div className='home__bottom'>
                <h3 className='worced'>Worked with</h3>
                <div className='logo__img'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                </div>
            </div>
        </div>
    )
}
