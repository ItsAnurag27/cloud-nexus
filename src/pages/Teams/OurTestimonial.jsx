import React from 'react';
import Slider from 'react-slick';
import TestimonialItem from "../../components/TestimonialItem";
import subtitleIcon from '../../assets/images/subtitle-icon.png';
import quoteIcon from '../../assets/images/quote-icon-01.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function OurTestimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimonials = [
    {
      rating: 4,
      quoteSrc: quoteIcon,
      content: "The IT-Hub database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead.",
      name: "Key Benefits",
      position: "Administrator",
    },
    {
      rating: 4,
      quoteSrc: quoteIcon,
      content: "The IT-Hub database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead.",
      name: "Joanna Williams",
      position: "Consultant",
    },
    {
      rating: 1,
      quoteSrc: quoteIcon,
      content: "The IT-Hub database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead.",
      name: "Anne Smith",
      position: "Officer",
    },
    {
      rating: 4,
      quoteSrc: quoteIcon,
      content: "The IT-Hub database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead.",
      name: "John Doe",
      position: "Director",
    },
  ];

  return (
    <section className="space-ptb testimonial-section overflow-hidden ellipse-top bg-dark">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-10">
            <div className="section-title text-center">
              <span className="sub-title d-flex align-items-center justify-content-center">
                <img className="img-fluid me-2" src={subtitleIcon} alt="Our Testimonial Icon" />
                Our Testimonial
              </span>
              <h2 className="title text-white">
                Over 500 clients and 2,000 projects across the globe.
              </h2>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-md-11">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <TestimonialItem
                  key={index}
                  rating={testimonial.rating}
                  quoteSrc={testimonial.quoteSrc}
                  content={testimonial.content}
                  name={testimonial.name}
                  position={testimonial.position}
                />
              ))}
            </Slider>
          </div>
        </div>
     
      </div>
    </section>
  );
}

export default OurTestimonial;

