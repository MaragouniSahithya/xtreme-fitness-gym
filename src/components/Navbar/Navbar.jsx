import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaDumbbell, FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/membership', label: 'Membership' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const closeMenu = () => setMenuOpen(false)

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container">
                <Link to="/" className="navbar__logo" onClick={closeMenu}>
                    <FaDumbbell className="navbar__logo-icon" />
                    <span><span className="navbar__logo-accent">Xtreme</span> Fitness Gym</span>
                </Link>

                <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                                }
                                onClick={closeMenu}
                                end={link.path === '/'}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <Link to="/membership" className="navbar__cta" onClick={closeMenu}>
                            Join Now
                        </Link>
                    </li>
                </ul>

                <button
                    className="navbar__burger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {menuOpen && (
                <div className="navbar__overlay" onClick={closeMenu} />
            )}
        </nav>
    )
}

export default Navbar
