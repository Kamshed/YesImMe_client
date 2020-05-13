/* ---------- main imports ---------- */
import React, { useEffect, useState, useContext } from 'react'


/* ---------- other imports ---------- */
import TypeNames from '../../util/TypeNames'
import Context from '../../Context'
import Button from 'react-bootstrap/Button'


/* ---------- styles ---------- */
import './Home.css'


export default function Home() {

    const [ typeNames, typeNamesRunning ] = useState(false)
    const context = useContext(Context)


    /* ---------- variables ---------- */

    const names = [ "Sandra", "Josh", "Me" ]


    useEffect(() => { 

        const nameElement = document.querySelector('#home-header-name')
        const wait = nameElement.getAttribute('data-wait')

        // blotter effect
        const nameChange = new MutationObserver(() => {})
        nameChange.observe(nameElement, { childList: true })

        // typing effect
        if (!typeNames) {
            new TypeNames(nameElement, names, wait)
            typeNamesRunning(true)
        }

    }, [names])


    return (
        <section id="home-section">
            <div className="headerWrapper">
            <header id="home-header" className="abs one centered textCentered form-1 wht">
                <h1>
                    Yes I'm
                    <span 
                        id="home-header-name" 
                        className="homeheaderName"
                        data-wait="2000"
                        data-names={ names }></span>
                </h1>
                <p className="subheader">
                    Your solution to: Spam, Harassment, 
                    Discrimination, Catfishing and Fake 
                    Accounts on your site and apps
                </p>
                <Button variant="outline-light" className="btn" onClick={ context.showModal }>try now</Button>
            </header>
            </div>
        </section>
    )
}