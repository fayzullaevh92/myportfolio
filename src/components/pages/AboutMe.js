import React from 'react';
import './styles/AboutMe.css';

function AboutMe() {
    return (
        <div className='bodydiv'>
            <header className="header__aboutme">
                <h1 className='header__name'>(Archie) Khojiakbar Fayzullaev - React Developer</h1>
            </header>
            <div className='main1'>
                <div className='main1__image'>
                    <img src={process.env.PUBLIC_URL + '/images/myphoto.jpg'} alt='myself'/>
                </div>
                <div className='main1__text'>
                    <h3 id="main1__text__text">About Me</h3>
                    I am a React Developer and have 6 years of experience in web development. 
                    Throughout these years of experience, I have gained more skills and fully equipped myself
                    with the vital tools that come along with the React Development skills. In my recent experience,
                    I have strengthened my skills building Single Page Applications utilizing React Hooks and creating 
                    functional components. Even though my main focus is on the front end, I have contributed to back end
                    as well throughout various projects. I enjoy using NodeJS and ExpressJS to build routes to perform CRUD operations
                    on APIs. 

                </div>
                <div className='main1__info'>
                    <h3 id="main1__info__info">Information</h3>
                    <ul>
                        <li><b>GitHub profile:</b>&nbsp;&nbsp;<a href="https://github.com/fayzullaevh92">https://github.com/fayzullaevh92</a></li>
                        <li><b>Email:</b>&nbsp;&nbsp;archiefayzullaev@gmail.com</li>
                        <li><b>Phone No:</b>&nbsp;&nbsp;872-336-9189</li>
                        <li><b>Location:</b>&nbsp;&nbsp;Chicago, Illinois (Open to relocate)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
