import { useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CountUp from './CountUp.jsx'
import './HeroSection.css'

function HeroSection({ projectCount = 4, serviceCount = 3 }) {
  const photoRef = useRef(null)
  const targetTilt = useRef({ x: 0, y: 0 })
  const currentTilt = useRef({ x: 0, y: 0 })

  useEffect(() => {
    let frameId = 0

    const animateTilt = () => {
      currentTilt.current.x += (targetTilt.current.x - currentTilt.current.x) * 0.14
      currentTilt.current.y += (targetTilt.current.y - currentTilt.current.y) * 0.14

      if (photoRef.current) {
        photoRef.current.style.transform = `perspective(1200px) rotateX(${currentTilt.current.x.toFixed(2)}deg) rotateY(${currentTilt.current.y.toFixed(2)}deg)`
      }

      frameId = requestAnimationFrame(animateTilt)
    }

    frameId = requestAnimationFrame(animateTilt)
    return () => cancelAnimationFrame(frameId)
  }, [])

  const handlePointerMove = useCallback((event) => {
    const frame = photoRef.current
    if (!frame) return

    const rect = frame.getBoundingClientRect()
    const pointerX = (event.clientX - rect.left) / rect.width - 0.5
    const pointerY = (event.clientY - rect.top) / rect.height - 0.5

    targetTilt.current = {
      x: pointerY * -14,
      y: pointerX * 14,
    }
  }, [])

  const handlePointerLeave = useCallback(() => {
    targetTilt.current = { x: 0, y: 0 }
  }, [])

  return (
    <section className="hero_section slider_area">
      <div className="hero_section_bg slider_bg_1">
        <div className="hero_section_overlay" aria-hidden="true" />
        <div className="hero_section_grain" aria-hidden="true" />
        <div className="hero_section_orbs" aria-hidden="true">
          <span className="hero_section_orb hero_section_orb--1" />
          <span className="hero_section_orb hero_section_orb--2" />
          <span className="hero_section_orb hero_section_orb--3" />
        </div>

        <div className="container">
          <div className="hero_section_inner">
            <div className="hero_section_content">
              <div className="hero_section_content_glow" aria-hidden="true" />

              <span className="hero_section_badge hero_content_reveal hero_content_reveal--1">
                <span className="hero_section_badge_dot" aria-hidden="true" />
                Available for freelance work
              </span>

              <h1 className="hero_section_title hero_content_reveal hero_content_reveal--2">
                Hi, I&apos;m{' '}
                <span className="hero_section_name mxolisi_name_motion">Mxolisi</span>
              </h1>

              <p className="hero_section_role hero_content_reveal hero_content_reveal--3">
                <span className="hero_section_role_text">UI/UX Designer &amp; Frontend Developer</span>
              </p>

              <p className="hero_section_description hero_content_reveal hero_content_reveal--4">
                I design and build digital products that people love to use — fast, clean,
                and accessible.
              </p>

              <div className="hero_section_actions hero_content_reveal hero_content_reveal--5">
                <Link className="boxed-btn3-line hero_section_btn_primary" to="/works">
                  View Works
                </Link>
                <Link className="hero_section_btn_secondary" to="/contact">
                  Get in Touch
                </Link>
              </div>

              <div className="hero_section_stats">
                <div className="hero_section_stat_card hero_section_stat_card--1">
                  <CountUp end={projectCount} suffix="+" />
                  <span>Projects</span>
                </div>
                <div className="hero_section_stat_card hero_section_stat_card--2">
                  <CountUp end={serviceCount} />
                  <span>Services</span>
                </div>
                <div className="hero_section_stat_card hero_section_stat_card--3">
                  <CountUp end={100} suffix="%" />
                  <span>Client Focus</span>
                </div>
              </div>
            </div>

            <div
              className="hero_section_visual hero_section_animate hero_section_animate--delay"
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
            >
              <div className="hero_section_photo_stage">
                <span className="hero_section_ring hero_section_ring--outer" aria-hidden="true" />
                <span className="hero_section_ring hero_section_ring--inner" aria-hidden="true" />

                <div ref={photoRef} className="hero_section_photo_tilt">
                  <div className="hero_section_photo_frame">
                    <div className="hero_section_photo_glow" aria-hidden="true" />
                    <div className="hero_section_photo_shine" aria-hidden="true" />
                    <img src="/img/about/Mxo.png" alt="Mxolisi" />
                  </div>
                </div>

                <div className="hero_section_float_card hero_section_float_card--top">
                  <span>UI/UX</span>
                  <strong>Design</strong>
                </div>
                <div className="hero_section_float_card hero_section_float_card--bottom">
                  <span>Frontend</span>
                  <strong>Developer</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
