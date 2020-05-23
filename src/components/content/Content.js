import React from 'react'

import './Content.css'

export default function Content() {
    return (
        <section id="content-section" className="contentSection">
            <div id="content-container" className="container">
                <article className="contentWrapper contentOneWrapper container flex">
                    <div className="imageContainer rel one">
                        <div className="fake-img"/>
                    </div>
                    <div className="content-info rel one">
                        <div className="content-wrapper">
                            <h2 className="contentHeader thin">
                                You've create a website or app
                            </h2>
                            <p className="contentSubHeader">
                                to connect people - for socializing,
                                dating, or business. How do you run 
                                it without the usual headaches that 
                                cause drama and controversy?
                            </p>
                        </div>
                    </div>
                </article>
                <div className="socialMediaWrapper">
                    <img alt="yelp icon" className="socialMediaIcon yelp" src="https://img.icons8.com/color/144/000000/yelp.png"/>
                    <img alt="facebook icon" className="socialMediaIcon facebook" src="https://img.icons8.com/color/144/000000/facebook-new.png"/>
                    <img alt="snapchat icon" className="socialMediaIcon snapchat" src="https://img.icons8.com/plasticine/200/000000/snapchat.png"/>
                    <img alt="linkedin icon" className="socialMediaIcon linkedin" src="https://img.icons8.com/color/144/000000/linkedin.png"/>
                    <img alt="youtube icon" className="socialMediaIcon youtube" src="https://img.icons8.com/color/144/000000/youtube-play.png"/>
                    <img alt="wechat icon" className="socialMediaIcon wechat" src="https://img.icons8.com/color/128/000000/weixing.png"/>
                </div>
                <article className="contentWrapper contentTwoWrapper flex">
                    <div className="content-info rel one">
                        <div className="content-wrapper flex">
                            <div className="contentHeader-wrapper">
                                <h2 className="contentHeader bold">your solution is</h2>
                                <h2 className="contentHeader bold big">“Yes I’m Me!”</h2>
                            </div>
                            <p className="contentSubHeader">
                                Even the most popular and sophisticated 
                                social media apps and sites suffer from 
                                fake accounts and inappropriate behavior. 
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}