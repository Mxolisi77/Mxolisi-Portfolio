import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import './About.css'

const certifications = [
  {
    icon: '/img/svg_icon/2.svg',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    certificate: '/img/pdf/AZURE%20-900.pdf',
    description:
      'Developed foundational knowledge of cloud computing, Microsoft Azure services, cloud security, governance, pricing models, and Azure architecture to support modern cloud-based solutions.',
  },
  {
    icon: '/img/svg_icon/2.svg',
    title: 'Microsoft Azure Data Fundamentals (DP-900)',
    certificate: '/img/pdf/DP-900.pdf',
    description:
      'Gained foundational knowledge of data concepts, relational and non-relational databases, Azure data services, data analytics, storage solutions, and data visualization to support cloud-based data solutions.',
  },
  {
    icon: '/img/svg_icon/1.svg',
    title: 'Microsoft Fabric Analytics Engineer (DP-700)',
    certificate: '/img/pdf/DP-700.pdf',
    description:
      'Gained practical knowledge of Microsoft Fabric analytics solutions, including data engineering, data pipelines, Lakehouse architecture, OneLake, data warehousing, real-time analytics, and Power BI for building modern data-driven solutions.',
  },
  {
    icon: '/img/svg_icon/3.svg',
    title: 'NQF Level 4: Advertising',
    certificate: '/img/pdf/advertising.pdf',
    description:
      'Gained knowledge of advertising principles, marketing strategies, target audience analysis, branding, campaign planning, social media promotion, content creation, and evaluating advertising effectiveness.',
  },
]

