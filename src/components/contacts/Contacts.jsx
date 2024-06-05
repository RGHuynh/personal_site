import React from "react";
import { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import './contacts.css'
const Contacts = () => {
  const form = useRef();

  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__options">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>h1HkK@example.com</h5>
            <a href="rhuynh90@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <buttom type="submit" className="btn btn-primary">
            Send Message
          </buttom>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
