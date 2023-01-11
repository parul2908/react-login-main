import React from 'react';
import '../App.css';
import './Bodysection.css';

function Bodysection() {
    return (
        <div className='body-container'>
            <video src="./videos/video1.mp4" autoPlay loop muted/>
            <h1>WELCOME  TECHIES</h1>
            <p>Why wait? Just Dive in</p>
        </div>
    )
}

export default Bodysection;