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

function AboutSection() {
  return (
    <section className="download_area about_section" id="about">
      <div className="container">
        <div className="about_section_header">
          <span className="about_section_label">About Me</span>
          <h2>
            I&apos;m a UI/UX Designer &amp; Frontend Developer based in Gauteng, who loves clean,
            simple &amp; unique design. I also enjoy crafting meaningful digital experiences.
          </h2>
        </div>

        <div className="about_section_grid">
          <div className="about_section_content">
            <p>
              I am a Full-Stack Software Developer passionate about building modern, responsive,
              and user-focused web applications. I specialize in React, JavaScript, HTML, CSS,
              Tailwind CSS, Node.js, PostgreSQL, MongoDB, and RESTful APIs, creating scalable
              solutions that deliver excellent user experiences.
            </p>
            <p>
              With an Advanced Diploma in Computer Science, I enjoy turning ideas into real-world
              applications while continuously expanding my knowledge in Artificial Intelligence and
              modern web technologies. I am committed to writing clean, maintainable code and
              developing innovative solutions that make a meaningful impact.
            </p>

            <div className="about_section_tags">
              {techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="about_section_actions">
              <button type="button" className="boxed-btn3-line">
                Download CV
              </button>
              <Link className="about_section_link" to="/about">
                Learn More
              </Link>
            </div>
          </div>

          <div className="about_section_skills">
            <div className="about_section_skills_card">
              <h3>Core Skills</h3>
              <p>Design and development strengths I bring to every project.</p>

              <div className="about_section_skills_list">
                {skills.map((skill) => (
                  <div key={skill.label} className="about_section_skill">
                    <div className="about_section_skill_header">
                      <span>{skill.label}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="about_section_skill_track">
                      <div
                        className="about_section_skill_bar"
                        style={{ width: `${skill.value}%` }}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
