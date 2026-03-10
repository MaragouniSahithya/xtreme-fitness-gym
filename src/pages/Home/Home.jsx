import { Link } from 'react-router-dom'
import { FaArrowRight, FaPlay, FaDumbbell, FaUsers, FaTrophy, FaClock, FaFire, FaRunning, FaHeartbeat, FaWeight, FaQuoteLeft, FaStar } from 'react-icons/fa'
import './Home.css'

/* ---- DATA ---- */
const stats = [
    { value: '2000+', label: 'Active Members', icon: FaUsers },
    { value: '15+', label: 'Expert Trainers', icon: FaDumbbell },
    { value: '10+', label: 'Years of Experience', icon: FaTrophy },
    { value: '24/7', label: 'Gym Access', icon: FaClock },
]

const programs = [
    { icon: FaDumbbell, title: 'Strength Training', desc: 'Build raw power and muscle with progressive overload techniques guided by elite coaches.', color: '#e63946' },
    { icon: FaFire, title: 'HIIT & Cardio', desc: 'Torch calories and elevate your endurance with high-intensity interval training sessions.', color: '#e63946' },
    { icon: FaRunning, title: 'Personal Training', desc: 'One-on-one sessions tailored to your exact fitness goals, schedule, and fitness level.', color: '#e63946' },
    { icon: FaHeartbeat, title: 'Weight Loss', desc: 'Science-backed programs combining nutrition guidance and targeted workouts for real results.', color: '#e63946' },
    { icon: FaWeight, title: 'Muscle Building', desc: 'Hypertrophy-focused programs designed to maximize muscle growth and definition.', color: '#e63946' },
    { icon: FaTrophy, title: 'Athlete Prep', desc: 'Sport-specific conditioning for competitive athletes seeking peak performance.', color: '#e63946' },
]

const trainers = [
    { img: '/ganesh-pathak.jpeg', name: 'Ganesh Pathak', specialty: 'Powerlifting & Strength Training', exp: '15+ Years' },
    { img: '/dinesh-rawat.jpeg', name: 'Dinesh Rawat', specialty: 'Strength Training & Bodybuilding', exp: '10+ Years' },
    { img: '/meenakshi.jpeg', name: 'Meenakshi', specialty: 'Weight Loss & Personal Training', exp: '8+ Years' },
    { img: '/priya-khatri.jpeg', name: 'Priya Khatri', specialty: 'Zumba & Cardio Fitness', exp: '7+ Years' },
]

const plans = [
    {
        name: 'Basic',
        price: '1,500',
        period: '/ month',
        features: ['Gym Access', 'Cardio Equipment', 'Locker Facility', 'Basic Fitness Guidance'],
        popular: false,
    },
    {
        name: 'Standard',
        price: '3,000',
        period: '/ 3 months',
        badge: 'BEST VALUE',
        features: ['Full Gym Access', 'Strength Training Area', 'Group Classes', 'Locker Facility', 'Fitness Assessment'],
        popular: true,
    },
    {
        name: 'Premium',
        price: '10,000',
        period: '/ year',
        features: ['Unlimited Gym Access', 'Group Classes', 'Personal Training Guidance', 'Nutrition Guidance', 'Locker & Shower Access'],
        popular: false,
    },
]

const galleryImages = [
    { src: '/gallery7.jpg', alt: 'Strength Training' },
    { src: '/gallery2.png', alt: 'Training Session' },
    { src: '/gallery8.jpg', alt: 'Gym Workout' },
    { src: '/gallery4.png', alt: 'Boxing Area' },
    { src: '/gallery9.jpg', alt: 'Cardio Training' },
    { src: '/gallery6.png', alt: 'Group Fitness' },
]

const testimonials = [
    {
        name: 'Rahul Sharma', role: 'Lost 18 kg in 5 months',
        rating: 5,
        text: 'Ganesh sir\'s progressive overload approach completely changed how I train. The results speak for themselves — strongest I\'ve ever been in my life!',
        img: '/ganesh-pathak.jpeg',
    },
    {
        name: 'Anjali Verma', role: 'Lost 12 kg, gained confidence',
        rating: 5,
        text: 'Meenakshi\'s guidance was exactly what I needed as a beginner. She made the gym feel welcoming and the personalized plan got me real, visible results.',
        img: '/meenakshi.jpeg',
    },
    {
        name: 'Vikram Nair', role: 'Gained 10 kg of muscle',
        rating: 5,
        text: 'Dinesh bhai\'s bodybuilding program is next level. Proper technique, structured splits, and constant motivation. I\'m in the best shape of my life at 34.',
        img: '/dinesh-rawat.jpeg',
    },
]

