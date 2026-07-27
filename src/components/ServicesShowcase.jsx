import { Link } from 'react-router-dom'
import './ServicesShowcase.css'

function ServicesShowcase({ services, showHeader = true, showFooter = false }) {
  const sectionClass = [
    'service_area',
    'services_showcase',
    !showHeader ? 'services_showcase--page' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={sectionClass} id="services">
      <div className="container">
        {showHeader && (
          <div className="services_showcase_header section_title mb-50">
            <span className="services_showcase_label">What I Do</span>
            <h3>My Services</h3>
            <p>Design and development services focused on clean interfaces, performance, and great user experiences.</p>
          </div>
        )}

        <div className="services_showcase_grid">
          {services.map((service, index) => (
            <article key={service.id} className="services_card">
              <div className="services_card_top">
                <span className="services_card_index">{String(index + 1).padStart(2, '0')}</span>
                <div className="services_card_icon">
                  <img src={service.icon} alt="" aria-hidden="true" />
                </div>
              </div>

              <h4 className="services_card_title">{service.title}</h4>
              <p className="services_card_description">{service.description}</p>

              <div className="services_card_tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {showFooter && (
          <div className="services_showcase_footer">
            <Link className="boxed-btn3-line" to="/services">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicesShowcase
