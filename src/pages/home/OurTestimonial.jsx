import React from 'react'
import subtitleIcon from '../../assets/images/subtitle-icon.png'
import quoteIcon from '../../assets/images/quote-icon-01.png'

function OurTestimonial() {
  const testimonials = [
    {
      id: 1,
      name: 'Key Benefits',
      position: 'Administrator',
      rating: 4,
      content: 'The IT-Hub database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead.'
    },
    {
      id: 2,
      name: 'Joanna williams',
      position: 'Consultant',
      rating: 4,
      content: 'The IT-Hub database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead.'
    },
    {
      id: 3,
      name: 'Anne Smith',
      position: 'Officer',
      rating: 4,
      content: 'The IT-Hub database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead.'
    },
    {
      id: 4,
      name: 'John Doe',
      position: 'Director',
      rating: 4,
      content: 'The IT-Hub database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead.'
    }
  ]

  const TestimonialCard = ({ testimonial }) => (
    <div className="item">
      <div className="testimonial-wrapper testimonial-style-2">
        <div className="testimonial-ratings">
          {[...Array(testimonial.rating)].map((_, i) => (
            <i key={i} className="fa-solid fa-star" />
          ))}
          {[...Array(5 - testimonial.rating)].map((_, i) => (
            <i key={i + testimonial.rating} className="fa-regular fa-star" />
          ))}
        </div>
        <div className="testimonial-quote">
          <img className="img-fluid" src={quoteIcon} alt="quote" />
        </div>
        <div className="testimonial-content">
          <p>{testimonial.content}</p>
        </div>
        <div className="testimonial-author">
          <div className="author-info">
            <h6 className="author-name">{testimonial.name}</h6>
            <span className="author-position">{testimonial.position}</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <section className="space-ptb testimonial-section overflow-hidden ellipse-top bg-black z-index-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="section-title text-center">
                <span className="sub-title justify-content-center">
                  <img className="img-fluid" src={subtitleIcon} alt="subtitle icon" /> Our Testimonial
                </span>
                <h2 className="title">Over 500 clients and 5,000 projects across the globe.</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-md-11">
              <div className="owl-carousel slider-overflow" 
                data-cursor-type="text" 
                data-custom-text="Drag" 
                data-nav-arrow="false" 
                data-items={2} 
                data-lg-items={1} 
                data-md-items={1} 
                data-sm-items={1} 
                data-space={50}>
                {testimonials.map(testimonial => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurTestimonial