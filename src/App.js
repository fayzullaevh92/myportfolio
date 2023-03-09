import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import AboutMe from './components/pages/AboutMe';
import Experience from './components/pages/Experience';
import Skills from './components/pages/Skills';
import Resume from './components/pages/Resume';
import EmbedResume from './components/pages/EmbedResume';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={AboutMe}/>
        <Route path='/experience' exact component={Experience}/>
        <Route path='/skills' exact component={Skills}/>
        <Route path='/resume' exact component={EmbedResume}/>

      </Switch>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
