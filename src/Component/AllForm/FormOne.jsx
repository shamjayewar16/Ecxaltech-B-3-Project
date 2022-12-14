import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function FormOne() {
    const [fname, setFname] = useState(" ");
    const [mname, setMname] = useState(" ");
    const [lname, setLname] = useState(" ");
    const [fullname, setFullName] = useState(" ");
    const formOneDispatch = useDispatch();
    const Navigate = useNavigate();
    const handleDispatchAndRoute = (e) => {
        e.preventDefault();
        formOneDispatch({
            type: "FORM_ONE_DATA",
            payload: { fname, mname, lname, fullname }
        });
        Navigate("/formtwo");
    }
    return (

        <Form>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" onChange={(e) => setFname(e.target.value)} />
            <Form.Label>Second Name</Form.Label>
            <Form.Control type="text" placeholder="Second Name" onChange={(e) => setMname(e.target.value)} />
            <Form.Label>Third Name</Form.Label>
            <Form.Control type="text" placeholder="Third Name" onChange={(e) => setLname(e.target.value)} />
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} />
            <Button
                variant="primary"
                onClick={handleDispatchAndRoute}
                type="submit">
                Submit
            </Button>
        </Form>


    );
}

export default FormOne;