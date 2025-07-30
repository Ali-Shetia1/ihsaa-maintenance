import './ServicesOverview.css'

const ServicesOverview = ({ onServiceSelect }) => {
  const services = [
    {
      id: 'wash-machine',
      image: '/images/wash-machine.jpeg',
      title: 'الغسالات',
      subtitle: 'صيانة شاملة لجميع أنواع الغسالات الأتوماتيك مع ضمان الجودة',
      alt: 'صيانة الغسالات'
    },
    {
      id: 'air-conditioner',
      image: '/images/air conditioner.png',
      title: 'المكيفات',
      subtitle: 'إصلاح جميع أنواع أعطال المكيفات بأنواعها المختلفة',
      alt: 'صيانة المكيفات'
    },
    {
      id: 'dishwasher',
      image: '/images/dishwasher.jpeg',
      title: 'غسالات الأطباق',
      subtitle: 'صيانة وإصلاح غسالات الأطباق بأعلى مستوى من الجودة',
      alt: 'صيانة غسالات الأطباق'
    },
    {
      id: 'fridge',
      image: '/images/fridges.jpg',
      title: 'الثلاجات',
      subtitle: 'صيانة شاملة للثلاجات والمجمدات بجميع أنواعها',
      alt: 'صيانة الثلاجات'
    }
  ]

  const handleViewDetails = (serviceId) => {
    onServiceSelect(serviceId)
  }

  return (
    <section className="services-overview" id="services">
      <div className="container">
        <h2 className="section-title">خدماتنا الرئيسية</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.alt} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
              <button 
                className="view-details-btn" 
                data-service={service.id}
                onClick={() => handleViewDetails(service.id)}
              >
                عرض التفاصيل
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview