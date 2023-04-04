import React from 'react';
import Heading from './Heading';
import AboutText from './AboutText';
import Footer from './Footer';
import grinch from '../grinch.png'

export default function Card() {
    return (
        <div className='card'>
            <img src={grinch}></img>
            <Heading />
            <AboutText />
            <Footer />
        </div>
    )
}