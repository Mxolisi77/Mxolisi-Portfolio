import { Link } from 'react-router-dom'

function GalleryItem({ image, title, category, to }) {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="single_gallery">
        <div className="thumb">
          <img src={image} alt={title} />
        </div>
        <div className="gallery_heading">
          <span>{category}</span>
          <Link to={to}>
            <h4>{title}</h4>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GalleryItem;
