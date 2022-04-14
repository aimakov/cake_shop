import React from "react";
import GoogleMap from "./GoogleMap";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="ContactContainer">
            <div className="ContactHeadline">
                <h4>Get in Touch</h4>
                <p>For all inquiries, please leave a message using the form below.</p>
            </div>
            <div className="ContactBody">
                <form className="ContactForm">
                    <div className="FirstLine">
                        <div>
                            <label for="FirstName">
                                First Name<sup>*</sup>
                            </label>
                            <input id="FirstName" type="text" name="FirstName" placeholder="Nurbolat" className="ContactInput" />
                        </div>
                        <div>
                            <label for="SecondName">
                                Second Name<sup>*</sup>
                            </label>
                            <input id="SecondName" type="text" name="SecondName" placeholder="Aimakov" className="ContactInput" />
                        </div>
                    </div>
                    <div className="SecondLine">
                        <label for="ContactMessage">
                            Message<sup>*</sup>
                        </label>
                        <textarea placeholder="Follow me @aimakov.dev on Instagram 😉" id="ContactMessage" className="ContactInput"></textarea>
                    </div>
                    <button type="button" className="browser-default SubmitButton">
                        Submit
                    </button>
                </form>
                <GoogleMap />
            </div>
        </div>
    );
};

export default Contact;
