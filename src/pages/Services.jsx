import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import ServicesShowcase from '../components/ServicesShowcase.jsx'
import services from '../data/services.js'

function Services() {
  return (
    <>
      <PageBanner title="My Services" />
      <ServicesShowcase services={services} showHeader={false} />
      <div className="service_products">
        <div className="container">
          <div className="service_wrap">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-5">
                <div className="thumb">
                  <img src="/img/service/1.png" alt="Product Packaging" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="service_text padding_left">
                  <h3>Product Packaging</h3>
                  <p>
                    Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante.
                    Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed
                    libero varius vulputate. Ut a mi tempus massa
                  </p>
                  <p>
                    Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante. Cras
                    pretium rutrum egestas. Integer ultrices libero sed justo vehicula, eget
                  </p>
                  <Link to="/works/1" className="boxed-btn3-line">
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="service_wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="service_text ">
                  <h3>Mockup Design</h3>
                  <p>
                    Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante.
                    Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed
                    libero varius vulputate. Ut a mi tempus massa
                  </p>
                  <p>
                    Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante. Cras
                    pretium rutrum egestas. Integer ultrices libero sed justo vehicula, eget
                  </p>
                  <Link to="/works/1" className="boxed-btn3-line">
                    View Project
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="thumb padding_left">
                  <img src="/img/service/2.png" alt="Mockup Design" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
