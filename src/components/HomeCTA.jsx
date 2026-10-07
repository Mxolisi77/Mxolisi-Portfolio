import { Link } from 'react-router-dom'
import './HomeCTA.css'

function HomeCTA() {
  return (
    <section className="home_cta">
      <div className="container">
        <div className="home_cta_inner">
          <div className="home_cta_glow" aria-hidden="true" />
          <span className="home_cta_label">Let&apos;s work together</span>
          <h2>Ready to bring your next idea to life?</h2>
          <p>
            From concept to launch, I help brands and teams build modern websites and digital
            products with clarity, speed, and polish.
          </p>
          <div className="home_cta_actions">
            <Link className="boxed-btn3-line" to="/contact">
              Start a Project
            </Link>
            <Link className="home_cta_link" to="/works">
              Explore My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCTA
