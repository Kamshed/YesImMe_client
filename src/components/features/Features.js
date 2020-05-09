/* ------------ main imports ------------ */
import React, { useEffect } from 'react'
import Header from '../howItWorks/header/HowItWorksHeader'


/* ------------ other imports ------------ */
import Compare from './icons/compareIcon'
import Verify from './icons/verifyIcon'
import Safe from './icons/safeIcon'


/* ------------ styles ------------ */
import './Features.css'

const features = [
    {
        src: <Compare />,
        title: "Compare",
        info:   `Facial recognition is used to compare 
                user profile picture against drivers 
                license.`
    },
    {
        src:    <Verify />,
        title: "Verify",
        info:   `Scan the users drivers license and 
                verify it’s accuracy against 3rd party 
                records.`
    },
    {
        src: <Safe />,
        title: "Safe",
        info:   `User information is verified, but not 
                stored. No issues with hacking - the 
                info isn't there!`
    }
]


export default function Features() {

    //const [ feature, setFeature ] = useState(features[0])

    
    
    /* ---------- intersection observer ---------- */
    useEffect(() => {
        

        /* ---------- observer variables and options ---------- */

        const articlesToAnimate = document.querySelectorAll(".featureArticle")  // to be animated
        const aritcleOptions = { threshold: 0.3 }                               // options


        /* ---------- observers ---------- */                                                
        
        const articleObserver = new IntersectionObserver((entry, observer) => {  // the observer
            for(let i = 0; i < entry.length; ++i) {                              // loop through all observed
                if (!entry[i].isIntersecting) return
                entry[i].target.classList.add("show")                            // will trigger fade animation   
            }
        }, aritcleOptions)






        /* ---------- observer triggers ---------- */ 

        for(let i = 0; i < articlesToAnimate.length; ++i) {
            articleObserver.observe(articlesToAnimate[i])
        }

        
    })

    /* function displayFeature(e) {
        setFeature(features[e.currentTarget.dataset.index])
    } */


    return (
        <section id="features-section">
            <div className="imageContainer">
                <h2 className="abs centered wht howItWorks">How it works</h2>
                <img id="featuresImage" className="abs -one featureImage faceRecognition"/>
            </div>
                {/* <Header /> */}
                <div className="container content">
                    <h4 style={{ lineHeight: "3rem"}}>Using Yes I'm Me</h4>
                    <p> 
                        The “Yes I’m Me” SDK or API can easily be added into platform in as little as 5 lines 
                        of code. It uses facial ID recognition to compare your users against their IDs, to 
                        immediately verify that they are who they say they are. This, combined with our 
                        “Yes I’m Me” behavior and use policy, is the key to keeping your site free of these 
                        controversial and time consuming issues.
                    </p>
                </div>
                <div className="container flex">
                
                    {features.map((feature, i) => (

                        <div key={i} data-index={i} /* onClick={e => displayFeature(e)} */ className="featureArticle">
                            <div className="featureImgContainer">
                                {feature.src}
                            </div>
                            <div id="feature-info" className="featureInfoContainer">
                                <div className="featureTitleContainer">
                                  <h4 className="featureInfoTitle">{feature.title}</h4>
                                </div>
                                <article>
                                    <p className="featureInfoText">
                                        {feature.info}
                                    </p>
                                </article>
                            </div>
                            <div className="featureShadow"></div>
                        </div>
                        ))
                    }
                </div>
        </section>
    )
}