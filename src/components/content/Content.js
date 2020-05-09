import React from 'react'


import './Content.css'

export default function Content() {
    return (
        <section id="content-section" className="contentSection">
            <div id="content-container" className="container">
                <div className="contentWrapper contentHeaderWrapper">
                    <h2 className="contentHeader">
                        You've create a website or app
                    </h2>
                    <h3 className="contentSubHeader">
                        to connect people - for socializing,
                        dating, or business.
                    </h3>
                </div>
                <article className="contentWrapper contentOneWrapper flex">
                    <div className="imageContainer rel one">
                        <img className="abs one"/>
                        <img className="abs two"/>
                        <img className="abs three"/>
                        <img className="abs four"/>
                    </div>
                    <div className="content">
                        <p>
                            <strong>How do you run it without</strong>
                            <br/>
                            <span>
                                the usual 
                                headaches that cause drama and 
                                controversy?
                            </span>
                        </p>
                    </div>
                </article>
                <article className="contentWrapper contentTwoWrapper">
                    <div className="content">
                        <p>
                            <strong>your solution is “Yes I’m Me!”</strong>
                            <br/>
                            <span>
                                Even the most popular and sophisticated 
                                social media apps and sites suffer from 
                                fake accounts and inappropriate behavior. 
                            </span>
                        </p>
                    </div>
                    <div className="content socialMediaContent">
                        <div className="socialMediaInfo">
                            <p className="quote">info here...</p>
                        </div>
                        <div className="socialMediaWrapper">
                            <img alt="yelp icon" className="socialMediaIcon yelp" src="https://img.icons8.com/color/144/000000/yelp.png"/>
                            <img alt="facebook icon" className="socialMediaIcon facebook" src="https://img.icons8.com/color/144/000000/facebook-new.png"/>
                            <img alt="snapchat icon" className="socialMediaIcon snapchat" src="https://img.icons8.com/plasticine/200/000000/snapchat.png"/>
                            <img alt="linkedin icon" className="socialMediaIcon linkedin" src="https://img.icons8.com/color/144/000000/linkedin.png"/>
                            <img alt="youtube icon" className="socialMediaIcon youtube" src="https://img.icons8.com/color/144/000000/youtube-play.png"/>
                            <img alt="wechat icon" className="socialMediaIcon wechat" src="https://img.icons8.com/color/128/000000/weixing.png"/>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}