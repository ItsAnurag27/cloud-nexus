import React from 'react'

function HeaderSidepanel() {
  return (
    <div>
      <div className="offcanvas offcanvas-end sidepanel-offcanvas" tabIndex={-1} id="offcanvasRight">
      <div className="offcanvas-header">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark" /></button>
      </div>
      <div className="offcanvas-body lenis-scroll-disable">
        <div className="body-inner">
          <div className="about-info">
            <h4 className="title mb-3">Scalable Busin s</h4>
            <p>Get the oars in the water and start rowing. Execution is the single biggest factor in achievement so the faster and better your execution.</p>
          </div>
          <div className="socail-info">
            <ul className="socail-list-item">
              <li><a href="#"><i className="fa-brands fa-facebook-f" />Facebook</a></li>
              <li><a href="#"><i className="fa-brands fa-instagram" />Instagram</a></li>
              <li><a href="#"><i className="fa-brands fa-x-twitter" />Twitter</a></li>
              <li><a href="#"><i className="fa-brands fa-dribbble" />Dribbble</a></li>
            </ul>
          </div>
          <div className="contact-info">
            <span className="number">+1 234 567 8910</span>
            <a className="mail" href="#"><i className="fa-regular fa-envelope" />info@gmail.com</a>
            <span className="text">Looking for collaboration for your next creative project?</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeaderSidepanel
