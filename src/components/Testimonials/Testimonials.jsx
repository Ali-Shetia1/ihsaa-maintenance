import './Testimonials.css'

const Testimonials = ({ testimonials }) => {

  const renderStars = (rating) => {
    return '★'.repeat(rating)
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">آراء عملائنا</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-card ${index === testimonials.length - 1 && testimonial.id > 10 ? 'new-review' : ''}`}>
              <div className="quote">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="avatar">
                  <img src={testimonial.avatar} alt={testimonial.author} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <span className="service-type">{testimonial.serviceType}</span>
                </div>
                <div className="stars">{renderStars(testimonial.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials