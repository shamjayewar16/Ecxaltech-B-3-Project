import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="container">
            <h1>Footer</h1>
            <div className="subcontainer">
                <div className="coloum">
                    <u>Courses</u>
                    <h2>HTML</h2>
                    <h2>CSS</h2>
                    <h2>JavaScript</h2>
                    <h2>React</h2>
                </div>
                <div className="coloum">
                    <u>Mentor</u>
                    <h2>HTML</h2>
                    <h2>CSS</h2>
                    <h2>JavaScript</h2>
                    <h2>React</h2>
                </div>
                <div className="coloum">
                    <u>Important Link</u>
                    <h2>Insta</h2>
                    <h2>Facebook</h2>
                    <h2>Twitter</h2>
                    <h2>Whatsup</h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;