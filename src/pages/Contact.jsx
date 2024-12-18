import React from 'react'
import "../styles/contact.css"

export default function Contact() {
    return (
        <div className='container contact'>
            <h1>Get In Touch</h1>
            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div className='cont'>
                <label htmlFor=""> Email </label> <br />
                <input type="text" placeholder='Please enter your email' /> <br />
                <label htmlFor=""> Mobile </label> <br />
                <input type="text" placeholder='Enter mobile' /> <br />
                <label htmlFor="">Message</label> <br />
                <textarea name="" id="" placeholder='Enter your message'>
                </textarea>
            </div>
        </div>
    )
}
