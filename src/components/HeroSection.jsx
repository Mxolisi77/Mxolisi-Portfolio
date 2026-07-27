import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero_section slider_area">
      <div className="hero_section_bg slider_bg_1">
        <div className="hero_section_overlay" aria-hidden="true" />
        <div className="container">
          <div className="hero_section_inner">
            <div className="hero_section_content">
              <span className="hero_section_badge">Available for freelance work</span>

              <h1 className="hero_section_title">
                Hi, I&apos;m <span className="hero_section_name">Mxolisi</span>
              </h1>

              <p className="hero_section_role">
                UI/UX Designer &amp; Frontend Developer
              </p>

              <p className="hero_section_description">
                I design and build digital products that people love to use — fast, clean,
                and accessible.
              </p>

              <div className="hero_section_actions">
                <Link className="boxed-btn3-line hero_section_btn_primary" to="/works">
                  View Works
                </Link>
                <Link className="hero_section_btn_secondary" to="/contact">
                  Get in Touch
                </Link>
              </div>

              <div className="hero_section_tags" aria-label="Skills">
                <span>React</span>
                <span>UI/UX</span>
                <span>Web Design</span>
              </div>
            </div>

            <div className="hero_section_visual">
              <div className="hero_section_photo_frame">
                <div className="hero_section_photo_glow" aria-hidden="true" />
                <img src="/img/about/Mxo.png" alt="Mxolisi" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
