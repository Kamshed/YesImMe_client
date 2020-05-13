/* ------------ main imports ------------ */
import React from 'react'


/* ------------ other imports ------------ */
import { SocialIcon } from 'react-social-icons'


/* ------------ style ------------ */
import './Footer.css'


export default function Footer() {
    return (
        <footer className="footerSection wht bgDark">
            <div className="footerContainer">
                <section className="socialMediaConatiner">
                    <SocialIcon style={{ height: 40, width: 40 }} bgColor="white" network="facebook" />
                    <SocialIcon style={{ height: 40, width: 40 }} bgColor="white" network="linkedin" />
                    <SocialIcon style={{ height: 40, width: 40 }} bgColor="white" network="youtube" />
                    <SocialIcon style={{ height: 40, width: 40 }} bgColor="white" network="email" />
                </section>
                <ul className="footerLinks">
                    <li className="noStyle"><a>Sales</a></li>
                    <span className="spacing"></span>
                    <li><a>Support</a></li>
                    <span className="spacing"></span>
                    <li><a>Press</a></li>
                    <li className="noStyle"><a>Terms of Use</a></li>
                    <span className="spacing"></span>
                    <li><a>Privacy Policy</a></li>
                </ul>
                <section className="footerCopyright">
                    <p>Copyright ©2020 Kamshed, Inc.</p>
                    <p>Icons by <a style={{ color: "white" }} target="blank" href="https://icons8.com/">https://icons8.com/</a></p>
                </section>
            </div>
        </footer>
    )
}