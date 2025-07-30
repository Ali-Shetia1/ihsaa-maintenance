import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 0,
      image: '/images/wash-machine.jpeg',
      title: 'صيانة الغسالات الاتوماتيك',
      description: 'خدمات صيانة الغسالات الاتوماتيك بأعلى جودة وأسرع وقت',
      alt: 'صيانة الغسالات'
    },
    {
      id: 1,
      image: '/images/air conditioner.png',
      title: 'صيانة وإصلاح المكيفات',
      description: 'خدمات صيانة المكيفات الشاملة لجميع الأنواع والماركات',
      alt: 'صيانة المكيفات'
    },
    {
      id: 2,
      image: '/images/dishwasher.jpeg',
      title: 'صيانة غسالات الأطباق',
      description: 'إصلاح وصيانة غسالات الأطباق بأحدث التقنيات والأدوات',
      alt: 'صيانة غسالات الأطباق'
    },
    {
      id: 3,
      image: '/images/fridges.jpg',
      title: 'صيانة الثلاجات والمجمدات',
      description: 'خدمات صيانة شاملة للثلاجات والمجمدات لضمان الحفاظ على طعامك',
      alt: 'صيانة الثلاجات'
    }
  ]

  const totalSlides = slides.length

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  // Auto-slide functionality (optional)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="home">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          data-slide={index}
        >
          <img src={slide.image} alt={slide.alt} className="hero-img" />
          <div className="overlay">
            <div className="hero-text">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button onClick={scrollToContact} className="order-btn hero-cta">
                اطلب الآن
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="arrow arrow-left" onClick={prevSlide}>❮</div>
      <div className="arrow arrow-right" onClick={nextSlide}>❯</div>
      
      <div className="dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            data-slide={index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero