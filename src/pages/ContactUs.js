import React from 'react';
import './ContactUs.css'; // Ensure you add styles for this page

const ContactUs = () => {
    return (
        <div className="contact-us-page">
            <h2>Contact Us</h2>
            <p>Feel free to reach out to us with any questions or concerns.</p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message" required />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
