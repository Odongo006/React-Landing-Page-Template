import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const initialState = { name: "", email: "", message: "" };

export const Contact = (props) => {
  const [formData, setFormData] = useState(initialState);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const clearState = () => setFormData(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pbxyn4b", // Your service ID
        "template_k6spbpg", // Your template ID
        formRef.current,    // The form reference
        "rmmzkdNsolMwa4xGG" // Your public key
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          clearState();
        },
        (error) => {
          console.error("Error sending message:", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="col-md-8">
          <div className="row">
            <div className="section-title">
              <h2>Get In Touch</h2>
              <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-custom btn-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* Contact info section here */}
      </div>
    </div>
  );
};
