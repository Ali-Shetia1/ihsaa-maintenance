import './Footer.css'

const Footer = () => {
  const handleNavClick = (targetId) => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/images/logo.png" alt="شعار الشركة" className="footer-logo" />
            <p>خدمات صيانة الغسالات الأتوماتيك بأعلى جودة وأسرع وقت في الأحساء</p>
            <div className="social-links">
              <a href="#" className="social-link">فيسبوك</a>
              <a href="#" className="social-link">تويتر</a>
              <a href="#" className="social-link">انستغرام</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>خدماتنا</h3>
            <ul>
              <li><a href="#services" onClick={() => handleNavClick('services')}>صيانة الغسالات</a></li>
              <li><a href="#services" onClick={() => handleNavClick('services')}>إصلاح الأعطال</a></li>
              <li><a href="#services" onClick={() => handleNavClick('services')}>صيانة دورية</a></li>
              <li><a href="#services" onClick={() => handleNavClick('services')}>قطع غيار أصلية</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>معلومات الاتصال</h3>
            <div className="contact-details">
              <p>📞 +966 XX XXX XXXX</p>
              <p>📍 الأحساء، المملكة العربية السعودية</p>
              <p>🕒 من السبت إلى الخميس، 8 صباحاً - 6 مساءً</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>روابط سريعة</h3>
            <ul>
              <li><a href="#home" onClick={() => handleNavClick('home')}>الرئيسية</a></li>
              <li><a href="#about" onClick={() => handleNavClick('about')}>حولنا</a></li>
              <li><a href="#contact" onClick={() => handleNavClick('contact')}>اتصل بنا</a></li>
              <li><a href="#testimonials" onClick={() => handleNavClick('testimonials')}>آراء العملاء</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 صيانة الأحساء. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer