import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'

const blogItems = [1, 2, 3, 4, 5]

function Blog() {
  return (
    <>
      <PageBanner title="blog" />
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {blogItems.map((item) => (
                  <article key={item} className="blog_item">
                    <div className="blog_item_img">
                      <img className="card-img rounded-0" src={`/img/blog/single_blog_${item}.png`} alt="Blog item" />
                      <div className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </div>
                    </div>
                    <div className="blog_details">
                      <Link className="d-inline-block" to="/single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </Link>
                      <p>
                        That dominion stars lights dominion divide years for fourth have don't stars is that he
                        earth it first without heaven in place seed it second morning saying.
                      </p>
                      <ul className="blog-info-link">
                        <li>
                          <span>
                            <i className="fa fa-user" /> Travel, Lifestyle
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
                ))}
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <button type="button" className="page-link" aria-label="Previous">
                        <i className="ti-angle-left" />
                      </button>
                    </li>
                    <li className="page-item">
                      <button type="button" className="page-link">
                        1
                      </button>
                    </li>
                    <li className="page-item active">
                      <button type="button" className="page-link">
                        2
                      </button>
                    </li>
                    <li className="page-item">
                      <button type="button" className="page-link" aria-label="Next">
                        <i className="ti-angle-right" />
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Search Keyword" />
                      <div className="input-group-append">
                        <button className="btn" type="button">
                          <i className="ti-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="button">
                    Search
                  </button>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog;
