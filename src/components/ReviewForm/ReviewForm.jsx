import { useState } from 'react'
import './ReviewForm.css'

const ReviewForm = ({ onSubmitReview }) => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    rating: '',
    testimonial: ''
  })
  const [hoveredRating, setHoveredRating] = useState(0)

  const serviceOptions = [
    'صيانة غسالة سامسونج',
    'صيانة غسالة إل جي',
    'صيانة غسالة بوش',
    'إصلاح أعطال',
    'صيانة دورية'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating: rating.toString()
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Check if all required fields are filled
    if (!formData.name || !formData.service || !formData.rating || !formData.testimonial) {
      alert('الرجاء ملء جميع الحقول المطلوبة')
      return
    }
    
    // Call the parent's onSubmitReview function with the form data
    if (onSubmitReview) {
      onSubmitReview(formData)
      alert('شكراً لك على تقييمك! تم إضافة تقييمك بنجاح.')
    } else {
      alert('شكراً لك على تقييمك! سيتم مراجعته قريباً.')
    }
    
    // Reset the form
    setFormData({
      name: '',
      service: '',
      rating: '',
      testimonial: ''
    })
    setHoveredRating(0)
  }

  const renderStarInput = () => {
    const stars = []
    for (let i = 5; i >= 1; i--) {
      stars.push(
        <div key={i} className="star-container">
          <input
            type="radio"
            id={`star${i}`}
            name="rating"
            value={i}
            checked={formData.rating === i.toString()}
            onChange={() => handleRatingChange(i)}
          />
          <label
            htmlFor={`star${i}`}
            onMouseEnter={() => setHoveredRating(i)}
            onMouseLeave={() => setHoveredRating(0)}
            style={{
              color: (hoveredRating >= i || parseInt(formData.rating) >= i) ? '#FFD700' : '#ddd'
            }}
          >
            ★
          </label>
        </div>
      )
    }
    return stars
  }

  return (
    <section className="review-form-section">
      <div className="container">
        <h2 className="section-title">شاركنا تجربتك</h2>
        <div className="review-form-container">
          <form className="review-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">الاسم الكامل</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">نوع الخدمة</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">اختر نوع الخدمة</option>
                {serviceOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="rating">التقييم</label>
              <div className="rating-input">
                {renderStarInput()}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="testimonial">التقييم</label>
              <textarea
                id="testimonial"
                name="testimonial"
                rows="4"
                placeholder="اكتب تجربتك معنا..."
                value={formData.testimonial}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <button type="submit" className="submit-btn">إرسال التقييم</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ReviewForm