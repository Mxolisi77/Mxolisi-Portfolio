import { useState } from 'react'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <form className="form-contact contact_form" onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <textarea
                className="form-control w-100"
                name="message"
                id="message"
                cols="30"
                rows="9"
                placeholder="Enter Message"
                value={form.message}
                onChange={handleChange}
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
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
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
                placeholder="Enter email address"
                value={form.email}
                onChange={handleChange}
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
                placeholder="Enter Subject"
                value={form.subject}
                onChange={handleChange}
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
      {submitted && (
        <div className="alert alert-success mt-3" role="alert">
          Message sent successfully! (demo only)
        </div>
      )}
    </>
  )
}

export default ContactForm;
