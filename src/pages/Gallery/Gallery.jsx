import { useState } from 'react'
import './Gallery.css'

const images = [
    { src: '/ganesh-pathak.jpeg', alt: 'Ganesh Pathak', caption: 'Powerlifting & Strength Training', category: 'training' },
    { src: '/dinesh-rawat.jpeg', alt: 'Dinesh Rawat', caption: 'Strength Training & Bodybuilding', category: 'training' },
    { src: '/meenakshi.jpeg', alt: 'Meenakshi', caption: 'Weight Loss & Personal Training', category: 'training' },
    { src: '/priya-khatri.jpeg', alt: 'Priya Khatri', caption: 'Zumba & Cardio Fitness', category: 'training' },
    { src: '/gallery3.jpg', alt: 'Weight Training', category: 'equipment' },
    { src: '/gallery5.jpg', alt: 'Cardio Session', category: 'classes' },
    { src: '/gallery6.png', alt: 'Group Fitness', category: 'classes' },
    { src: '/gallery8.jpg', alt: 'Gym Floor', category: 'equipment' },
    { src: '/gallery10.jpg', alt: 'Fitness Class', category: 'classes' },
]

const categories = ['all', 'training', 'equipment', 'classes']

function Gallery() {
    const [active, setActive] = useState('all')
    const [lightbox, setLightbox] = useState(null)

    const filtered = active === 'all' ? images : images.filter((img) => img.category === active)

    return (
        <div className="gallery-page">
            <section className="page-hero" style={{ backgroundImage: "url('/gallery7.jpg')" }}>
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <span className="section-tag">Our Space</span>
                    <h1 className="page-hero__title" data-aos="fade-up">Gym <span>Gallery</span></h1>
                    <p className="page-hero__subtitle" data-aos="fade-up" data-aos-delay="100">A peek inside our gym — state-of-the-art equipment, elite coaching spaces, and an electrifying atmosphere.</p>
                </div>
            </section>

            <section className="gallery-section">
                <div className="container">
                    <div className="gallery-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`gallery-filter-btn ${active === cat ? 'gallery-filter-btn--active' : ''}`}
                                onClick={() => setActive(cat)}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="gallery-masonry">
                        {filtered.map((img, i) => (
                            <div
                                key={`${img.src}-${i}`}
                                className="gallery-masonry__item"
                                data-aos="fade-up"
                                data-aos-delay={(i % 5) * 100}
                                onClick={() => setLightbox(img)}
                            >
                                <img src={img.src} alt={img.alt} className="img-fluid" loading="lazy" />
                                <div className="gallery-masonry__overlay">
                                    <div className="gallery-masonry__overlay-inner">
                                        <span className="gallery-masonry__label">{img.alt}</span>
                                        {img.caption && (
                                            <span className="gallery-masonry__sublabel">{img.caption}</span>
                                        )}
                                        <span className="gallery-masonry__zoom">⤢</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LIGHTBOX */}
            {lightbox && (
                <div className="lightbox" onClick={() => setLightbox(null)}>
                    <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
                        <img src={lightbox.src} alt={lightbox.alt} className="lightbox__img" />
                        <p className="lightbox__caption">{lightbox.alt}</p>
                        <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery
