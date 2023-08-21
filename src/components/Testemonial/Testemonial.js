import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTestimonials } from "../../store/testimonialsSlice";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./testemonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialsSection() {
  const dispatch = useDispatch();
  const testimonials = useSelector((state) => state.testimonials);

  useEffect(() => {
    fetch("/testimonialsData.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setTestimonials(data.slides));
      });
  }, [dispatch]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="testimonials section-bg">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-header">
          <Container>
            <Row>
              <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>

               
              </div>
              </Col>
              <Col   lg="6" md="6">
              <Slider {...sliderSettings}>
          {console.log(testimonials)}
          {testimonials.data?.map((slide, index) => (
            <div className="testimonial-item" key={index}>
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-6">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      {slide.content}
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                    <h3>{slide.name}</h3>
                    <h4>{slide.role}</h4>
                    <div className="stars">
                      {Array.from({ length: slide.stars }, (_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 text-center">
                  <img
                    src={slide.image}
                    className="testimonial-img"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
              </Col>
            </Row>
          </Container>
        </div>

       
      </div>
    </section>
  );
}

export default TestimonialsSection;
