import React from "react";
import "./ContactForm.css";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="FormContainer">
      <h1>Contact.</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Name *</label>
          <input type="text" id="Name" name="Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email *</label>
          <input type="email" id="Email" name="Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="Phone">Phone *</label>
          <input type="tel" id="Phone" name="Phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="Message">Message *</label>
          <textarea
            name="Message"
            id="Message"
            required
          ></textarea>
        </div>
        <div className="Info-Container">
        <div className="MoreInfoRow">
          <span>
            <a href="#"></a>info@mysite.com
          </span>
          <FaFacebookF />
          <FaPinterestP />
          <FaInstagram />
        </div>
          <button className="MainButton" type="submit">
            {formStatus}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
