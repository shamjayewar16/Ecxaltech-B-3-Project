import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Summary = () => {
    const selector = useSelector((state) => state);
    const Navigate = useNavigate();
    const handleClick = () => {
        console.log(selector.FormOneReducer[0].fname);
        Navigate("/");
    };
    return (
        <div>
            <h1>Summary</h1>
            {selector.FormOneReducer.map((item) => {
                return (
                    <div>
                        <p>First Name : {item.fname}</p>
                        <p>Middle Name : {item.mname}</p>
                        <p>Last Name : {item.lname}</p>
                        <p>Full Name : {item.fullName}</p>
                    </div>
                );
            })}
            {selector.FormTwoReducer.map((item) => {
                return (
                    <div>
                        <p>Height : {item.height}Cm</p>
                        <p>Weight : {item.Weight}Kg</p>
                        <p>Chest : {item.Chest}Cm</p>
                        <p>Age : {item.Age}</p>
                    </div>
                );
            })}
            {selector.FormThreeReducer.map((item) => {
                return (
                    <div>
                        <p>Primary Address : {item.priadd}</p>
                        <p>Permanant Address : {item.secadd}</p>
                        <p>City : {item.city}</p>
                        <p>State : {item.state}</p>
                    </div>
                );
            })}
            <button onClick={handleClick}>GO To First Page</button>
        </div>
    )
}

export default Summary;