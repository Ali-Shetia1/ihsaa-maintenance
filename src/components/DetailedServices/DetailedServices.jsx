import { useEffect } from 'react'
import './DetailedServices.css'

const DetailedServices = ({ activeService }) => {
  const services = {
    'wash-machine': {
      title: 'صيانة الغسالات الأتوماتيك',
      image: '/images/wash-machine.jpeg',
      alt: 'صيانة الغسالات',
      description: 'خدمة شاملة ومتخصصة',
      features: [
        'فحص شامل لجميع أجزاء الغسالة',
        'تنظيف الفلاتر والمضخات',
        'فحص وإصلاح أنظمة التصريف',
        'معايرة أنظمة التوازن',
        'استبدال القطع التالفة بقطع أصلية'
      ],
      problems: [
        { title: 'مشاكل التصريف', description: 'إصلاح مشاكل تصريف المياه وانسداد المواسير' },
        { title: 'أعطال المحرك', description: 'صيانة وإصلاح محركات الغسالات من جميع الأنواع' },
        { title: 'مشاكل التوازن', description: 'حل مشاكل الاهتزاز والصوت العالي أثناء التشغيل' },
        { title: 'أعطال الكهرباء', description: 'إصلاح الدوائر الكهربائية ولوحات التحكم' },
        { title: 'تسريب المياه', description: 'حل مشاكل تسرب المياه من خراطيم وصلات الغسالة' }
      ],
      advantages: [
        { title: 'خبرة طويلة', description: 'أكثر من 10 سنوات في مجال صيانة الغسالات' },
        { title: 'فنيون مختصون', description: 'فريق من الفنيين المدربين على أحدث التقنيات' },
        { title: 'قطع غيار أصلية', description: 'نستخدم قطع غيار أصلية مع ضمان الجودة' },
        { title: 'خدمة سريعة', description: 'استجابة سريعة وإصلاح في نفس اليوم' },
        { title: 'أسعار تنافسية', description: 'أفضل الأسعار في السوق مع جودة عالية' }
      ]
    },
    'air-conditioner': {
      title: 'صيانة المكيفات',
      image: '/images/air conditioner.png',
      alt: 'صيانة المكيفات',
      description: 'صيانة احترافية للمكيفات',
      features: [
        'تنظيف الفلاتر والمبادلات الحرارية',
        'فحص أنظمة التبريد والضغط',
        'إصلاح وحدات التحكم الإلكترونية',
        'تعبئة غاز التبريد وصيانة الضاغط',
        'فحص التوصيلات الكهربائية'
      ],
      problems: [
        { title: 'ضعف التبريد', description: 'حل مشاكل ضعف التبريد ونقص غاز الفريون' },
        { title: 'التسريبات', description: 'إصلاح تسريبات المياه والغاز من المكيف' },
        { title: 'الضوضاء', description: 'حل مشاكل الأصوات العالية والضوضاء' },
        { title: 'أعطال الضاغط', description: 'صيانة وإصلاح ضاغط المكيف' },
        { title: 'مشاكل الكهرباء', description: 'إصلاح الدوائر الكهربائية ووحدات التحكم' }
      ],
      advantages: [
        { title: 'فنيون معتمدون', description: 'فريق مختص في جميع أنواع المكيفات' },
        { title: 'قطع غيار أصلية', description: 'استخدام قطع غيار معتمدة من الشركات المصنعة' },
        { title: 'ضمان شامل', description: 'ضمان على الخدمة وقطع الغيار' },
        { title: 'خدمة طوارئ', description: 'خدمة 24 ساعة للحالات الطارئة' },
        { title: 'صيانة وقائية', description: 'برامج صيانة دورية لإطالة عمر المكيف' }
      ]
    },
    'dishwasher': {
      title: 'صيانة غسالات الأطباق',
      image: '/images/dishwasher.jpeg',
      alt: 'صيانة غسالات الأطباق',
      description: 'صيانة متخصصة لغسالات الأطباق',
      features: [
        'تنظيف وصيانة الرشاشات والفلاتر',
        'فحص أنظمة التصريف والتعبئة',
        'إصلاح دورات الغسيل والتجفيف',
        'صيانة سخان المياه الداخلي',
        'فحص وإصلاح أختام الباب'
      ],
      problems: [
        { title: 'عدم تنظيف الأطباق', description: 'حل مشاكل ضعف أداء التنظيف' },
        { title: 'تسريب المياه', description: 'إصلاح تسريبات المياه من الغسالة' },
        { title: 'عدم التصريف', description: 'حل مشاكل انسداد التصريف' },
        { title: 'أعطال التجفيف', description: 'إصلاح مشاكل دورة التجفيف' },
        { title: 'مشاكل المنظفات', description: 'حل مشاكل عدم ذوبان المنظفات والملمع' }
      ],
      advantages: [
        { title: 'صيانة دورية', description: 'برامج صيانة منتظمة لضمان الأداء' },
        { title: 'تنظيف عميق', description: 'تنظيف شامل للأجزاء الداخلية' },
        { title: 'استشارات الاستخدام', description: 'نصائح للاستخدام الأمثل للغسالة' },
        { title: 'قطع غيار متوفرة', description: 'توفر قطع الغيار لجميع الماركات' },
        { title: 'ضمان موسع', description: 'ضمان شامل على الخدمة لمدة 6 أشهر' }
      ]
    },
    'fridge': {
      title: 'صيانة الثلاجات والمجمدات',
      image: '/images/fridges.jpg',
      alt: 'صيانة الثلاجات',
      description: 'صيانة شاملة للثلاجات',
      features: [
        'فحص وصيانة أنظمة التبريد',
        'إصلاح مشاكل الضاغط والموتور',
        'تنظيف المكثفات والمبخرات',
        'إصلاح أنظمة التحكم في درجة الحرارة',
        'استبدال الأختام والحشوات التالفة'
      ],
      problems: [
        { title: 'عدم التبريد', description: 'حل مشاكل ضعف أو انقطاع التبريد' },
        { title: 'تكون الثلج', description: 'إصلاح مشاكل تكون الثلج الزائد' },
        { title: 'تسريب المياه', description: 'حل مشاكل تسريب المياه داخل وخارج الثلاجة' },
        { title: 'أصوات غريبة', description: 'إصلاح مشاكل الضوضاء والأصوات' },
        { title: 'مشاكل الإضاءة', description: 'إصلاح لمبات الإضاءة الداخلية والخارجية' }
      ],
      advantages: [
        { title: 'تشخيص دقيق', description: 'فحص شامل لتحديد المشكلة بدقة' },
        { title: 'إصلاح سريع', description: 'إصلاح في نفس اليوم للحفاظ على طعامك' },
        { title: 'جميع الماركات', description: 'خبرة في صيانة جميع ماركات الثلاجات' },
        { title: 'نصائح الصيانة', description: 'إرشادات للعناية بالثلاجة وإطالة عمرها' },
        { title: 'خدمة الطوارئ', description: 'استجابة فورية للأعطال العاجلة على مدار الساعة' }
      ]
    }
  }

  const currentService = services[activeService]

  useEffect(() => {
    // Add a smooth transition when service changes
    const detailedSection = document.getElementById('detailed-services')
    if (detailedSection) {
      detailedSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [activeService])

  if (!currentService) {
    return null
  }

  return (
    <section className="detailed-services" id="detailed-services">
      <div className="container">
        <h2 className="section-title">تفاصيل خدماتنا</h2>
        
        <div className={`service-details active`} data-service={activeService}>
          <div className="detailed-services-grid">
            <div className="detailed-card">
              <h2 className="section-title small">{currentService.title}</h2>
              <div className="service-image">
                <img src={currentService.image} alt={currentService.alt} />
              </div>
              <div className="service-text">
                <h3>{currentService.description}</h3>
                <ul>
                  {currentService.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="detailed-card">
              <h2 className="section-title small">أنواع الأعطال التي نصلحها</h2>
              <div className="problems-grid vertical">
                {currentService.problems.map((problem, index) => (
                  <div key={index} className="problem-card">
                    <h3>{problem.title}</h3>
                    <p>{problem.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="detailed-card">
              <h2 className="section-title small">لماذا تختارنا؟</h2>
              <div className="advantages vertical">
                {currentService.advantages.map((advantage, index) => (
                  <div key={index} className="advantage">
                    <h3>{advantage.title}</h3>
                    <p>{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailedServices