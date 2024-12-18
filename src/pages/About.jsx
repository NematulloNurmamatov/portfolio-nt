import React from 'react'
import "../styles/about.css"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"

export default function About() {
    return (
        <div className='container'>
            <div className='case__studies'>
                <h1>Case Studies</h1>
                <p className='solving'>Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='flex'>
                    <div>
                        <h4>Fintech</h4>
                        <h3>Work name here</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <button>View Case Study<i class=" right fa-solid fa-right-long"></i> </button>
                    </div>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <h4>EdTech</h4>
                        <h3>Work name here</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <button>View Case Study<i class=" right fa-solid fa-right-long"></i> </button>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <h4>Pharma</h4>
                        <h3>Work name here</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <button>View Case Study<i class=" right fa-solid fa-right-long"></i> </button>
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

