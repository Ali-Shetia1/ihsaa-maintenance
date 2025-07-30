import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuClick = (menuItem, targetId) => {
    setActiveMenu(menuItem)
    setMobileMenuOpen(false) // Close mobile menu when item is clicked
    
    // Smooth scroll to target section
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Prevent body scroll when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  // Close mobile menu and restore scroll when menu item is clicked
  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-left">
            <img src="/images/logo.png" alt="شعار الشركة" className="logo" />
          </div>
          
          <ul className="menu">
            <li>
              <a 
                href="#home" 
                className={activeMenu === 'home' ? 'active' : ''}
                onClick={() => handleMenuClick('home', 'home')}
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a 
                href="#services"
                className={activeMenu === 'services' ? 'active' : ''}
                onClick={() => handleMenuClick('services', 'services')}
              >
                خدماتنا
              </a>
            </li>
            <li>
              <a 
                href="#detailed-services"
                className={activeMenu === 'detailed-services' ? 'active' : ''}
                onClick={() => handleMenuClick('detailed-services', 'detailed-services')}
              >
                تفاصيل الخدمات
              </a>
            </li>
            <li>
              <a 
                href="#testimonials"
                className={activeMenu === 'testimonials' ? 'active' : ''}
                onClick={() => handleMenuClick('testimonials', 'testimonials')}
              >
                آراء العملاء
              </a>
            </li>
            <li>
              <a 
                href="#about"
                className={activeMenu === 'about' ? 'active' : ''}
                onClick={() => handleMenuClick('about', 'about')}
              >
                حولنا
              </a>
            </li>
            <li>
              <a 
                href="#contact"
                className={activeMenu === 'contact' ? 'active' : ''}
                onClick={() => handleMenuClick('contact', 'contact')}
              >
                اتصل بنا
              </a>
            </li>
          </ul>
          <a href="tel:+966" className="call-btn">اتصل بنا</a>
          
          {/* Mobile-only elements */}
          <button 
            className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <div className="nav-center">
            <img src="/images/logo.png" alt="شعار الشركة" className="logo mobile-logo" />
          </div>
          
          <a href="tel:+966" className="call-btn mobile-cta">اتصل بنا</a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <button 
          className="close-btn"
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          ×
        </button>
        <ul className="mobile-menu">
          <li>
            <a 
              href="#home" 
              className={activeMenu === 'home' ? 'active' : ''}
              onClick={() => handleMenuClick('home', 'home')}
            >
              الرئيسية
            </a>
          </li>
          <li>
            <a 
              href="#services"
              className={activeMenu === 'services' ? 'active' : ''}
              onClick={() => handleMenuClick('services', 'services')}
            >
              خدماتنا
            </a>
          </li>
          <li>
            <a 
              href="#detailed-services"
              className={activeMenu === 'detailed-services' ? 'active' : ''}
              onClick={() => handleMenuClick('detailed-services', 'detailed-services')}
            >
              تفاصيل الخدمات
            </a>
          </li>
          <li>
            <a 
              href="#testimonials"
              className={activeMenu === 'testimonials' ? 'active' : ''}
              onClick={() => handleMenuClick('testimonials', 'testimonials')}
            >
              آراء العملاء
            </a>
          </li>
          <li>
            <a 
              href="#about"
              className={activeMenu === 'about' ? 'active' : ''}
              onClick={() => handleMenuClick('about', 'about')}
            >
              حولنا
            </a>
          </li>
          <li>
            <a 
              href="#contact"
              className={activeMenu === 'contact' ? 'active' : ''}
              onClick={() => handleMenuClick('contact', 'contact')}
            >
              اتصل بنا
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar