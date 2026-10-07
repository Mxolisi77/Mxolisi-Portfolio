import { Link } from 'react-router-dom'
import './Footer.css'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: 'fa-github',
    external: true,
  },
  {
    label: 'Portfolio',
    href: '/works',
    icon: 'fa-briefcase',
    external: false,
  },
  {
    label: 'Email',
    href: '/contact',
    icon: 'fa-envelope',
    external: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'fa-linkedin',
    external: true,
  },
]

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Works', to: '/works' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Footer() {
  return (
    <footer className="site_footer">
      <div className="site_footer_glow" aria-hidden="true" />

      <div className="container">
        <div className="site_footer_main">
          <div className="site_footer_links">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site_footer_social">
            <h3>Connect</h3>
            <div className="site_footer_social_grid">
              {socialLinks.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="site_footer_social_card"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="site_footer_social_icon">
                      <i className={`fa ${item.icon}`} aria-hidden="true" />
                    </span>
                    <span className="site_footer_social_label">{item.label}</span>
                  </a>
                ) : (
                  <Link key={item.label} to={item.href} className="site_footer_social_card">
                    <span className="site_footer_social_icon">
                      <i className={`fa ${item.icon}`} aria-hidden="true" />
                    </span>
                    <span className="site_footer_social_label">{item.label}</span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