function Home() {
    return (
        <div className="home">
            {/* ===== HERO ===== */}
            <section className="hero">
                <div className="hero__bg" style={{ backgroundImage: "url('/hero-bg.png')" }} />
                <div className="hero__overlay" />
                <div className="hero__noise" />
                <div className="container hero__content">
                    <div className="hero__tag">
                        <span className="hero__tag-dot" />
                        <span>PREMIUM FITNESS CENTER</span>
                    </div>
                    <h1 className="hero__title">
                        Train Hard.<br />
                        Stay <span className="hero__title-accent">Strong.</span>
                    </h1>
                    <p className="hero__subtitle">
                        Join Xtreme Fitness Gym and transform your body with expert coaching,
                        modern equipment, and a motivating community.
                    </p>
                    <div className="hero__actions">
                        <Link to="/membership" className="btn-primary">
                            Join Now <FaArrowRight />
                        </Link>
                        <Link to="/programs" className="hero__watch-btn">
                            <span className="hero__play-btn"><FaPlay /></span>
                            Explore Programs
                        </Link>
                    </div>
                    <div className="hero__stats">
                        {stats.map((s) => (
                            <div key={s.label} className="hero__stat">
                                <span className="hero__stat-value">{s.value}</span>
                                <span className="hero__stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hero__scroll">
                    <div className="hero__scroll-line" />
                    <span>Scroll Down</span>
                    <div className="hero__scroll-line" />
                </div>
            </section>

            {/* ===== ABOUT PREVIEW ===== */}
            <section className="home-about">
                <div className="container home-about__grid">
                    <div className="home-about__img-wrap">
                        <img src="/gallery7.jpg" alt="Training at Xtreme Fitness Gym" className="home-about__img" loading="lazy" />
                        <div className="home-about__badge">
                            <strong>10+</strong>
                            <span>Years of Excellence</span>
                        </div>
                    </div>
                    <div className="home-about__content">
                        <span className="section-tag">About Xtreme Fitness Gym</span>
                        <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 16px' }}>
                            More Than Just a <span>Gym</span>
                        </h2>
                        <div className="divider" style={{ margin: '0 0 24px' }} />
                        <p className="home-about__text">
                            Founded in Raghu Nagar, New Delhi, Xtreme Fitness Gym has been the go-to fitness centre for those who are serious about their health. We combine modern equipment, science-backed training, and a culture of discipline.
                        </p>
                        <p className="home-about__text">
                            Whether you are starting your first workout or pushing for competition-level performance, our certified trainers will craft the perfect program to help you hit every goal.
                        </p>
                        <div className="home-about__features">
                            {['State-of-the-art Equipment', 'Expert Certified Trainers', 'Personalized Programs', 'Nutrition Guidance'].map((f) => (
                                <div key={f} className="home-about__feature">
                                    <span className="home-about__feature-dot" />
                                    {f}
                                </div>
                            ))}
                        </div>
                        <Link to="/about" className="btn-primary">
                            Discover Our Story <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== PROGRAMS ===== */}
            <section className="home-programs">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">What We Offer</span>
                        <h2 className="section-title">Our <span>Programs</span></h2>
                        <div className="divider" />
                        <p className="section-subtitle">From beginner to elite — we have a program that fits your goals, schedule, and fitness level.</p>
                    </div>
                    <div className="programs-grid">
                        {programs.map((p) => {
                            const Icon = p.icon
                            return (
                                <div key={p.title} className="program-card">
                                    <div className="program-card__icon-wrap">
                                        <Icon className="program-card__icon" />
                                    </div>
                                    <h3 className="program-card__title">{p.title}</h3>
                                    <p className="program-card__desc">{p.desc}</p>
                                    <Link to="/programs" className="program-card__link">
                                        Learn More <FaArrowRight />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className="section-cta">
                        <Link to="/programs" className="btn-red-outline">View All Programs <FaArrowRight /></Link>
                    </div>
                </div>
            </section>

            {/* ===== TRAINERS ===== */}
            <section className="home-trainers">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Expert Coaches</span>
                        <h2 className="section-title">Meet Our <span>Trainers</span></h2>
                        <div className="divider" />
                        <p className="section-subtitle">Our world-class coaches bring decades of experience to help you achieve extraordinary results.</p>
                    </div>
                    <div className="trainers-grid">
                        {trainers.map((t) => (
                            <div key={t.name} className="trainer-card">
                                <div className="trainer-card__img-wrap">
                                    <img src={t.img} alt={t.name} className="trainer-card__img" />
                                    <div className="trainer-card__overlay">
                                        <Link to="/trainers" className="trainer-card__btn">View Profile</Link>
                                    </div>
                                </div>
                                <div className="trainer-card__body">
                                    <h3 className="trainer-card__name">{t.name}</h3>
                                    <p className="trainer-card__spec">{t.specialty}</p>
                                    <span className="trainer-card__exp">{t.exp} Experience</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="section-cta">
                        <Link to="/trainers" className="btn-red-outline">Meet All Trainers <FaArrowRight /></Link>
                    </div>
                </div>
            </section>

            {/* ===== PRICING ===== */}
            <section className="home-pricing">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Membership Plans</span>
                        <h2 className="section-title">Simple, Transparent <span>Pricing</span></h2>
                        <div className="divider" />
                        <p className="section-subtitle">No hidden fees. Cancel anytime. Choose the plan that fits your goals and budget.</p>
                    </div>
                    <div className="pricing-grid">
                        {plans.map((plan) => (
                            <div key={plan.name} className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''}`}>
                                {plan.badge && <div className="pricing-card__badge">{plan.badge}</div>}
                                <h3 className="pricing-card__name">{plan.name}</h3>
                                <div className="pricing-card__price">
                                    <span className="pricing-card__currency">₹</span>
                                    <span className="pricing-card__amount">{plan.price}</span>
                                    <span className="pricing-card__period">{plan.period}</span>
                                </div>
                                <ul className="pricing-card__features">
                                    {plan.features.map((f) => (
                                        <li key={f}>
                                            <span className="pricing-card__check">✓</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/membership" className={plan.popular ? 'btn-primary' : 'btn-red-outline'} style={{ width: '100%', justifyContent: 'center' }}>
                                    Get Started <FaArrowRight />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="section-cta">
                        <Link to="/membership" className="btn-red-outline">Compare All Plans <FaArrowRight /></Link>
                    </div>
                </div>
            </section>

            {/* ===== GALLERY ===== */}
            <section className="home-gallery">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Gallery</span>
                        <h2 className="section-title">Inside <span>Xtreme Fitness Gym</span></h2>
                        <div className="divider" />
                    </div>
                    <div className="gallery-grid">
                        {galleryImages.map((img, i) => (
                            <div key={i} className={`gallery-item gallery-item--${i + 1}`}>
                                <img src={img.src} alt={img.alt} />
                                <div className="gallery-item__overlay">
                                    <span>{img.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="section-cta">
                        <Link to="/gallery" className="btn-red-outline">View Full Gallery <FaArrowRight /></Link>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="home-testimonials">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Success Stories</span>
                        <h2 className="section-title">What Members <span>Say</span></h2>
                        <div className="divider" />
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((t) => (
                            <div key={t.name} className="testimonial-card">
                                <FaQuoteLeft className="testimonial-card__quote" />
                                <div className="testimonial-card__stars">
                                    {Array(t.rating).fill(0).map((_, i) => <FaStar key={i} />)}
                                </div>
                                <p className="testimonial-card__text">"{t.text}"</p>
                                <div className="testimonial-card__author">
                                    <img src={t.img} alt={t.name} className="testimonial-card__avatar" />
                                    <div>
                                        <strong className="testimonial-card__name">{t.name}</strong>
                                        <span className="testimonial-card__role">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA BANNER ===== */}
            <section className="home-cta">
                <div className="home-cta__bg" style={{ backgroundImage: "url('/gallery3.png')" }} />
                <div className="home-cta__overlay" />
                <div className="container home-cta__content">
                    <span className="section-tag">Limited Time Offer</span>
                    <h2 className="home-cta__title">Ready to <span>Transform</span> Your Life?</h2>
                    <p className="home-cta__subtitle">Join Xtreme Fitness Gym today and take the first step towards a stronger, healthier you. Open 24/7 for your convenience.</p>
                    <div className="home-cta__actions">
                        <Link to="/membership" className="btn-primary">
                            Claim Your Free Month <FaArrowRight />
                        </Link>
                        <Link to="/contact" className="btn-outline">
                            Talk to a Trainer
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
