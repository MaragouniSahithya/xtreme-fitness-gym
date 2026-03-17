import { FaDumbbell, FaFire, FaRunning, FaHeartbeat, FaWeight, FaTrophy, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Programs.css'

const programs = [
    {
        icon: FaDumbbell,
        title: 'Strength Training',
        desc: 'Build raw power, dense muscle, and functional strength through progressive overload periodization and expert coaching. From beginner lifts to advanced compound movements, we\'ll help you get stronger every week.',
        features: ['Personalized Periodization', 'Olympic Lifting Coaching', 'Progressive Overload Plans', 'Powerlifting Prep', 'One-Rep Max Testing', 'Video Technique Analysis'],
        image: '/gallery3.jpg',
        duration: '60 min sessions',
        level: 'All Levels',
        frequency: '3–5x / Week',
    },
    {
        icon: FaFire,
        title: 'HIIT & Cardio',
        desc: 'Maximize caloric burn and cardiovascular endurance with scientifically designed high-intensity interval training. Our HIIT sessions torch fat, boost metabolism, and improve your overall fitness in the most efficient way possible.',
        features: ['Metabolic Conditioning', 'Heart Rate Zone Training', 'Battle Rope & Plyometrics', 'Group & Solo Sessions', 'Fat Burning Protocols', 'Endurance Progression'],
        image: '/gallery5.jpg',
        duration: '45 min sessions',
        level: 'Beginner to Advanced',
        frequency: '4–6x / Week',
    },
    {
        icon: FaRunning,
        title: 'Personal Training',
        desc: 'Experience the gold standard in fitness coaching with a fully customized 1-on-1 training program. Your trainer will craft workouts, monitor progress, and adapt the plan weekly to ensure you\'re always moving toward your goals.',
        features: ['Custom Program Design', 'Weekly Progress Reviews', 'Nutrition Guidance', 'Goal Setting Sessions', 'Lifestyle Coaching', 'Flexible Scheduling'],
        image: '/gallery9.jpg',
        duration: '60–90 min sessions',
        level: 'All Levels',
        frequency: '2–5x / Week',
    },
    {
        icon: FaHeartbeat,
        title: 'Weight Loss Program',
        desc: 'A comprehensive science-backed approach to fat loss combining caloric optimization, resistance training, and cardio programming. We don\'t just help you lose weight — we help you keep it off for life.',
        features: ['Caloric Deficit Planning', 'Macro-Based Nutrition', 'Metabolic Rate Assessment', 'Body Composition Tracking', 'Behavioral Coaching', 'Weekly Check-ins'],
        image: '/gallery7.jpg',
        duration: '60 min sessions',
        level: 'Beginner Friendly',
        frequency: '3–4x / Week',
    },
    {
        icon: FaWeight,
        title: 'Muscle Building',
        desc: 'Hypertrophy-focused programming designed to maximize muscle growth and definition. Built on progressive overload, optimal volume, and recovery principles used by professional bodybuilders.',
        features: ['Hypertrophy-First Design', 'Muscle Group Splits', 'Volume & Intensity Planning', 'Supplement Guidance', 'Recovery Optimization', 'Physique Goal Setting'],
        image: '/gallery4.jpg',
        duration: '75 min sessions',
        level: 'Intermediate+',
        frequency: '4–6x / Week',
    },
]

function Programs() {
    return (
        <div className="programs-page">
            <section className="page-hero" style={{ backgroundImage: "url('/gallery5.jpg')" }}>
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <span className="section-tag">What We Offer</span>
                    <h1 className="page-hero__title" data-aos="fade-up">Our <span>Programs</span></h1>
                    <p className="page-hero__subtitle" data-aos="fade-up" data-aos-delay="100">Scientifically designed fitness programs for every goal, level, and lifestyle.</p>
                </div>
            </section>

            <section className="programs-list">
                <div className="container">
                    {programs.map((p, i) => {
                        const Icon = p.icon
                        return (
                            <div key={p.title} className={`program-detail ${i % 2 !== 0 ? 'program-detail--reverse' : ''} glass-card`} data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="program-detail__img-wrap">
                                    <img src={p.image} alt={p.title} className="program-detail__img img-fluid" loading="lazy" />
                                    <div className="program-detail__img-overlay">
                                        <div className="program-detail__meta">
                                            <div className="program-detail__meta-item">
                                                <span className="program-detail__meta-label">Duration</span>
                                                <span className="program-detail__meta-value">{p.duration}</span>
                                            </div>
                                            <div className="program-detail__meta-item">
                                                <span className="program-detail__meta-label">Level</span>
                                                <span className="program-detail__meta-value">{p.level}</span>
                                            </div>
                                            <div className="program-detail__meta-item">
                                                <span className="program-detail__meta-label">Frequency</span>
                                                <span className="program-detail__meta-value">{p.frequency}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="program-detail__content">
                                    <div className="program-detail__icon-wrap">
                                        <Icon className="program-detail__icon" />
                                    </div>
                                    <h2 className="program-detail__title">{p.title}</h2>
                                    <div className="divider" style={{ margin: '16px 0 20px' }} />
                                    <p className="program-detail__desc">{p.desc}</p>
                                    <div className="program-detail__features">
                                        {p.features.map((f) => (
                                            <div key={f} className="program-detail__feature">
                                                <FaCheckCircle className="program-detail__feature-icon" />
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/membership" className="btn-primary">
                                        Enroll Now <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Programs
