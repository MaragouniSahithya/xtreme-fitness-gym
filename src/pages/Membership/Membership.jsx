import { FaArrowRight, FaCheckCircle, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Membership.css'

const plans = [
    {
        name: 'Basic',
        price: '1,500',
        period: '/mo',
        billing: 'Billed monthly',
        features: [
            { text: 'Gym Access', included: true },
            { text: 'Cardio Equipment', included: true },
            { text: 'Locker Facility', included: true },
            { text: 'Basic Fitness Guidance', included: true },
            { text: 'Group Classes', included: false },
            { text: 'Personal Training Sessions', included: false },
            { text: 'Nutrition Consultation', included: false },
            { text: 'Fitness Assessment', included: false },
            { text: 'Shower Access', included: false },
            { text: 'Nutrition Guidance', included: false },
        ],
        popular: false,
        cta: 'Get Started',
    },
    {
        name: 'Standard',
        price: '3,000',
        period: '/3 mo',
        billing: 'Billed every 3 months',
        badge: 'MOST POPULAR',
        features: [
            { text: 'Full Gym Access', included: true },
            { text: 'Cardio Equipment', included: true },
            { text: 'Strength Training Area', included: true },
            { text: 'Group Classes', included: true },
            { text: 'Locker Facility', included: true },
            { text: 'Fitness Assessment', included: true },
            { text: 'Personal Training Sessions', included: false },
            { text: 'Nutrition Guidance', included: false },
            { text: 'Shower Access', included: false },
            { text: 'Transformation Package', included: false },
        ],
        popular: true,
        cta: 'Join Now — Best Value',
    },
    {
        name: 'Premium',
        price: '10,000',
        period: '/yr',
        billing: 'Billed annually',
        features: [
            { text: 'Unlimited Gym Access', included: true },
            { text: 'All Cardio & Strength Equipment', included: true },
            { text: 'Group Classes', included: true },
            { text: 'Personal Training Guidance', included: true },
            { text: 'Nutrition Guidance', included: true },
            { text: 'Locker & Shower Access', included: true },
            { text: 'Fitness Assessment', included: true },
            { text: 'Weight Loss Program', included: true },
            { text: 'Transformation Package', included: true },
            { text: 'Priority Coach Access', included: true },
        ],
        popular: false,
        cta: 'Go Premium',
    },
]

const faqs = [
    { q: 'Is there a joining fee?', a: 'No! There are no hidden joining fees. You only pay for the membership plan you choose. Walk in and sign up today.' },
    { q: 'Can I upgrade my membership plan?', a: 'Yes, you can upgrade from Basic to Standard or Premium at any time. Visit the gym and our team will help you switch plans.' },
    { q: 'Do you offer student or special discounts?', a: 'Yes! We offer special discounts for students and group enrollments. Contact us directly to know about current offers and seasonal packages.' },
    { q: 'What is included in Personal Training?', a: 'Personal training includes a customized workout plan, 1-on-1 coaching with a certified trainer, form correction, and regular progress tracking sessions.' },
]

function Membership() {
    return (
        <div className="membership-page">
            <section className="page-hero" style={{ backgroundImage: "url('/gallery6.jpg')" }}>
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <span className="section-tag">Pricing Plans</span>
                    <h1 className="page-hero__title">Choose Your <span>Plan</span></h1>
                    <p className="page-hero__subtitle">Simple, transparent pricing with no hidden fees. Cancel or upgrade anytime.</p>
                </div>
            </section>

            <section className="membership-plans">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Membership Tiers</span>
                        <h2 className="section-title">Invest in Your <span>Best Self</span></h2>
                        <div className="divider" />
                        <p className="section-subtitle">All plans include our core facilities. Upgrade for more coaching and premium perks.</p>
                    </div>
                    <div className="membership-grid">
                        {plans.map((plan) => (
                            <div key={plan.name} className={`membership-card ${plan.popular ? 'membership-card--popular' : ''}`}>
                                {plan.badge && <div className="membership-card__badge">{plan.badge}</div>}
                                <div className="membership-card__header">
                                    <h3 className="membership-card__name">{plan.name}</h3>
                                    <div className="membership-card__price">
                                        <span className="membership-card__currency">₹</span>
                                        <span className="membership-card__amount">{plan.price}</span>
                                        <span className="membership-card__period">{plan.period}</span>
                                    </div>
                                    <p className="membership-card__billing">{plan.billing}</p>
                                </div>
                                <ul className="membership-card__features">
                                    {plan.features.map((f) => (
                                        <li key={f.text} className={f.included ? '' : 'membership-card__feature--excluded'}>
                                            {f.included
                                                ? <FaCheckCircle className="membership-card__check membership-card__check--yes" />
                                                : <FaTimes className="membership-card__check membership-card__check--no" />
                                            }
                                            <span>{f.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to="/contact"
                                    className={plan.popular ? 'btn-primary' : 'btn-red-outline'}
                                    style={{ width: '100%', justifyContent: 'center' }}
                                >
                                    {plan.cta} <FaArrowRight />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="membership-faq">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">FAQ</span>
                        <h2 className="section-title">Common <span>Questions</span></h2>
                        <div className="divider" />
                    </div>
                    <div className="faq-grid">
                        {faqs.map((faq) => (
                            <div key={faq.q} className="faq-card">
                                <h4 className="faq-card__q">{faq.q}</h4>
                                <p className="faq-card__a">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Membership
