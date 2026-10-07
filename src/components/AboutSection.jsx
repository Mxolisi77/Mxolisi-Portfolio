import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './AboutSection.css'

const skills = [
  { label: 'Wireframing', value: 70 },
  { label: 'UI/UX', value: 62 },
  { label: 'Interaction design', value: 45 },
]

const techStack = [
  'React',
  'JavaScript',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Tailwind CSS',
]

function AboutSection({ showLearnMore = true }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-inview')
          observer.disconnect()
        }
      },
      { threshold: 0.18 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="download_area about_section" id="about">
      <div className="container">
        <div className="about_section_grid">
          <figure className="about_section_portrait">
            <img src="/img/about/Mxo.png" alt="Portrait of the developer" />
            <figcaption>
              <span className="about_section_status" aria-hidden="true" />
              Gauteng, South Africa
            </figcaption>
          </figure>

          <div className="about_section_story">
            <span className="about_section_label">About Me</span>
            <h2>
              I build <em>thoughtful digital experiences</em> from idea to launch.
            </h2>
            <p className="about_section_lead">
              Full-Stack Software Developer focused on modern, responsive, user-first web
              applications.
            </p>
            <p>
              I work across React, JavaScript, HTML, CSS, Tailwind CSS, Node.js, PostgreSQL,
              MongoDB, and RESTful APIs to create scalable products with a clear, considered
              interface.
            </p>
            <p>
              With an Advanced Diploma in Computer Science, I enjoy turning ideas into real-world
              applications. I’m continually exploring AI and modern web technologies, while staying
              committed to clean, maintainable code and work that makes a meaningful impact.
            </p>

            <div className="about_section_tags" aria-label="Technologies">
              {techStack.map((tech, index) => (
                <span key={tech} style={{ '--i': index }}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="about_section_actions">
              <a
                className="boxed-btn3-line"
                href="/img/pdf/MXOLISI%20ZWANE%20CV.pdf"
                download="MXOLISI ZWANE CV.pdf"
              >
                Download CV
              </a>
              {showLearnMore && (
                <Link className="about_section_link" to="/about">
                  Learn More
                </Link>
              )}
            </div>
          </div>
        </div>

        <aside className="about_section_skills" aria-labelledby="about-skills-title">
          <div className="about_section_skills_intro">
            <span className="about_section_label">What I bring</span>
            <h3 id="about-skills-title">Core Skills</h3>
            <p>Design and development strengths I bring to every project.</p>
          </div>
          <div className="about_section_skills_list">
            {skills.map((skill, index) => (
              <div key={skill.label} className="about_section_skill" style={{ '--i': index }}>
                <div className="about_section_skill_header">
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="about_section_skill_track">
                  <div
                    className="about_section_skill_bar"
                    style={{ '--skill-value': `${skill.value}%` }}
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={skill.label}
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

export default AboutSection
