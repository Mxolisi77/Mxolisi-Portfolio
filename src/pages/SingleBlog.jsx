import PageBanner from '../components/PageBanner.jsx'

function SingleBlog() {
  return (
    <>
      <PageBanner title="single blog" />
      <section className="blog_area single-post-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post">
                <div className="feature-img">
                  <img className="img-fluid" src="/img/blog/single_blog_1.png" alt="Blog post" />
                </div>
                <div className="blog_details">
                  <h2>
                    Second divided from form fish beast made every of seas all gathered us saying he our
                  </h2>
                  <ul className="blog-info-link mt-3 mb-4">
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
                  <p className="excert">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                    should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                    fraction of the camp price. However, who has the willpower
                  </p>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                    should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                    fraction of the camp price. However, who has the willpower to actually sit through a self-imposed
                    MCSE training. who has the willpower to actually
                  </p>
                  <div className="quote-wrapper">
                    <div className="quotes">
                      MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                      should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                      fraction of the camp price. However, who has the willpower to actually sit through a self-imposed
                      MCSE training.
                    </div>
                  </div>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                    should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                    fraction of the camp price. However, who has the willpower
                  </p>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                    should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                    fraction of the camp price. However, who has the willpower to actually sit through a self-imposed
                    MCSE training. who has the willpower to actually
                  </p>
                </div>
              </div>
              <div className="navigation-top">
                <div className="d-sm-flex justify-content-between text-center">
                  <p className="like-info">
                    <span className="align-middle">
                      <i className="fa fa-heart" />
                    </span>{' '}
                    Lily and 4 people like this
                  </p>
                  <div className="col-sm-4 text-center my-2 my-sm-0" />
                  <ul className="social-icons">
                    <li>
                      <button type="button" className="icon-button">
                        <i className="fa fa-facebook-f" />
                      </button>
                    </li>
                    <li>
                      <button type="button" className="icon-button">
                        <i className="fa fa-twitter" />
                      </button>
                    </li>
                    <li>
                      <button type="button" className="icon-button">
                        <i className="fa fa-dribbble" />
                      </button>
                    </li>
                    <li>
                      <button type="button" className="icon-button">
                        <i className="fa fa-behance" />
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="navigation-area">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                      <div className="thumb">
                        <button type="button" className="icon-link">
                          <img className="img-fluid" src="/img/post/preview.png" alt="Previous post" />
                        </button>
                      </div>
                      <div className="arrow">
                        <button type="button" className="icon-link">
                          <span className="lnr text-white ti-arrow-left" />
                        </button>
                      </div>
                      <div className="detials">
                        <p>Prev Post</p>
                        <button type="button" className="button-link">
                          <h4>Space The Final Frontier</h4>
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                      <div className="detials">
                        <p>Next Post</p>
                        <button type="button" className="button-link">
                          <h4>Telescopes 101</h4>
                        </button>
                      </div>
                      <div className="arrow">
                        <button type="button" className="icon-link">
                          <span className="lnr text-white ti-arrow-right" />
                        </button>
                      </div>
                      <div className="thumb">
                        <button type="button" className="icon-link">
                          <img className="img-fluid" src="/img/post/next.png" alt="Next post" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-author">
                <div className="media align-items-center">
                  <img src="/img/blog/author.png" alt="Author" />
                  <div className="media-body">
                    <button type="button" className="button-link">
                      <h4>Harvard milan</h4>
                    </button>
                    <p>
                      Second divided from form fish beast made. Every of seas all gathered use saying you're, he
                      our dominion twon Second divided from
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleBlog;
