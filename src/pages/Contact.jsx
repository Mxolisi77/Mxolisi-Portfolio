import PageBanner from '../components/PageBanner.jsx'

function Contact() {
  return (
    <>
      <PageBanner title="Contact" />
      <section className="contact-page-section">
        <div className="container">
          <div className="contact-hero-card">
            <div className="contact-hero-content">
              <span className="contact-eyebrow">Let&apos;s connect</span>
              <h2>Reach out for collaborations, projects, or a quick conversation.</h2>
              <p>
                I&apos;m always happy to discuss ideas, software solutions, and opportunities to create something meaningful together.
              </p>
            </div>
            <div className="contact-highlight-list">
              <div className="contact-highlight-item">
                <strong>Fast response</strong>
                <span>Usually within 1 business day</span>
              </div>
              <div className="contact-highlight-item">
                <strong>Remote ready</strong>
                <span>Available for online collaboration</span>
              </div>
            </div>
          </div>

          <div className="row contact-main-grid">
            <div className="col-lg-5">
              <div className="contact-sidebar">
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-home" />
                  </span>
                  <div className="media-body">
                    <h3>Pretoria, South Africa</h3>
                    <p>Available for remote and in-person meetings</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-tablet" />
                  </span>
                  <div className="media-body">
                    <h3>079 107 7772</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-email" />
                  </span>
                  <div className="media-body">
                    <h3>Mxolisizwane07@gmail.com</h3>
                    <p>Send your message anytime</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form className="contact-form-card form-contact contact_form" id="contactForm" noValidate>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="8"
                        placeholder="Tell me about your project"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="button button-contactForm btn_4 boxed-btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;
