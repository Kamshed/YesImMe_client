import React, { useContext } from 'react'


import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Context from '../../Context'
import DemoForm from './DemoForm'


export default function Demo(props) {

    const context = useContext(Context)

    return (
        <>
            <Modal 
                show={ props.display } 
                onHide={ context.closeModal }
                aria-labelledby="demo-form"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Demo Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DemoForm/>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={ context.closeModal }>Close</Button>
                    <Button variant="primary" onClick={ context.showModal }>Save Changes</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}