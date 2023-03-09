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
                        <img src='/images/javascript.png' alt='JavaScript'/>
                        <img src='/images/typescript.png' alt='TypeScript'/>
                        <img src='/images/cpp.png' alt='C++'/>
                        <img src='/images/java.jpg' alt='Java'/>
                        <img src='/images/html.png' alt='HTML'/>
                        <img src='/images/css.png' alt='CSS'/>          
                    </div>
                </div>
                <div className='skills__card'>
                    <h2 className='skills__card__head'>Database & Cloud</h2>
                    <div className='skills__card__images'>
                        <img src='/images/sql.png' alt='SQL'/>
                        <img src='/images/mysql.png' alt='MySQL'/>
                        <img src='/images/graphql.png' alt='GraphQL'/>
                        <img src='/images/aws.png' alt='AWS'/>
                        <img src='/images/firebase.png' alt='Firebase'/>
                        <img src='/images/mongodb.png' alt='MongoDB'/>
                    </div>
                </div>
                <div className='skills__card'>
                    <h2 className='skills__card__head'>Web Development</h2>
                    <div className='skills__card__images'>
                        <img src='/images/react.png' alt='React'/>
                        <img src='/images/bootstrap.png' alt='BootStrap'/>
                        <img src='/images/sass.png' alt='SaSS'/>
                        <img src='/images/express.png' alt='ExpressJS'/>
                        <img src='/images/nodejs.png' alt='NodeJS'/>
                        <img src='/images/redux.png' alt='Redux'/>
                    </div>
                </div>
                <div className='skills__card'>
                    <h2 className='skills__card__head'>Testing & Deployment</h2>
                    <div className='skills__card__images'>
                        <img src='/images/enzyme.jfif' alt='Enzyme'/>
                        <img src='/images/jasmine.png' alt='Jasmine'/>
                        <img src='/images/jest.png' alt='JEST'/>
                        <img src='/images/jira.png' alt='JIRA'/>
                        <img src='/images/git.png' alt='GIT'/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
