import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function FormThree() {
    const [priadd, setPriAdd] = useState(" ");
    const [secadd, setSecAdd] = useState(" ");
    const [city, setCity] = useState(" ");
    const [state, setState] = useState(" ");
    const formThreeDispatch = useDispatch();
    const Navigate = useNavigate();
    const handleClick = (e) => {
        formThreeDispatch({
            type: "FORM_THREE_DATA",
            payload: { priadd, secadd, city, state }
        });
        e.preventDefault();
        Navigate("/Summary")
    }
    return (
        <Form>
            <Form.Label>Primary Address</Form.Label>
            <Form.Control type="text" placeholder="Primary Address" onChange={(e) => setPriAdd(e.target.value)} />
            <Form.Label>Permenant Address</Form.Label>
            <Form.Control type="text" placeholder="Permenant Address" onChange={(e) => setSecAdd(e.target.value)} />
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" onChange={(e) => setState(e.target.value)} />
            <Button
                variant="primary"
                onClick={handleClick}
                type="submit">
                Next
            </Button>
        </Form>
    );
}

export default FormThree;