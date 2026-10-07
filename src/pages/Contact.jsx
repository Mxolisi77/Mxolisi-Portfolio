import PageBanner from '../components/PageBanner.jsx'
import './Contact.css'

function Contact() {
  return (
    <>
      <PageBanner title="Contact" />
      <section className="contact-page-section">
        <div className="container">
          <div className="contact-page-layout">
            <div className="contact-page-intro">
              <span className="contact-page-eyebrow">Let&apos;s connect</span>
              <h2>
                Have an idea? <em>Let&apos;s make it real.</em>
              </h2>
              <p className="contact-page-lead">
                I&apos;m happy to discuss projects, software solutions, and opportunities to create
                something meaningful together.
              </p>

              <div className="contact-page-availability">
                <div>
                  <span className="contact-page-status" aria-hidden="true" />
                  <strong>Fast response</strong>
                  <p>Usually within 1 business day</p>
                </div>
                <div>
                  <strong>Remote ready</strong>
                  <p>Available for online collaboration</p>
                </div>
              </div>

              <div className="contact-page-details" aria-label="Contact details">
                <div className="contact-page-detail">
                  <span className="contact-page-detail-icon" aria-hidden="true">
                    <i className="ti-home" />
                  </span>
                  <div>
                    <span className="contact-page-detail-label">Based in</span>
                    <strong>Pretoria, South Africa</strong>
                    <p>Available for remote and in-person meetings</p>
                  </div>
                </div>
                <a className="contact-page-detail" href="tel:+2779107772">
                  <span className="contact-page-detail-icon" aria-hidden="true">
                    <i className="ti-tablet" />
                  </span>
                  <span>
                    <span className="contact-page-detail-label">Call me</span>
                    <strong>079 107 7772</strong>
                    <span className="contact-page-detail-note">Mon to Fri, 9am to 6pm</span>
                  </span>
                </a>
                <a className="contact-page-detail" href="mailto:Mxolisizwane07@gmail.com">
                  <span className="contact-page-detail-icon" aria-hidden="true">
                    <i className="ti-email" />
                  </span>
                  <span>
                    <span className="contact-page-detail-label">Email</span>
                    <strong>Mxolisizwane07@gmail.com</strong>
                    <span className="contact-page-detail-note">Send your message anytime</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="contact-page-form-panel">
              <div className="contact-page-form-heading">
                <span>Project inquiry</span>
                <h3>Tell me what you&apos;re planning.</h3>
                <p>I&apos;ll get back to you as soon as I can.</p>
              </div>
              <form className="contact-page-form form-contact contact_form" id="contactForm" noValidate>
                <div className="contact-page-fields">
                  <div className="contact-page-field contact-page-field--wide">
                    <label htmlFor="message">Project details</label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="5"
                      placeholder="Tell me about your project"
                    />
                  </div>
                  <div className="contact-page-field">
                    <label htmlFor="name">Your name</label>
                    <input
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="e.g. Alex Morgan"
                    />
                  </div>
                  <div className="contact-page-field">
                    <label htmlFor="email">Email address</label>
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="contact-page-field contact-page-field--wide">
                    <label htmlFor="subject">Subject</label>
                    <input
                      className="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      placeholder="What would you like to work on?"
                    />
                  </div>
                </div>
                <button type="submit" className="contact-page-submit">
                  Send Message
                  <i className="ti-arrow-right" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;
