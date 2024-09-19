import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! Thank you =)'); 
        window.location.href = '/';
    };

    return (
        <div className="contact-section">
            <h2 className='h2-section'>Contact Me.</h2>
            <div className="contact-info">
                <h3>Contact Information</h3>
                <p>
                    Thank you for taking time to reach out.
                </p>
                <p>
                    How can I help you? Or you can directly contact me below.
                </p>
                <p>Email: bssalunga@gmail.com</p>
                <p>Phone: +1 (647) 447 2319</p>
                <p><a href="https://linkedin.com/in/bianca-salunga" target="_blank" rel="noopener noreferrer">My LinkedIn</a></p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
                <div>
                    <label>Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;