import React from 'react';
import FBicon from '../FacebookIcon.png';
import GHicon from '../GitHubIcon.png';
import Twicon from '../TwitterIcon.png';
import LIicon from '../LinkedinIcon.png';
import IGicon from '../InstagramIcon.png';

export default function Footer() {
    return (
        <div className='footer'>
            <a href="https://twitter.com/grinchtrades"><img src={Twicon} /></a>
            <a href="https://facebook.com/"><img src={FBicon} /></a>
            <a href="https://www.instagram.com/tha.grinch/"><img src={IGicon} /></a>
            <a href="https://www.linkedin.com"><img src={LIicon} /></a>
            <a href="https://github.com/lomick2090"><img src={GHicon} /></a>
        </div>
    )
}