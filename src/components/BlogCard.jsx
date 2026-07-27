import { Link } from 'react-router-dom'

function BlogCard({ image, title, category }) {
  return (
    <article className="blog_item">
      <div className="blog_item_img">
        <img className="card-img rounded-0" src={image} alt={title} />
        <Link to="/single-blog" className="blog_item_date">
          <h3>15</h3>
          <p>Jan</p>
        </Link>
      </div>
      <div className="blog_details">
        <Link className="d-inline-block" to="/single-blog">
          <h2>{title}</h2>
        </Link>
        <p>
          That dominion stars lights dominion divide years for fourth have don't stars is that he earth it
          first without heaven in place seed it second morning saying.
        </p>
        <ul className="blog-info-link">
          <li>
            <span>
              <i className="fa fa-user" /> {category}
            </span>
          </li>
          <li>
            <span>
              <i className="fa fa-comments" /> 03 Comments
            </span>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default BlogCard;
