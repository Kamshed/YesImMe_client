import React from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

export default function renderFormat(phone) {
    if (phone) {
        return (
            <>
            <Form.Row className="phone">
                <Col>
                    <Form.Group controlId="from-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            placeholder="Name" 
                            name="name" 
                            required
                        />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row className="phone">
                <Col>
                    <Form.Group controlId="from-email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="user@email.com" 
                            name="email" 
                            required
                        />
                    </Form.Group>
                </Col>
            </Form.Row>
            </>
        )
    }
    else {
        return (
            <Form.Row className="tabletUp">
                <Col>
                    <Form.Group controlId="from-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            placeholder="Name" 
                            name="name" 
                            required
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="from-email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="user@email.com" 
                            name="email" 
                            required
                        />
                    </Form.Group>
                </Col>
            </Form.Row>
        )
    }
}