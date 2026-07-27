function TestimonialCarousel() {
  const testimonials = [1, 2, 3]

  return (
    <div className="testimonial_area ">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="testmonial_active owl-carousel">
              {testimonials.map((item) => (
                <div key={item} className="single_carousel">
                  <div className="row">
                    <div className="col-xl-9 col-md-9">
                      <div className="single_testmonial">
                        <p>
                          “There are many variations of passages of Lorem Ipsum available, but the majority have
                          suffered alteration in some form by injected humour or randomised words which don’t look even
                          slightly believable. If you are going to use a passage.
                        </p>
                        <div className="testmonial_author">
                          <div className="thumb">
                            <img src="/img/case/testmonial.png" alt="Client quote" />
                          </div>
                          <div className="author_name">
                            <h3>Kalvin Piterson</h3>
                            <span>Business Owner</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCarousel;
