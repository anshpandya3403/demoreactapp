import React from "react";
import NavBar from "../../components/Navbar";
import ContactForm from "../../components/ContactForm";
import '../../App.css';


const Contact = () =>{
    return(
    <div className="main_container">
        <NavBar/>
        <h1>Contact Page</h1>
        <ContactForm/>
    </div>
);
}

export default Contact;