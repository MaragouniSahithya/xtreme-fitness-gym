import { FaUsers, FaTrophy, FaDumbbell, FaClock, FaCheckCircle, FaMedal } from 'react-icons/fa'
import './About.css'

const stats = [
    { value: '2000+', label: 'Active Members', icon: FaUsers },
    { value: '15+', label: 'Expert Trainers', icon: FaDumbbell },
    { value: '10+', label: 'Years Experience', icon: FaTrophy },
    { value: '24/7', label: 'Open Access', icon: FaClock },
]

const milestones = [
    { year: '2014', title: 'Founded', desc: 'Xtreme Fitness Gym opened its doors in Raghu Nagar, New Delhi with a vision to build the ultimate local fitness community.' },
    { year: '2016', title: 'Expansion', desc: 'Expanded the facility with dedicated strength training zones, modern cardio equipment, and a new weight room.' },
    { year: '2018', title: '500 Members', desc: 'Reached 500 active members, launched group classes including Zumba and functional fitness sessions.' },
    { year: '2020', title: 'New Programs', desc: 'Introduced specialized programs for weight loss, bodybuilding, and personal training to cater to all fitness levels.' },
    { year: '2024', title: '24/7 Access', desc: 'Upgraded to 24/7 gym access, giving members the freedom to train on their own schedule, any time of day.' },
]

const facilities = [
    'Olympic Lifting Platform', 'Functional Training Zone', 'Indoor Cardio Track',
    'Heavy Bag Boxing Area', 'Yoga & Mindfulness Studio', 'Recovery & Sauna Suites',
    'Nutrition Bar & Café', 'Private Changing Rooms', 'Dedicated PT Suites',
    'Sports Performance Lab', 'Swimming & Aqua Fitness', 'Kids Fitness Zone',
]

const values = [
    { icon: FaMedal, title: 'Excellence', desc: 'We settle for nothing less than the best — from our equipment to our coaching to our community.' },
    { icon: FaUsers, title: 'Community', desc: 'Every member is family. We foster a supportive environment where everyone uplifts each other.' },
    { icon: FaTrophy, title: 'Results', desc: 'We are obsessively focused on measurable outcomes. Your goals become our mission.' },
]

function About() {
    return (
        <div className="about-page">
            {/* PAGE HERO */}
            <section className="page-hero" style={{ backgroundImage: "url('/gallery9.jpg')" }}>
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <span className="section-tag">Our Story</span>
                    <h1 className="page-hero__title" data-aos="fade-up">About <span>Xtreme Fitness Gym</span></h1>
                    <p className="page-hero__subtitle" data-aos="fade-up" data-aos-delay="100">More than a gym — a movement built on discipline, dedication, and transformation.</p>
                </div>
            </section>

            {/* MISSION */}
            <section className="about-mission">
                <div className="container about-mission__grid">
                    <div className="about-mission__content" data-aos="fade-right">
                        <span className="section-tag">About Xtreme Fitness Gym</span>
                        <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 16px' }}>
                            More Than Just a <span>Gym</span>
                        </h2>
                        <div className="divider" style={{ margin: '0 0 24px' }} />
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
                            At Xtreme Fitness Gym, our mission is to empower every member to become the best version of themselves. We believe fitness goes beyond physical transformation — it builds mental resilience, confidence, and a lifestyle that lasts a lifetime.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 32 }}>
                            Established in Raghu Nagar, New Delhi, we have been the go-to fitness destination for strength training, bodybuilding, weight loss, and functional fitness. With expert certified coaches and a welcoming community, Xtreme Fitness Gym is your home for real results.
                        </p>
                        <div className="about-values">
                            {values.map((v) => {
                                const Icon = v.icon
                                return (
                                    <div key={v.title} className="about-value-card">
                                        <Icon className="about-value-card__icon" />
                                        <div>
                                            <h4 className="about-value-card__title">{v.title}</h4>
                                            <p className="about-value-card__desc">{v.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="about-mission__img-wrap" data-aos="fade-left">
                        <img src="/gallery4.jpg" alt="Gym Atmosphere" className="about-mission__img img-fluid" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="about-stats">
                <div className="container">
                    <div className="about-stats__grid" data-aos="fade-up">
                        {stats.map((s) => {
                            const Icon = s.icon
                            return (
                                <div key={s.label} className="about-stat-card">
                                    <Icon className="about-stat-card__icon" />
                                    <span className="about-stat-card__value">{s.value}</span>
                                    <span className="about-stat-card__label">{s.label}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section className="about-timeline">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Our Journey</span>
                        <h2 className="section-title">Milestones That <span>Define</span> Us</h2>
                        <div className="divider" />
                    </div>
                    <div className="timeline">
                        {milestones.map((m, i) => (
                            <div key={m.year} className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`} data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="timeline__card glass-card">
                                    <span className="timeline__year">{m.year}</span>
                                    <h3 className="timeline__title">{m.title}</h3>
                                    <p className="timeline__desc">{m.desc}</p>
                                </div>
                                <div className="timeline__dot" />
                            </div>
                        ))}
                        <div className="timeline__line" />
                    </div>
                </div>
            </section>

            {/* FACILITIES */}
            <section className="about-facilities">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Our Facilities</span>
                        <h2 className="section-title">World-Class <span>Facilities</span></h2>
                        <div className="divider" />
                        <p className="section-subtitle">Everything you need to train, recover, and thrive under one roof.</p>
                    </div>
                    <div className="about-facilities__grid">
                        <div className="about-facilities__img" data-aos="fade-right">
                            <img src="/gallery8.jpg" alt="Gym Facilities" className="img-fluid" loading="lazy" />
                        </div>
                        <div className="about-facilities__list" data-aos="fade-left">
                            {facilities.map((f, i) => (
                                <div key={f} className="about-facility-item">
                                    <FaCheckCircle className="about-facility-item__icon" />
                                    <span>{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
