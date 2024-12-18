import React from 'react'
import "../styles/work.css"
import group from '../images/Maskgroup.png'
import group2 from '../images/Maskgroup2.png'
export default function Work() {
    return (
        <div className='container work'>
            <h1>Recent Work</h1>
            <p className='solving'>Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div className='flex'>
                <div>
                    <img src={group} alt="" />
                    <h3>Work name here</h3>
                    <p>Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <button>Know more<i class=" right fa-solid fa-right-long"></i> </button>
                </div>
                <div>
                    <img src={group2} alt="" />
                    <h3>Work name here</h3>
                    <p>Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <button>Know more<i class=" right fa-solid fa-right-long"></i> </button>
                </div>
            </div>
        </div>
    )
}
