import React from "react";
import "../Contactform.css";

function handleSubmit() {
  console.log("Submitted");
}
// type="submit" is triggering the onSubmit event which is invoking the handleSubmit function
function ContactForm() {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <h1>Send us a message!</h1>
        <div className="input">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="name"
            required
          />
        </div>
        <div className="input">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="email"
            required
          />
        </div>
        <div className="input">
          <textarea
            placeholder="Your message"
            name="message"
            className="message"
            required
          />
        </div>
        <div className="input">
          <button className="input-btn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
