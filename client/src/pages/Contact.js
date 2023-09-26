import React, { useState, useEffect } from "react"
import "./contact.css"
import { TextField, Button, Alert } from "@mui/material";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
      // Trigger the fade-in effect after a delay (e.g., 1000ms or 1 second)
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 600);

      const timeoutId2 = setTimeout(() => {
        setIsVisible2(true);
      }, 200);
  
      // Clean up the timeout to prevent memory leaks
      return () => clearTimeout(timeoutId, timeoutId2);
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handleNameChange = (e) => {
        setName(e.target.value);
      };
    
      const handleMessageChange = (e) => {
        setMessage(e.target.value);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name, message }),
          });
    
          if (response.status === 201) {
            setSubmitted(true);
          } else {
            console.error('Error sending message');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return (
            <div className='container'>
                {submitted && (
                    <Alert
                        severity="success" 
                        onClose={() => setSubmitted(false)} 
                    >
                        Message sent successfully!
                    </Alert>
                    )}
                <div className={`frontdiv2 ${isVisible ? 'fade-in' : ''}`}>
                    <div className="message">
                        <p className="title">Send me a message!</p>
                        <form onSubmit={handleSubmit}>
                            <div className="top">
                                <div className="messagebox">
                                    <TextField
                                        className="textfield"
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleNameChange}
                                        value={name}
                                        required
                                    />
                                </div>
                                <div className="messagebox">
                                    <TextField
                                        className="textfield"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleEmailChange}
                                        value={email}
                                        required
                                    />
                                </div>
                            </div>
                            <TextField
                                className="textfield"
                                label="Message"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                                onChange={handleMessageChange}
                                value={message}
                                required
                            />
                            <Button type="submit" className='formbutton' >Submit</Button>
                        </form>
                    </div>
                </div>
                <div className={`backdiv2 ${isVisible2 ? 'fade-in' : ''}`} />
            </div>
    )
}