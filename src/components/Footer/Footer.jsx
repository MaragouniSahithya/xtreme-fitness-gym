import { Link } from 'react-router-dom'
import { FaDumbbell, FaFacebook, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/membership', label: 'Membership' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
]

const programs = [
    'Strength Training', 'Personal Training', 'Cardio Training',
    'Weight Loss', 'Muscle Building',
]

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__grid">
                        {/* Brand */}
                        <div className="footer__brand">
                            <Link to="/" className="footer__logo">
                                <FaDumbbell className="footer__logo-icon" />
                                <span><span className="footer__logo-accent">Xtreme</span> Fitness Gym</span>
                            </Link>
                            <p className="footer__tagline">
                                Transform your body and mind at Xtreme Fitness Academy — elite training, expert coaches, and a community that drives you to be your absolute best.
                            </p>
                            <div className="footer__socials">
                                <a href="https://www.facebook.com/people/Xtreme-Fitness-Academy/100093280181407/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Facebook"><FaFacebook /></a>
                                <a href="https://www.instagram.com/xtreme_fitnessacademy" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram"><FaInstagram /></a>
                                <a href="https://www.youtube.com/@xtremefit2023" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="YouTube"><FaYoutube /></a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer__col">
                            <h4 className="footer__col-title">Quick Links</h4>
                            <ul>
                                {quickLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="footer__link">{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Programs */}
                        <div className="footer__col">
                            <h4 className="footer__col-title">Programs</h4>
                            <ul>
                                {programs.map((p) => (
                                    <li key={p}>
                                        <Link to="/programs" className="footer__link">{p}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer__col">
                            <h4 className="footer__col-title">Contact Info</h4>
                            <ul className="footer__contact-list">
                                <li>
                                    <FaPhone className="footer__contact-icon" />
                                    <span>+91 7982609569 / +91 9711403248</span>
                                </li>
                                <li>
                                    <FaEnvelope className="footer__contact-icon" />
                                    <span>info@xtremefitness.com</span>
                                </li>
                                <li>
                                    <FaMapMarkerAlt className="footer__contact-icon" />
                                    <span>B-4, Raghu Nagar, Pankha Road, Opp. Janak Cinema, New Delhi – 110045</span>
                                </li>
                            </ul>
                            <div className="footer__hours">
                                <h5>Opening Hours</h5>
                                <p>Open 24 Hours — Every Day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Xtreme Fitness Academy. All rights reserved.</p>
                    <p>Designed with 💪 for champions.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
