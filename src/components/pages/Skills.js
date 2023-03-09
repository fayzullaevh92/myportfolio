import React from 'react'
import './styles/Skills.css';

function Skills() {
    return (
        <div className='body__skills'>
            <header><h1>Technical Skills</h1></header>
            <div className='skills'>
                <div className='skills__card'>
                    <h2 className='skills__card__head'>Languages</h2>
                    <div className='skills__card__images'>
                        <img src={process.env.PUBLIC_URL + '/images/javascript.png'} alt='JavaScript'/>
                        <img src={process.env.PUBLIC_URL +'/images/typescript.png'} alt='TypeScript'/>
                        <img src={process.env.PUBLIC_URL +'/images/cpp.png'} alt='C++'/>
                        <img src={process.env.PUBLIC_URL +'/images/java.jpg'} alt='Java'/>
                        <img src={process.env.PUBLIC_URL +'/images/html.png'} alt='HTML'/>
                        <img src={process.env.PUBLIC_URL +'/images/css.png'} alt='CSS'/>          
                    </div>
                </div>
                <div className='skills__card'>
                    <h2 className='skills__card__head'>Database & Cloud</h2>
                    <div className='skills__card__images'>
                        <img src={process.env.PUBLIC_URL +'/images/sql.png'} alt='SQL'/>
                        <img src={process.env.PUBLIC_URL +'/images/mysql.png'} alt='MySQL'/>
                        <img src={process.env.PUBLIC_URL +'/images/graphql.png'} alt='GraphQL'/>
                        <img src={process.env.PUBLIC_URL +'/images/aws.png'} alt='AWS'/>
                        <img src={process.env.PUBLIC_URL +'/images/firebase.png'} alt='Firebase'/>
                        <img src={process.env.PUBLIC_URL +'/images/mongodb.png'} alt='MongoDB'/>
                    </div>
                </div>
                <div className='skills__card'>
                    <h2 className='skills__card__head'>Web Development</h2>
                    <div className='skills__card__images'>
                        <img src={process.env.PUBLIC_URL +'/images/react.png'} alt='React'/>
                        <img src={process.env.PUBLIC_URL +'/images/bootstrap.png'} alt='BootStrap'/>
                        <img src={process.env.PUBLIC_URL +'/images/sass.png'} alt='SaSS'/>
                        <img src={process.env.PUBLIC_URL +'/images/express.png'} alt='ExpressJS'/>
                        <img src={process.env.PUBLIC_URL +'/images/nodejs.png'} alt='NodeJS'/>
                        <img src={process.env.PUBLIC_URL +'/images/redux.png'} alt='Redux'/>
                    </div>
                </div>
                <div className='skills__card'>
                    <h2 className='skills__card__head'>Testing & Deployment</h2>
                    <div className='skills__card__images'>
                        <img src={process.env.PUBLIC_URL +'/images/enzyme.jfif'} alt='Enzyme'/>
                        <img src={process.env.PUBLIC_URL +'/images/jasmine.png'} alt='Jasmine'/>
                        <img src={process.env.PUBLIC_URL +'/images/jest.png'} alt='JEST'/>
                        <img src={process.env.PUBLIC_URL +'/images/jira.png'} alt='JIRA'/>
                        <img src={process.env.PUBLIC_URL +'/images/git.png'} alt='GIT'/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
