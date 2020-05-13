/* ------------ main imports ------------ */
import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'


/* ------------ route imports ------------ */
import TheNavbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Demo from './components/demo/Demo'
import Features from './components/features/Features'
import Contact from './components/contact/ContactForm'
import Footer from './components/footer/Footer'
import Content from './components/content/Content'
import videoBG from './media/videoBG.mp4'
import Context from './Context'



/* ------------ style ------------ */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


export default function App() {

  const [showDemo, setShowDemo] = useState(false);

  const closeModal = () => setShowDemo(false);
  const showModal = () => setShowDemo(true);

 
  useEffect(() => { 
    

  })

  const contextValue = { closeModal, showModal }

    return (
      <Context.Provider value={ contextValue }>
        <div className="dark">  
          <Route
            id="navbar"
            path="/"
            component={ TheNavbar }
          />
          <Demo
            display={ showDemo }
            path="/"
            component={ Demo }
          />
          <div id="videoBG" className='player-wrapper' style={{ pointerEvents: "none" }}>
            <video className="react-player" muted autoPlay loop>
                <source type="video/mp4" src={ videoBG }/>
            </video>
          </div>
          <Route
            id="home"
            path="/"
            component={ Home }
            />
          <Route
            id="content"
            path="/"
            component={ Content }
          />
          <Route
            id="features"
            path="/"
            component={ Features }
            />
          <Route
            id="contact"
            path="/"
            component={ Contact }
            />
          <Route
            id="footer"
            path="/"
            component={ Footer }
          />
        </div>
      </Context.Provider>
    )
}
