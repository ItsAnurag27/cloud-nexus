import React from 'react'
import brand_icon1 from '../assets/images/client-logo/brand-icon1.png'
import brand_icon2 from '../assets/images/client-logo/brand-icon2.png'
import brand_icon3 from '../assets/images/client-logo/brand-icon3.png'
import brand_icon4 from '../assets/images/client-logo/brand-icon4.png'
import brand_icon5 from '../assets/images/client-logo/brand-icon5.png'

function ClientLogo() {
  const logos = [
    { icon: brand_icon4, title: 'Data Science' },
    { icon: brand_icon1, title: 'System Design' },
    { icon: brand_icon2, title: 'UI/UX Design' },
    { icon: brand_icon4, title: 'Big Data' },
    { icon: brand_icon3, title: 'App Development' },
    { icon: brand_icon1, title: 'Web Development' },
    { icon: brand_icon2, title: 'Cloud & DevOps' },
    { icon: brand_icon5, title: 'Cybersecurity' },
  ];

  return (
    <div>
      <div className="space-medium-ptb">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-md-12">
              <div className="marquee-wrapper">
                <div className="marquee-inner">
                  {/* Render logos twice for continuous scroll effect */}
                  {[...logos, ...logos].map((logo, index) => (
                    <div className="marquee-item" key={index}>
                      <span className="icon">
                        <img className="img-fluid" src={logo.icon} alt={logo.title} />
                      </span>
                      <span className="title">{logo.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientLogo