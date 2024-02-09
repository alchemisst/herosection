
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


import { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'

import './NavBar.css';


function NavBar() {

  const [activeLink,setActiveLink] = useState("home");
  const [scrolled,setScrolled] = useState(false);

  useEffect(() => {
    
    const onScroll = () => {
      if(window.scrollY>50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
  
    }
    window.addEventListener('scroll', onScroll);

    //removing event listner after the component gets removed from DOM
    return () => window.removeEventListener('scroll',onScroll);
  })
 
  const onUpdateLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg"  className={scrolled ? 'scrolled' : '' }>
      <Container>
        <Navbar.Brand href="#home" className='navbar-logo'>
        <img src={logo} alt="logoIMG" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } onClick={()=>onUpdateLink('home')}  >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateLink('skills')} >Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateLink('projects')} >Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon" >

              <a href="#"> <img src={navIcon1} alt="Social Icon" /></a>
              <a href="#"> <img src={navIcon2} alt="Social Icon" /></a>
              <a href="#"> <img src={navIcon3}  alt="Social Icon" /></a>
              <button className='vvd' onClick={()=>console.log("button clicked")}> <span>Let's Know each other</span> </button>
            
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;