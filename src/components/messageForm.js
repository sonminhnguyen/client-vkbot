import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap'
import { getGroups } from './data';

const MessageForm = () => {
    const [groups, setGroups] = useState([])
    const [group_id, setGroup_Id] = useState('1')
    const handleSelectGroupId = (e) => {
        setGroup_Id(e.target.value)
    }
    const handleSendMessage = async (e) => {
        e.preventDefault();
        const group = {
            title: e.target.title.value,
            group_id: group_id,
            message: e.target.message.value,
        }
        await axios.post('/users/sendMessage', group)
        e.target.title.value = ''
        e.target.message.value = ''
    }

    useEffect(() => {
        getGroups().then(data => setGroups(data))
    }, [])

    return (
        <>
            <p>message site</p>
            <Form onSubmit={handleSendMessage}>
                <Row className="d-flex justify-content-center">
                    <Col xs="6" md="4" >
                        <Form.Label column sm="5">Title</Form.Label>
                        <Form.Control size="sm" type="text" name="title" placeholder="Enter title" autoComplete="off"/>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xs="6" md="4" >
                        <Form.Label>Group</Form.Label>
                        <Form.Control
                            as="select"
                            defaultValue={group_id}
                            onChange={handleSelectGroupId}
                        >
                            {groups.map((group) => <option key={group.id_group} value={group.id_group}>{group.group_name}</option>)}
                        </Form.Control>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xs="6" md="4">
                        <Form.Label column sm="5">Message</Form.Label>
                        <Form.Control size="sm" type="text" name="message" placeholder="message" autoComplete="off"/>
                    </Col>
                </Row>
                <Button className="mt-2" variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </>
    )
}

export default MessageForm;