function About() {
  const certificationTrackRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isTouching, setIsTouching] = useState(false)
  const isPaused = isHovered || isFocused || isTouching

  useEffect(() => {
    const track = certificationTrackRef.current
    if (!track || isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      const firstCard = track.querySelector('.certificate_slide')
      if (!firstCard) return

      const maxScroll = track.scrollWidth - track.clientWidth
      if (track.scrollLeft >= maxScroll - 2) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
        return
      }

      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
      track.scrollBy({
        left: firstCard.getBoundingClientRect().width + gap,
        behavior: 'smooth',
      })
    }, 4500)

    return () => window.clearInterval(intervalId)
  }, [isPaused])

  function moveCertifications(direction) {
    const track = certificationTrackRef.current
    const firstCard = track?.querySelector('.certificate_slide')
    if (!track || !firstCard) return

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: 'smooth',
    })
  }

  return (
    <>
      <PageBanner title="Academic Qualifications" />
      <div className="service_area colord_bg">
        <div className="container">
          <div
            className="certifications_carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false)
            }}
            onTouchStart={() => setIsTouching(true)}
            onTouchEnd={() => setIsTouching(false)}
            onTouchCancel={() => setIsTouching(false)}
          >
          <div className="certifications_header">
            <div className="section_title text-center certificates_title">
              <h3>Certificates &amp; Certifications</h3>
            </div>
            <div className="certifications_controls" aria-label="Certification carousel controls">
              <button
                type="button"
                aria-label="Previous certifications"
                onClick={() => moveCertifications(-1)}
              >
                <i className="fa fa-angle-left" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next certifications"
                onClick={() => moveCertifications(1)}
              >
                <i className="fa fa-angle-right" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div
            className="certifications_track"
            ref={certificationTrackRef}
            role="region"
            aria-label="Certificates and certifications"
            tabIndex={0}
          >
            {certifications.map((certification) => (
              <article className="certificate_slide" key={certification.title}>
                <div className="single_service text-center certificate_card">
                  <div className="icon">
                    <img src={certification.icon} alt="" aria-hidden="true" />
                  </div>
                  <h3><strong>{certification.title}</strong></h3>
                  <p>{certification.description}</p>
                  <a
                    className="certificate_view_link"
                    href={certification.certificate}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Certificate
                    <i className="fa fa-external-link" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          </div>
        </div>
      </div>
      <div className="service_products">
        <div className="container">
          <div className="service_wrap">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-5">
                <div className="thumb">
                  <img
                    className="qualification_certificate_image"
                    src="/img/pdf/Advance%20Diploma%20_page-0001.jpg"
                    alt="Advanced Diploma in Computer Science certificate"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="service_text qualification_detail">
                  <span className="qualification_detail_label">Qualification completed - 2025</span>
                  <h3 className="qualification_detail_title">
                    Advanced Diploma
                    <span>in Computer Science</span>
                  </h3>
                  <div className="qualification_topics_heading">
                    <h4>Core study areas</h4>
                    <span>06 areas</span>
                  </div>
                  <ul className="qualification_topics">
                    <li>Machine Learning with Python</li>
                    <li>Enterprise JavaBeans (EJB 3)</li>
                    <li>Interaction Design</li>
                    <li>Data Structures and Algorithms in Java</li>
                    <li>Software Engineering</li>
                    <li>Theoretical Computer Science</li>
                  </ul>
                  <p className="qualification_detail_summary">
                    The programme strengthened my analytical and software development skills, with
                    practical experience designing, implementing, testing, and optimizing modern
                    applications.
                  </p>
                  <a
                    className="qualification_institution qualification_institution--centered"
                    href="https://www.tut.ac.za/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="qualification_institution_mark" aria-hidden="true">TUT</span>
                    <span className="qualification_institution_content">
                      <span className="qualification_institution_label">Studied at</span>
                      <strong>Tshwane University of Technology</strong>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="service_wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="service_text qualification_detail">
                  <span className="qualification_detail_label">Qualification completed - 2023</span>
                  <h3 className="qualification_detail_title">
                    Diploma in IT:
                    <span>Software Development</span>
                  </h3>
                  <div className="qualification_topics_heading">
                    <h4>Core study areas</h4>
                    <span>08 areas</span>
                  </div>
                  <ul className="qualification_topics">
                    <li>Software Development Fundamentals</li>
                    <li>Programming</li>
                    <li>Database Management</li>
                    <li>Web Development</li>
                    <li>Software Engineering</li>
                    <li>System Analysis and Design</li>
                    <li>Object-Oriented Programming</li>
                    <li>Application Development</li>
                  </ul>
                  <p className="qualification_detail_summary">
                    Built practical skills in designing, coding, testing, and maintaining software
                    solutions with programming languages, frameworks, databases, and industry-standard
                    development tools.
                  </p>
                  <a
                    className="qualification_institution qualification_institution--centered"
                    href="https://www.tut.ac.za/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="qualification_institution_mark" aria-hidden="true">TUT</span>
                    <span className="qualification_institution_content">
                      <span className="qualification_institution_label">Studied at</span>
                      <strong>Tshwane University of Technology</strong>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="thumb padding_left">
                  <img
                    className="qualification_certificate_image"
                    src="/img/pdf/Diploma%20_page-0001.jpg"
                    alt="Diploma in IT: Software Development certificate"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="service_wrap">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="thumb">
                  <img
                    className="qualification_certificate_image"
                    src="/img/pdf/Matric%20_page-0001.jpg"
                    alt="National Senior Certificate"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="service_text qualification_detail qualification_detail--matric">
                  <span className="qualification_detail_label">Qualification completed - 2016</span>
                  <h3 className="qualification_detail_title qualification_detail_title--matric">
                    <span className="qualification_detail_title_main">National Senior Certificate</span>
                    <span className="qualification_detail_title_subtitle">
                      (Admission to Bachelor’s Degree)
                    </span>
                  </h3>
                  <div className="qualification_topics_heading">
                    <h4>Core subjects</h4>
                    <span>06 subjects</span>
                  </div>
                  <ul className="qualification_topics">
                    <li>Mathematics</li>
                    <li>Business Studies</li>
                    <li>Economics</li>
                    <li>Accounting</li>
                    <li>IsiZulu Home Language</li>
                    <li>English First Additional Language</li>
                  </ul>
                  <p className="qualification_detail_summary">
                    Developed strong foundations in analytical thinking, financial principles,
                    business management, communication, and problem-solving, preparing me for
                    further studies in Information Technology and Computer Science.
                  </p>
                  <div className="qualification_institution qualification_institution--school">
                    <span className="qualification_institution_content">
                      <span className="qualification_institution_label">Studied at</span>
                      <strong>Dr. SJ Baloyi High School</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
