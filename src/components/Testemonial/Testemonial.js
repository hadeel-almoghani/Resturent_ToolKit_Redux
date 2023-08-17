import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTestimonials } from '../../store/testimonialsSlice';
import './testemonial.css'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TestimonialsSection() {
  const dispatch = useDispatch();
  const testimonials = useSelector(state => state.testimonials); 

  useEffect(() => {
    fetch('/testimonialsData.json') 
      .then(response => response.json())
      .then(data => {
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
          <h2>{testimonials.sectionTitle}</h2>
          <p>{testimonials.sectionSubtitle}</p>
        </div>
        
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
                    className="img-fluid testimonial-img"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TestimonialsSection;
