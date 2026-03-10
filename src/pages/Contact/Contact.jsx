import { useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaArrowRight, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import './Contact.css'

const contactInfo = [
    { icon: FaPhone, title: 'Phone', lines: ['+91 7982609569', '+91 9711403248'], color: '#e63946' },
    { icon: FaEnvelope, title: 'Email', lines: ['info@xtremefitness.com', 'xtremefitness@gmail.com'], color: '#e63946' },
    { icon: FaMapMarkerAlt, title: 'Address', lines: ['B-4, Raghu Nagar, Pankha Road', 'Opp. Janak Cinema, New Delhi – 110045'], color: '#e63946' },
]

const hours = [
    { day: 'Every Day', time: 'Open 24 Hours' },
]

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    }

    return (
        <div className="contact-page">
            <section className="page-hero" style={{ backgroundImage: "url('/gallery10.jpg')" }}>
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <span className="section-tag">Get In Touch</span>
                    <h1 className="page-hero__title">Contact <span>Us</span></h1>
                    <p className="page-hero__subtitle">Ready to start your fitness journey? Our team is here to help you take the first step.</p>
                </div>
            </section>

            <section className="contact-info-section">
                <div className="container">
                    <div className="contact-info-cards">
                        {contactInfo.map((info) => {
                            const Icon = info.icon
                            return (
                                <div key={info.title} className="contact-info-card">
                                    <div className="contact-info-card__icon-wrap">
                                        <Icon />
                                    </div>
                                    <h3 className="contact-info-card__title">{info.title}</h3>
                                    {info.lines.map((line) => (
                                        <p key={line} className="contact-info-card__line">{line}</p>
                                    ))}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="contact-main">
                <div className="container">
                    <div className="contact-grid">
                        {/* FORM */}
                        <div className="contact-form-wrap">
                            <div className="section-header" style={{ textAlign: 'left', marginBottom: 36 }}>
                                <span className="section-tag">Send a Message</span>
                                <h2 className="section-title" style={{ textAlign: 'left', margin: '12px 0' }}>
                                    We'd Love to <span>Hear</span> From You
                                </h2>
                                <div className="divider" style={{ margin: '0' }} />
                            </div>

                            {submitted && (
                                <div className="contact-success">
                                    ✓ Message sent! We'll get back to you within 24 hours.
                                </div>
                            )}

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-form__row">
                                    <div className="contact-form__group">
                                        <label htmlFor="contact-name">Full Name *</label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            name="name"
                                            placeholder="John Smith"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="contact-form__group">
                                        <label htmlFor="contact-email">Email Address *</label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            name="email"
                                            placeholder="john@email.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="contact-form__row">
                                    <div className="contact-form__group">
                                        <label htmlFor="contact-phone">Phone Number</label>
                                        <input
                                            id="contact-phone"
                                            type="tel"
                                            name="phone"
                                            placeholder="+1 (555) 000-0000"
                                            value={form.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="contact-form__group">
                                        <label htmlFor="contact-subject">Subject *</label>
                                        <select
                                            id="contact-subject"
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select a topic</option>
                                            <option value="membership">Membership Inquiry</option>
                                            <option value="pt">Personal Training</option>
                                            <option value="programs">Programs Info</option>
                                            <option value="visit">Schedule a Visit</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="contact-form__group">
                                    <label htmlFor="contact-message">Message *</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={6}
                                        placeholder="Tell us about your fitness goals or ask us anything..."
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    Send Message <FaArrowRight />
                                </button>
                            </form>
                        </div>

                        {/* SIDEBAR */}
                        <div className="contact-sidebar">
                            {/* Hours */}
                            <div className="contact-hours-card">
                                <h3 className="contact-hours-card__title">
                                    <FaClock className="contact-hours-card__icon" />
                                    Opening Hours
                                </h3>
                                <ul className="contact-hours-list">
                                    {hours.map((h) => (
                                        <li key={h.day} className="contact-hours-item">
                                            <span className="contact-hours-item__day">{h.day}</span>
                                            <span className="contact-hours-item__time">{h.time}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Social */}
                            <div className="contact-social-card">
                                <h3 className="contact-social-card__title">Follow Us</h3>
                                <p className="contact-social-card__desc">Stay connected for daily workout tips, motivation, and community updates.</p>
                                <div className="contact-social-links">
                                    <a href="https://www.facebook.com/people/Xtreme-Fitness-Academy/100093280181407/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Facebook"><FaFacebook /><span>Facebook</span></a>
                                    <a href="https://www.instagram.com/xtreme_fitnessacademy" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Instagram"><FaInstagram /><span>Instagram</span></a>
                                    <a href="https://www.youtube.com/@xtremefit2023" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="YouTube"><FaYoutube /><span>YouTube</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="contact-map">
                <iframe
                    title="Xtreme Fitness Academy Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18042.59432881488!2d77.07046346975793!3d28.618420497548176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1be8109b5295%3A0xa746df154416076a!2sXtreme%20Fitness%20Gym%20%26%20Academy!5e0!3m2!1sen!2sin!4v1773067316911!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </div>
    )
}

export default Contact
