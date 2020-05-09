import React, { useEffect } from 'react'


import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


import './Navbar.css'


export default function TheNavbar(){

  let options = {}

  useEffect(() => {
    const homeSection = document.querySelector('#videoBG')
    const featuresSection = document.querySelector('#featuresImage')
    const navbar = document.querySelector('#nav')

    //let atFeatures = { threshold: 0.1, root: featuresSection, rootMargin: "0% 0% 60% 0%" }

    //const showNav = new IntersectionObserver((entry, observer) => {
    //  console.log(entry)
    //  options.threshold = entry[0].target == homeSection ? 0.1 : 1
    //  if (entry[0].target === featuresSection) console.log(entry[0].target)
    //  if (entry[0].isIntersecting && !navbar.classList.contains('clear')) {
    //    navbar.classList.add('clear')
    //  }
    //  else if (!entry[0].isIntersecting) navbar.classList.remove('clear')
    //}, options )
  
    //showNav.observe(homeSection)
    //showNav.observe(featuresSection)
    
    //function hideNavOnScroll(e) {
    //  if (e.wheelDelta > 0 && !navbar.classList.contains("hide")) return
    //  else if (e.wheelDelta < 0 && navbar.classList.contains("hide")) return
    //  else if (e.wheelDelta > 0 && navbar.classList.contains("hide")) navbar.classList.remove("hide")
    //  else if (e.wheelDelta < 0 && !navbar.classList.contains("hide")) navbar.classList.add("hide")
    //}

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
  })

  

  

    return (
        <>
          <Navbar id="nav" className="clear" style={{ position: "fixed", width: "100%", zIndex: "2000" }}>
            <Navbar.Brand href="#home-section">YesImMe</Navbar.Brand>
            <Nav className="nav-links">
              <Nav.Link href="#demo-section"><span>try now</span></Nav.Link>
              <Nav.Link href="#content-container"><span>why</span></Nav.Link>
              <Nav.Link href="#features-section"><span>features</span></Nav.Link>
              <Nav.Link href="#contact-section"><span>contact</span></Nav.Link>
            </Nav>
          </Navbar>
        </>
    )
}