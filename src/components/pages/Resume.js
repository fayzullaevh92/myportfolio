import React from 'react';
import './styles/Resume.css';
import {Link} from 'react-router-dom';

function Resume() {
    return (
        <div className='bodydiv1'>
            <header><h1>Resume</h1></header>
            <div className='main'>
                <div className='main__head'>
                    <h2>You can download or open here</h2>
                </div>
                <div className='main__buttons'>
                    <div className='main__buttons_button1'><a href="files/resume2.pdf" download>DOWNLOAD</a></div>
                    <div className='main__buttons_button2'><Link to='/embedresume'>OPEN</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
