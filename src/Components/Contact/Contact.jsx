import './Contact.css'
import { useState } from 'react'

import githubIcon from '../../assets/icons8-github-64.png'
import gmailIcon from '../../assets/icons8-gmail-48.png'
import linkedinIcon from '../../assets/icons8-linked-in-64.png'
import xIcon from '../../assets/icons8-x-64.png'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/yuginda',
            icon: githubIcon
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/yuginda-ranawaka-978786328/',
            icon: linkedinIcon
        },
        {
            name: 'Email',
            url: 'mailto:yugindaranawaka@gmail.com',
            icon: gmailIcon
        },
        {
            name: 'X',
            url: 'https://x.com/y9741574845159?s=11',
            icon: xIcon
        }
    ]

    return (
        <div className='contact' id='contact'>
            <div className='contact-container'>
                <h2>Get In Touch</h2>
                <p className='contact-intro'>
                    I'm currently seeking opportunities to apply and grow my skills in a real-world setting. 
                    If you think I might be a good fit for your team or project, I’d be grateful to connect.
                </p>

                <div className='contact-content'>
                    <div className='contact-form-section'>
                        <h3>Send me a message</h3>
                        <form className='contact-form' onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Your Name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Your Email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='subject'
                                    placeholder='Subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <textarea
                                    name='message'
                                    placeholder='Your Message'
                                    rows='6'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type='submit' className='submit-btn'>
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className='contact-info-section'>
                        <h3>Connect with me</h3>
                        <div className='social-links'>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className='social-link'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        src={social.icon}
                                        alt={`${social.name} icon`}
                                        className='social-icon-img'
                                    />
                                    <span className='social-name'>{social.name}</span>
                                </a>
                            ))}
                        </div>

                        <div className='contact-details'>
                            <div className='contact-item'>
                                <span className='contact-icon'>📍</span>
                                <span>Vancouver, BC, Canada</span>
                            </div>
                            <div className='contact-item'>
                                <span className='contact-icon'>🎓</span>
                                <span>Simon Fraser University</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact