import React, { useState } from "react";
import './contactform.css';
import axios from "axios";

const ContactForm = () => {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [review, setReview] = useState([]);



  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Message:", message);
    setName("");
    setEmail("");
    setMessage("");
  };

  const addMessage = () =>{
      axios.post("http://localhost:5000/api/messages",{name,email,message})
      .then((response) => {
        setReview([...review,response.data]);
        setName("");
        setEmail("");
        setMessage("");
      }).catch((error) => {console.error("Error adding note",error);});
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
          
        </div>
      </form>
      <button onClick={()=>addMessage()}>Submit</button>
    </div>
  );
};

export default ContactForm;