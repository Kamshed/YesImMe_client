import React, { useEffect, useState } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import renderFormat from './renderFormat'
import Success from './Success'
import Failure from './Failure'

import './Contact.css'


export default function Contact() {
    const [ phone, setPhone ] = useState(false)
    const [ success, setSuccess ] = useState(null)
    const [ show, setShow ] = useState(false)
    //let elShowing;

    function hideModal(arr) {
        arr.forEach(el => el.classList.remove("show"))
    }


    function sendMail(e) {
        e.preventDefault()
        const f = e.currentTarget

        const inputs = f.querySelectorAll('.form-control')
        const urlencoded = new URLSearchParams()
        inputs.forEach(data => {
            urlencoded.append(data.name, data.value)
            data.value = ""
        })
       
        fetch('https://kamshed.herokuapp.com/api/send', {
            method: 'POST',
            body: urlencoded
        })
        .then(res => {
            return res.text()
        })
        .then(resp => {setSuccess(true)})
        .catch(err => setSuccess(false))
        .finally(() => setShow(true))
    }
    
    function SubmissionResponse(props) {
        if (success == null) return <></>
        else if (success == false) {
            return (
                <Modal
                    {...props}
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Form Error
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ margin: "auto" }}>
                        <Failure/>
                    </Modal.Body>
                </Modal>
            )
        } 
        else {
            return (
                <Modal
                    {...props}
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Contact Form Submitted!
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ margin: "auto" }}>
                        <Success/>
                    </Modal.Body>
                </Modal>
            )
        }
    }
    

    window.addEventListener("resize", () => {
        if (window.innerWidth < 426) setPhone(true)
        else setPhone(false)
    })


    return (
        <section id="contact-section" className="gradient">
            
            <div className="abs centered container noMargin wht">

                <SubmissionResponse
                    show={ success || !success }
                    onEntered={() => setTimeout(() => hideModal(document.querySelectorAll(".show")), 1200)}
                    onHide={() => setSuccess(null)}
                />

                <Form 
                    id="contact-form" className="form-1 wht" 
                    onSubmit={ sendMail }
                    >
                    <Col style={{padding: "0px"}}>
                    <header>
                        <h3>Contact</h3>
                    </header>
                    </Col>
                    
                    {   // resizing for mobile or large screens
                        renderFormat(phone) 
                    }

                    <Form.Row>
                        <Col>
                            <Form.Group controlId="from-company">
                                <Form.Label>Company</Form.Label>
                                <Form.Control 
                                    placeholder="example Inc." 
                                    name="company" 
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Form.Row>

                    <Form.Group controlId="from-message" >
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                            as="textarea" rows="5" 
                            placeholder="Message here..." 
                            name="message"
                        />
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