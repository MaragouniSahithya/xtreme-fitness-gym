import { FaStar } from 'react-icons/fa'
import './Trainers.css'

const trainers = [
    {
        img: '/ganesh-pathak.jpeg',
        name: 'Ganesh Pathak',
        specialty: 'Powerlifting & Strength Training',
        exp: '15+ Years Experience',
        certs: ['World Powerlifting Champion', 'International Medalist', 'Strength Coach'],
        bio: 'Ganesh Pathak is a World Powerlifting Champion and international medalist who leads the strength training programs at the gym. His coaching philosophy focuses on progressive overload combined with perfect lifting technique. He empowers athletes and beginners alike to push beyond their limits and achieve elite strength levels.',
        rating: 5,
        clients: '200+',
    },
    {
        img: '/dinesh-rawat.jpeg',
        name: 'Dinesh Rawat',
        specialty: 'Strength Training & Muscle Building',
        exp: '10+ Years Experience',
        certs: ['Powerlifting Coach', 'Bodybuilding Specialist', 'Lifting Technique Expert'],
        bio: 'Dinesh Rawat specializes in powerlifting and bodybuilding coaching. He helps members develop proper lifting form, increase strength safely, and build muscle through structured workout programs designed for both beginners and advanced athletes.',
        rating: 5,
        clients: '150+',
    },
    {
        img: '/meenakshi.jpeg',
        name: 'Meenakshi',
        specialty: 'Weight Loss & Personal Training',
        exp: '8+ Years Experience',
        certs: ['Certified Personal Trainer', 'Weight Loss Specialist', 'Strength Basics Coach'],
        bio: 'Meenakshi focuses on helping beginners and women achieve their fitness goals through personalized training programs. Her coaching combines strength training, weight loss guidance, and supportive motivation to build confidence and long-term fitness habits.',
        rating: 5,
        clients: '120+',
    },
    {
        img: '/priya-khatri.jpeg',
        name: 'Priya Khatri',
        specialty: 'Zumba & Cardio Fitness',
        exp: '7+ Years Experience',
        certs: ['Zumba Instructor', 'Cardio Fitness Coach', 'Group Workout Specialist'],
        bio: 'Priya Khatri leads energetic Zumba and cardio sessions that combine dance, endurance training, and fun group workouts. Her classes help members improve cardiovascular health, burn calories, and stay motivated through high-energy fitness sessions.',
        rating: 5,
        clients: '100+',
    },
]

function Trainers() {
    return (
        <div className="trainers-page">
            <section className="page-hero" style={{ backgroundImage: "url('/gallery8.jpg')" }}>
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <span className="section-tag">Expert Coaches</span>
                    <h1 className="page-hero__title" data-aos="fade-up">Meet Our <span>Trainers</span></h1>
                    <p className="page-hero__subtitle" data-aos="fade-up" data-aos-delay="100">World-class certified coaches dedicated to transforming your fitness journey.</p>
                </div>
            </section>

            <section className="trainers-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Our Team</span>
                        <h2 className="section-title">Elite <span>Fitness</span> Professionals</h2>
                        <div className="divider" />
                        <p className="section-subtitle">Each of our trainers is carefully selected for their expertise, passion, and commitment to delivering real results.</p>
                    </div>
                    <div className="trainers-full-grid">
                        {trainers.map((t, i) => (
                            <div key={t.name} className="trainer-full-card glass-card" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="trainer-full-card__img-wrap">
                                    <img src={t.img} alt={t.name} className="trainer-full-card__img img-fluid" loading="lazy" />
                                </div>
                                <div className="trainer-full-card__body">
                                    <div className="trainer-full-card__header">
                                        <div>
                                            <h3 className="trainer-full-card__name">{t.name}</h3>
                                            <p className="trainer-full-card__spec">{t.specialty}</p>
                                        </div>
                                        <div className="trainer-full-card__rating">
                                            <div className="trainer-full-card__stars">
                                                {Array(t.rating).fill(0).map((_, i) => <FaStar key={i} />)}
                                            </div>
                                            <span className="trainer-full-card__clients">{t.clients} Clients</span>
                                        </div>
                                    </div>
                                    <p className="trainer-full-card__bio">{t.bio}</p>
                                    <div className="trainer-full-card__footer">
                                        <span className="trainer-full-card__exp">{t.exp}</span>
                                        <div className="trainer-full-card__certs">
                                            {t.certs.map((c) => (
                                                <span key={c} className="trainer-full-card__cert">{c}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Trainers
