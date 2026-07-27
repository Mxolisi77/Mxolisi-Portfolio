import { Link, Navigate, useParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import { getWorkById } from '../data/works.js'
import './WorkDetails.css'

function DetailSection({ title, paragraphs }) {
  return (
    <div className="single_details">
      <h3>{title}</h3>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  )
}

function WorkDetails() {
  const { id } = useParams()
  const work = getWorkById(id)

  if (!work) {
    return <Navigate to="/works" replace />
  }

  const galleryImages = work.gallery?.length ? work.gallery : [work.thumbnail]

  return (
    <>
      <PageBanner title={work.title} />
      <div className="projects_details_area work_details">
        <div className="container">
          <div className="details_info">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11">
                <div className="work_details_gallery">
                  <div className="work_details_gallery_header">
                    <h3>Project Gallery</h3>
                    <p>Screenshots and views from the finished project.</p>
                  </div>
                  <div className="work_details_gallery_grid">
                    {galleryImages.map((image, index) => (
                      <div key={image} className="work_details_gallery_item">
                        <img
                          src={image}
                          alt={`${work.title} screenshot ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-8 col-md-10">
                <div className="work_details_content">
                  <div className="work_details_intro">
                    <span className="work_details_category">{work.category}</span>
                    <h2>{work.title}</h2>
                  </div>

                  <DetailSection title="Overview" paragraphs={work.overview} />
                  <DetailSection title="Problem" paragraphs={work.problem} />
                  <DetailSection title="Solution" paragraphs={work.solution} />

                  {work.projectUrl && (
                    <div className="button_link">
                      <a
                        href={work.projectUrl}
                        className="boxed-btn3-line"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Project Link
                      </a>
                    </div>
                  )}
                </div>

                <div className="work_details_back">
                  <Link className="boxed-btn3-line" to="/works">
                    Back to Works
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

export default WorkDetails
