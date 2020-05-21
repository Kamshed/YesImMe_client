import React, { useContext, useEffect, useState } from 'react'


import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Context from '../../Context'
import DemoForm from './DemoForm'
import Results from './Results'

import "./Demo.css"


export default function Demo(props) {
    const [ loading, setLoading ] = useState(false)
    const [ results, setResults ] = useState(null)

    const context = useContext(Context)

    let demo = <DemoForm submitForm={ submitForm }/>
    //useEffect(() => {
    //    if (loading) 
    //})

    function submitForm(form) {
        setLoading(true)
        fetch('https://kamshed.herokuapp.com/api/upload', {
            method: 'POST',
            body: new FormData(form)
        })
        .then(res => {
            return res.json()
        })
        .then(info => {
            setResults(info)
        })
        .then(() => setLoading(false))
        .catch(err => console.error(err))
        
    }

    return (
        <>
            <Modal 
                className="modal-demo-form"
                show={ props.display } 
                onHide={ context.closeModal }
                aria-labelledby="demo-form"
                centered
                dialogClassName="modalForm"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Demo Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { 
                        function() {
                            if (results) return <Results res={ results }/>
                            else if (loading) return
                            else return demo
                        }()
                    }
                    { loading && <Spinner animation="border" />}
                </Modal.Body>
                {
                    results && (
                        <Modal.Footer>
                            <Button variant="secondary" onClick={ context.closeModal }>Close</Button>
                            <Button variant="primary" onClick={ () => setResults(null) }>Reset</Button>
                        </Modal.Footer>
                    )
                }
            </Modal>
        </>
    )
}