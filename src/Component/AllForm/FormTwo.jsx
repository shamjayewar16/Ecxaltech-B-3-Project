import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function FormTwo() {
    const [height, setHeight] = useState(" ");
    const [Weight, setWeight] = useState(" ");
    const [Chest, setChest] = useState(" ");
    const [Age, setAge] = useState(" ");
    const formTwoDispatch = useDispatch();
    const Navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        formTwoDispatch({
            type: "FORM_TWO_DATA",
            payload: { height, Weight, Chest, Age }
        });
        Navigate("/formthree")
    }
    return (
        <Form>
            <Form.Label>Height: cm</Form.Label>
            <Form.Control type="number" placeholder="height" onChange={(e) => setHeight(e.target.value)} />
            <Form.Label>Weight</Form.Label>
            <Form.Control type="number" placeholder="Weight" onChange={(e) => setWeight(e.target.value)} />
            <Form.Label>Chest: cm</Form.Label>
            <Form.Control type="number" placeholder="Chest" onChange={(e) => setChest(e.target.value)} />
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
            <Button
                variant="primary"
                onClick={handleClick}
                type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default FormTwo;