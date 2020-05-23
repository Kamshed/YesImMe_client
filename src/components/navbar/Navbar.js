import React, { useEffect, useContext, useState } from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Context from '../../Context'


import './Navbar.css'


export default function TheNavbar(){
  const context = useContext(Context)
  const [ menu, setMenu ] = useState(false) // control open/close

  useEffect(() => {
    const homeSection = document.querySelector('#videoBG')
    const featuresSection = document.querySelector('#featuresImage')
    const navbar = document.querySelector('#nav')

    function showNav() {
      const homeTop = homeSection.getClientRects()[0].top
      const homeBottom = homeSection.getClientRects()[0].bottom
      const featureTop = featuresSection.getClientRects()[0].top
      const featureBottom = featuresSection.getClientRects()[0].bottom
      
      if (homeTop <= 0 && homeBottom > 40) navbar.classList.add('clear')
      else if (featureTop <= 15 && featureBottom > 40) navbar.classList.add('clear')
      else navbar.classList.remove('clear')
    }

    document.addEventListener("scroll", () => showNav())

    

    /* -------------------- hamburger -------------------- */

    function navOpen() {
      if (!menu) {
        menuBtn.classList.add("open")
        navMenu.classList.add("open")
        setMenu(true)
      }
      else {
        menuBtn.classList.remove("open")
        navMenu.classList.remove("open")
        setMenu(false)
      }
    }

    const menuBtn = document.querySelector(".menu-btn")
    const navLink = document.querySelectorAll(".nav-link")
    const navMenu = document.querySelector("#nav")
    

    menuBtn.addEventListener("click", () => navOpen())
    navLink.forEach(link => link.addEventListener("click", () => navOpen()))

  })

    return (
        <>
          <Navbar id="nav" className="clear" style={{ position: "fixed", width: "100%", zIndex: "2000" }}>
            <Navbar.Brand href="#home-section">YesImMe</Navbar.Brand>
            <div className="menu-btn">
              <div className="menu-btn__burger"></div>
            </div>
            <Nav className="nav-links">
              <Nav.Link onClick={ context.showModal }><span>try now</span></Nav.Link>
              <Nav.Link href="#content-container"><span>why</span></Nav.Link>
              <Nav.Link href="#features-section"><span>features</span></Nav.Link>
              <Nav.Link href="#contact-section"><span>contact</span></Nav.Link>
            </Nav>
          </Navbar>
        </>
    )
}