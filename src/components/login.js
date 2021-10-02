import React from 'react';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap'

const login = ({ saveToken }) => {
    const handleLogin = async (e) => {
        e.preventDefault()
        const login = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        const response = await axios.post('/users/login', login)
        saveToken(response.data.token)
    }

    return (
        <>
            <p>login site</p>
            <Form style={{ textAlign: 'center' }} onSubmit={handleLogin}>
                <Row className="d-flex justify-content-center">
                    <Col xs="6" md="4" >
                        <Form.Label column sm="2">Username</Form.Label>
                        <Form.Control size="sm" type="text" name="username" placeholder="Username" />
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xs="6" md="4">
                        <Form.Label column sm="2">Password</Form.Label>
                        <Form.Control size="sm" type="text" name="password" placeholder="Password" />
                    </Col>
                </Row>
                <Button className="mt-2" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default login;