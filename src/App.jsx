import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ServicesOverview from './components/ServicesOverview/ServicesOverview'
import DetailedServices from './components/DetailedServices/DetailedServices'
import Testimonials from './components/Testimonials/Testimonials'
import ReviewForm from './components/ReviewForm/ReviewForm'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import FloatingButtons from './components/FloatingButtons/FloatingButtons'

function App() {
  const [activeService, setActiveService] = useState('wash-machine')
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      text: 'خدمة ممتازة وسريعة، الفني كان محترف جداً وأصلح الغسالة في أقل من ساعة. أنصح الجميع بالتعامل معهم',
      author: 'أحمد محمد',
      serviceType: 'صيانة غسالة سامسونج',
      avatar: '/images/avatar-male.png',
      rating: 5
    },
    {
      id: 2,
      text: 'أسعار معقولة وخدمة احترافية، الفني شرح لي المشكلة بوضوح واستخدم قطع غيار أصلية',
      author: 'فاطمة علي',
      serviceType: 'إصلاح غسالة إل جي',
      avatar: '/images/avatar-woman.png',
      rating: 5
    },
    {
      id: 3,
      text: 'جاء الفني في الموعد المحدد وكان مهني جداً، الغسالة تعمل الآن بشكل ممتاز',
      author: 'محمد عبدالله',
      serviceType: 'صيانة دورية',
      avatar: '/images/avatar-male.png',
      rating: 3
    }
  ])

  const handleServiceSelect = (serviceType) => {
    setActiveService(serviceType)
    // Scroll to detailed services section
    setTimeout(() => {
      document.getElementById('detailed-services')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 100)
  }

  const handleNewReview = (reviewData) => {
    // Assign avatar based on gender patterns in Arabic names
    const femaleNamePatterns = ['فاطمة', 'عائشة', 'خديجة', 'مريم', 'زينب', 'أسماء', 'نورا', 'سارة', 'هناء', 'نادية']
    const isFemale = femaleNamePatterns.some(pattern => reviewData.name.includes(pattern))
    const avatar = isFemale ? '/images/avatar-woman.png' : '/images/avatar-male.png'

    const newTestimonial = {
      id: Date.now(), // Use timestamp as unique ID
      text: reviewData.testimonial,
      author: reviewData.name,
      serviceType: reviewData.service,
      avatar: avatar,
      rating: parseInt(reviewData.rating)
    }

    // Option 1: Replace the last testimonial
    // setTestimonials(prev => [
    //   ...prev.slice(0, -1),
    //   newTestimonial
    // ])

    // Option 2: Add as new testimonial (keeping only last 4 testimonials)
    setTestimonials(prev => {
      const updated = [...prev, newTestimonial]
      return updated.length > 4 ? updated.slice(-4) : updated
    })

    // Scroll to testimonials section to show the new review
    setTimeout(() => {
      document.getElementById('testimonials')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 100)
  }

  return (
    <>
      <Navbar />
      <main className="main-container">
        <Hero />
        <ServicesOverview onServiceSelect={handleServiceSelect} />
        <DetailedServices activeService={activeService} />
        <Testimonials testimonials={testimonials} />
        <ReviewForm onSubmitReview={handleNewReview} />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App
