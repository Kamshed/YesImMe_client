/* ------------ main imports ------------ */
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import FormContext from './context/FormContext'


/* ------------ route imports ------------ */
import TheNavbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import DemoArea from './components/demo/DemoArea'
import Features from './components/features/Features'
import Contact from './components/contact/ContactForm'
import {ReactComponent as WaveBackground} from './assets/waveBackground.svg'


/* ------------ style ------------ */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


export default class App extends Component {
  state = {
    // state obj
  }

  componentDidMount () {
    // after mount
  }

  componentDidUpdate () {
    // after an update to state
  }

  render () {
    
    const contextValue = {
      // value for context
    }


    return (
      
      <FormContext.Provider value={ contextValue }>
        
        <Route
          id="navbar"
          path="/"
          component={ TheNavbar }
          />

        <div id="expanding-background" className="expandingBackground">
          <Route 
            id="parallax"
            path="/"
            component={ Home }
            />
          <Route
            id="demo"
            path="/"
            component={ DemoArea }
            />
          {/* <span id="expanding-background" className="expandingBackground"/> */}
        </div>
        
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

      </FormContext.Provider>
    )
  }
}
