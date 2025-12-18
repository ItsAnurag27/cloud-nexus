function HeaderSidePanel() {
  return (
    <div>
      <div
        className="offcanvas offcanvas-end sidepanel-offcanvas  "
        tabIndex={-1}
        id="offcanvasRight"
        style={{ background: " #181818" }}
      >
        <div className="offcanvas-header ">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="offcanvas-body lenis-scroll-disable">
          <div className="body-inner">
            <div className="about-info">
              <h4 className="title mb-3 ">
                Creating a Scalable IT Infrastructure
              </h4>
              <p>
                The goal is to build a cost-efficient, reliable, and
                future-proof IT environment that can accommodate growth and
                evolving technology needs over time.
              </p>
            </div>
            <div className="socail-info">
              <ul className="socail-list-item">
                <li>
                <a href="https://www.instagram.com/cloudnexus.in?igsh=dHZzczFiMjByMXU3" target="_blank" rel="noopener noreferrer">

                    <i className="fa-brands fa-instagram " />
                    Instagram
                  </a>
                </li>
           
                <li>
                  <a
                    href="https://www.linkedin.com/company/cloudnexusorg/about/" target="_blank" rel="noopener noreferrer"
                    className="hover:!text-[#3663d8]"
                  >
                    <i className="fa-brands fab fa-linkedin" />
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-info">
              <span className="number"> +91 8793830447</span>
              <a className="mail" href="#">
                <i className="fa-regular fa-envelope" />
                work@cloudnexus.in{" "}
              </a>
              <span className="text">
                Looking for collaboration for your next creative project?
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSidePanel;
