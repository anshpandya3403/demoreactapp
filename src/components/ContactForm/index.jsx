import React, { useState } from "react";
import './contactform.css';

const ContactForm = () => {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Message:", message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-form">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
       
        <div>
          
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter message"
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;