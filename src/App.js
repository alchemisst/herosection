import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import 'animate.css';

function App() {
  return (
    <div>
    <NavBar /> 
    <Banner />
    <Skills/>
    <Projects />
    <Contact/>
    <Footer />
    </div>
  )
}

export default App