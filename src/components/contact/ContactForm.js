import React, { useEffect } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import './Contact.css'

export default function Contact() {

    function sendMail(e) {
        e.preventDefault()
        const f = document.querySelector('#contact-form')
        const inputs = f.querySelectorAll('.form-control')
        const urlencoded = new URLSearchParams()
        inputs.forEach(data => urlencoded.append(data.name, data.value))
       
        fetch('https://kamshedtest.herokuapp.com/api/send', {
            method: 'POST',
            body: urlencoded
        })
        .then(res => {
            return res.text()
        })
        .then(text => console.log(text))
        .catch(err => console.error(err))
    }
      

    return (
        <section id="contact-section" className="gradient">
            
            <div className="abs centered container noMargin wht">

                <Form 
                    id="contact-form" className="form-1 wht" 
                    onSubmit={ e => sendMail(e) }
                    >
                    <Col style={{padding: "0px"}}>
                    <header>
                        <h3>Contact</h3>
                    </header>
                    </Col>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="from-name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder="Erin" name="name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="from-email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Erin@email.com" name="email" />
                            </Form.Group>
                        </Col>
                    </Form.Row>


                    <Form.Row>
                        <Col>
                            <Form.Group controlId="from-company">
                                <Form.Label>Company</Form.Label>
                                <Form.Control placeholder="Erin Inc." name="company" />
                            </Form.Group>
                        </Col>
                    </Form.Row>

                    <Form.Group controlId="from-message" >
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="5" placeholder="Message here..." name="message" />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="outline-light" type="submit">Submit</Button>
                    </Form.Group>
                </Form>
                <div className="contactLink rel one textCentered">
                    <h6>Don't like forms? In a hurry?</h6>
                    <p>Contact our CEO directly at <strong><a style={{ color: "white" }} href="mailto:sandra@kamshed.com">sandra@kamshed.com</a></strong></p>
                </div>
            </div>
        </section>
    )
}