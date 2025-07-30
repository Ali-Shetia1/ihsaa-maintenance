import { useState, useEffect } from 'react'
import './FloatingButtons.css'

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isPulsing, setIsPulsing] = useState(false)

  const phoneNumber = '00201015078212' // Phone number for both WhatsApp and calls
  const defaultMessage = 'مرحباً، أرغب في الاستفسار عن خدمات الصيانة' // Default Arabic message

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      // Show buttons when scrolling down, hide when at very top
      if (scrollTop > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Add pulse animation on page load to draw attention to both buttons
    const pulseTimer = setTimeout(() => {
      setIsPulsing(true)
      
      // Remove pulse after a few cycles
      const removePulseTimer = setTimeout(() => {
        setIsPulsing(false)
      }, 6000)

      return () => clearTimeout(removePulseTimer)
    }, 2000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(pulseTimer)
    }
  }, [])

  const createWhatsAppURL = (phone, message) => {
    const encodedMessage = encodeURIComponent(message)
    // Use wa.me for better mobile compatibility
    return `https://wa.me/${phone}?text=${encodedMessage}`
  }

  const createPhoneURL = (phone) => {
    return `tel:${phone}`
  }

  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    const whatsappURL = createWhatsAppURL(phoneNumber, defaultMessage)
    window.open(whatsappURL, '_blank')
  }

  const handlePhoneClick = (e) => {
    e.preventDefault()
    const phoneURL = createPhoneURL(phoneNumber)
    window.location.href = phoneURL
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="#"
        className={`whatsapp-float ${isPulsing ? 'pulse' : ''}`}
        style={{
          opacity: isVisible ? '1' : '0.7',
          visibility: 'visible'
        }}
        onClick={handleWhatsAppClick}
        title="تواصل معنا عبر واتساب"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="whatsapp-icon"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.116"/>
        </svg>
      </a>

      {/* Phone Call Floating Button */}
      <a
        href="#"
        className={`phone-float ${isPulsing ? 'pulse' : ''}`}
        style={{
          opacity: isVisible ? '1' : '0.7',
          visibility: 'visible'
        }}
        onClick={handlePhoneClick}
        title="اتصل بنا مباشرة"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="phone-icon"
        >
          <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
        </svg>
      </a>
    </>
  )
}

export default FloatingButtons