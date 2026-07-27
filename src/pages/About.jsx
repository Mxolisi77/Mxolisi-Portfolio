import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'

function About() {
  return (
    <>
      <PageBanner title="Academic Qualifications" />
      <div className="service_area colord_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_service text-center">
                <div className="icon">
                  <img src="/img/svg_icon/2.svg" alt="Microsoft Azure Fundamentals (AZ-900)" />
                </div>
                <h3><strong>Microsoft Azure Fundamentals (AZ-900)</strong></h3>
                <p>Developed foundational knowledge of cloud computing, Microsoft Azure services, cloud security, governance, pricing models, and Azure architecture to support modern cloud-based solutions.</p>

              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_service text-center">
                <div className="icon">
                  <img src="/img/svg_icon/2.svg" alt="Microsoft Azure Data Fundamentals (DP-900)" />
                </div>
                <h3><strong>Microsoft Azure Data Fundamentals (DP-900)</strong></h3>
                <p>Gained foundational knowledge of data concepts, relational and non-relational databases, Azure data services, data analytics, storage solutions, and data visualization to support cloud-based data solutions.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_service text-center">
                <div className="icon">
                  <img src="/img/svg_icon/1.svg" alt="Microsoft Fabric Analytics Engineer (DP-700)" />
                </div>
                <h3><strong>Microsoft Fabric Analytics Engineer (DP-700)</strong></h3>
                <p>Gained practical knowledge of Microsoft Fabric analytics solutions, including data engineering, data pipelines, Lakehouse architecture, OneLake, data warehousing, real-time analytics, and Power BI for building modern data-driven solutions.</p>
              </div>
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
                  <img src="/img/service/1.png" alt="Product Packaging" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="service_text padding_left">
                  <h3><strong>Advanced Diploma in Computer Science</strong></h3>
                  <p>
                    Completed advanced studies in <strong>Machine Learning with Python, Enterprise JavaBeans (EJB 3) Development, Interaction Design (Human–Computer Interaction), Data Structures and Algorithms in Java, Software Engineering,</strong> and <strong>Theoretical Computer Science</strong>.
                  </p>
                  <p>
                    Developed strong analytical, problem-solving, and software development skills, with practical experience in designing, implementing, testing, and optimizing modern software applications using industry-standard tools and technologies.
                  </p>
                  <Link to="/works/1" className="boxed-btn3-line">
                    Tshwane University of Technology  -  2025
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="service_wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="service_text ">
                  <h3>Diploma in IT: Software Development</h3>
                  <p>
                    Completed studies in software development fundamentals, programming, database management, web development, software engineering, system analysis and design, object-oriented programming, and application development.
                  </p>
                  <p>
                    Developed practical skills in designing, coding, testing, and maintaining software solutions using programming languages, development frameworks, databases, and industry-standard development tools.
                  </p>
                  <Link to="/works/1" className="boxed-btn3-line">
                    Tshwane University of Technology - 2023
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
          <div className="service_wrap">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="thumb">
                  <img src="/img/service/2.png" alt="Mockup Design" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="service_text padding_left">
                  <h3><strong>National Senior Certificate (Admission to Bachelor’s Degree)</strong></h3>
                  <p>
                    Completed secondary education with subjects including <strong>Mathematics, Business Studies, Economics, Accounting, IsiZulu Home Language, and English First Additional Language</strong>.
                  </p>
                  <p>
                    Developed strong foundations in analytical thinking, financial principles, business management, communication, and problem-solving skills, preparing me for further studies in Information Technology and Computer Science
                  </p>
                  <Link to="/works/1" className="boxed-btn3-line">
                    Dr. SJ Baloyi High School - 2016
                  </Link>
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
