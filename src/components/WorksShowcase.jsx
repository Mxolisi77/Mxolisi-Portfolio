import { Link } from 'react-router-dom'
import './WorksShowcase.css'

function WorksShowcase({ works, showHeader = true, showFooter = true, id = 'works' }) {
  const sectionClass = [
    'gallery_area',
    'works_showcase',
    !showHeader ? 'works_showcase--page' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={sectionClass} id={id}>
      <div className="container">
        {showHeader && (
          <div className="row">
            <div className="col-xl-12">
              <div className="works_showcase_header section_title mb-50">
                <span className="works_showcase_label">Portfolio</span>
                <h3>My Works</h3>
                <p>Websites and dashboards crafted with clean design and solid code.</p>
              </div>
            </div>
          </div>
        )}

        <div className="works_showcase_grid">
          {works.map((item, index) => (
            <Link
              key={item.id}
              to={`/works/${item.id}`}
              className={`works_card${index === 0 ? ' works_card--featured' : ''}`}
            >
              <div className="works_card_media">
                <img src={item.thumbnail} alt={item.title} loading="lazy" />
                <div className="works_card_overlay" aria-hidden="true">
                  <span className="works_card_view">
                    View Project
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="works_card_body">
                <div className="works_card_meta">
                  <span className="works_card_index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="works_card_category">{item.category}</span>
                </div>
                <h4 className="works_card_title">{item.title}</h4>
              </div>
            </Link>
          ))}
        </div>

        {showFooter && (
          <div className="works_showcase_footer">
            <Link className="boxed-btn3-line" to="/works">
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default WorksShowcase
