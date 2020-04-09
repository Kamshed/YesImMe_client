import React, { useEffect } from 'react'


import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


import './Navbar.css'


export default function TheNavbar(){

  useEffect(() => {
    const homeSection = document.querySelector('#home-section')
    const navbar = document.querySelector('#nav')
    const options = { threshold: 0 }
    const showNav = new IntersectionObserver((entry, observer) => {
      if (entry[0].isIntersecting && !navbar.classList.contains('hidden')) navbar.classList.add('hidden')
      else if (!entry[0].isIntersecting) navbar.classList.remove('hidden')
    }, options)
  
    showNav.observe(homeSection)
  })



    return (
        <>
          <Navbar id="nav" className="hidden" style={{ position: "fixed", width: "100%", zIndex: "2000" }} bg="white">
            <Navbar.Brand href="#home-section">Navbar</Navbar.Brand>
            <Nav className="nav-links">
              <Nav.Link href="#demo-section"><b>Demo</b></Nav.Link>
              <Nav.Link href="#features-section"><b>Features</b></Nav.Link>
              <Nav.Link href="#contact-form"><b>Contact</b></Nav.Link>
            </Nav>
          </Navbar>
        </>
    )
}