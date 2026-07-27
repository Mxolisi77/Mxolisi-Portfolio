import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="header-area ">
        <div id="sticky-header" className="main-header-area">
          <div className="container-fluid ">
            <div className="header_bottom_border">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <Link to="/" className="logo-text">
                      Mxolisi.
                    </Link>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="main-menu  d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <Link to="/">home</Link>
                        </li>
                        <li>
                          <Link to="/works">Works</Link>
                        </li>
                        <li>
                          <Link to="/services">Services</Link>
                        </li>
                        <li>
                          <Link to="/about">about</Link>
                        </li>
                        <li>
                          <span>
                            blog <i className="ti-angle-down" />
                          </span>
                          <ul className="submenu">
                            <li>
                              <Link to="/blog">blog</Link>
                            </li>
                            <li>
                              <Link to="/single-blog">single-blog</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                  <div className="Appointment">
                    <div className="book_btn d-none d-lg-block">
                      <Link to="/contact">Let’s Talk</Link>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
