import React from 'react';
import Mail from '../Mail.png'

export default function Heading() {
    return (
        <div className='header'>
            <h1 className="name">Jesse Stahl</h1>
            <h4 className="title">Front-End Developer</h4>
            <h5 className="website"><a href="https://gomeditate.net">GoMeditate.net</a></h5>
            <a href="mailto:lomick2090@gmail.com" className='emaillink'><button className ='email'><span><img src={Mail}/></span>Email</button></a>
        </div>
    )
}