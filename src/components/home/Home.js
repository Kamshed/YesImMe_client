/* ---------- main imports ---------- */
import React, { useEffect, useState } from 'react'


/* ---------- other imports ---------- */
import TypeNames from '../../util/TypeNames'
import { ReactComponent as ArrowDown } from '../../assets/arrowDown.svg'
import smoothScroll from '../../util/smoothScroll'


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
        
        // typing effect
        const nameElement = document.querySelector('#home-header-name')
        const wait = nameElement.getAttribute('data-wait')
        
        if (!typeNames) {
            new TypeNames(nameElement, names, wait)
            typeNamesRunning(true)
        }

        // arrowDown event
        const arrowDownEl = document.querySelector("#arrow-down")
        arrowDownEl.addEventListener("click", arrowDown, { once: true })

    }, [names])


    function arrowDown() {
        const expandingBackground = document.querySelector("#expanding-background")
        expandingBackground.classList.add("expanded")
        smoothScroll('#demo-form', 1000, -450)
        const form = document.querySelector("#demo-form")
        setTimeout(() => {
            form.classList.add("showFaceVerify")
            document.querySelector("#arrow-down").classList.add("hidden")
        }, 750)

    }


    return (
        <section id="home-section">
            <div style={{
                position: "relative",
                height: "100%",
                width: "100%"
            }}>
            <header id="home-header" className="homeHeader">
                <h1>
                    YesIm
                    <span 
                        id="home-header-name" 
                        className="homeheaderName"
                        data-wait="2000"
                        data-names={ names }></span>
                </h1>
            </header>
            <ArrowDown 
                id="arrow-down" 
                className="arrowDown"
                //onClick={() => arrowDown()}
            />
            </div>
        </section>
    )
}