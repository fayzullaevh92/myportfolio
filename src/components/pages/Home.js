import '../../App.css';
import './styles/Home.css';


function Home () {
    return (
        <>
            <div className='home'>
                <div className='home__header'>
                    <h1>WELCOME TO ARCHIE'S WEBSITE</h1>
                </div>
                <div className='home__card'>
                    <h3 className='home__card__text'>Hi, I am Archie. I am a React Developer with 5 Years of Experience.
                    I Enjoy Building Fancy Components.</h3>
                    <div className='home__card__button'><a href="files/resume.pdf" download>HIRE ME!</a></div>
                </div>
            </div>
        </>
    )
}

export default Home;