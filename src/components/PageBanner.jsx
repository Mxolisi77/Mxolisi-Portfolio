function PageBanner({ title }) {
  return (
    <div className="bradcam_area bradcam_bg_1">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
        className={`bradcam_text text-center${
          title === 'Academic Qualifications' || 
          title === 'Works' || 
          title === 'My Services' || 
          title === 'Contact' ? ' bradcam_text--animation' : ''
        }`}
            >
              <h3>{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageBanner;
