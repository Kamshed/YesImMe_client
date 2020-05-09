/* ---------- main imports ---------- */
import React, { useEffect, useState } from 'react'


/* ---------- other imports ---------- */
import TypeNames from '../../util/TypeNames'
import Button from 'react-bootstrap/Button'


/* ---------- styles ---------- */
import './Home.css'




export default function Home(props) {

    const [ heroHeight, setHeroHeight ] = useState("150%")
    const [ typeNames, typeNamesRunning ] = useState(false)


    /* ---------- variables ---------- */

    const names = [
        "Sandra",
        "Josh",
        "Me"
    ]


    /* ---------- run on mount ---------- */

    useEffect(() => { 
        
        
        const nameElement = document.querySelector('#home-header-name')
        const wait = nameElement.getAttribute('data-wait')

        // blotter effect
        const nameChange = new MutationObserver(() => {

        })
        nameChange.observe(nameElement, { childList: true })


        // typing effect
        if (!typeNames) {
            new TypeNames(nameElement, names, wait)
            typeNamesRunning(true)
        }

        // arrowDown event
        //const arrowDownEl = document.querySelector("#arrow-down")
        //arrowDownEl.addEventListener("click", arrowDown, { once: true })

    }, [names])

    

    /* function arrowDown() {
        const expandingBackground = document.querySelector("#expanding-background")
        expandingBackground.classList.add("expanded")
        smoothScroll('#demo-form', 1000, -450)
        const form = document.querySelector("#demo-form")
        setTimeout(() => {
            form.classList.add("showFaceVerify")
            document.querySelector("#arrow-down").classList.add("hidden")
        }, 750)

    } */


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
                <Button variant="outline-light" className="btn">try now</Button>
            </header>
            </div>
        </section>
    )
}