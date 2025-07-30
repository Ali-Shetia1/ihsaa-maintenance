import './Contact.css'

const Contact = () => {
  const handleCallNow = () => {
    window.location.href = 'tel:+966'
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">اتصل بنا</h2>
        <div className="contact-info">
          <div className="contact-item">
            <strong>الهاتف:</strong> +966 XX XXX XXXX
          </div>
          <div className="contact-item">
            <strong>العنوان:</strong> الأحساء، المملكة العربية السعودية
          </div>
          <div className="contact-item">
            <strong>ساعات العمل:</strong> من السبت إلى الخميس، 8 صباحاً - 6 مساءً
          </div>
        </div>
        <div className="cta-section">
          <button onClick={handleCallNow} className="order-btn large">
            اتصل الآن للحصول على خدمة فورية
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact