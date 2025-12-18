import { Link } from "react-router-dom";
import logo from "../assets/images/logo2.png";
function Mainmanuoffcanvas() {
  return (
    <>
      <div
        className="offcanvas main-menu-offcanvas offcanvas-end"
        tabIndex={-1}
        id="menuOffcanvas"
        aria-labelledby="menuOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <Link id="menuOffcanvasLabel" className="navbar-brand" to="/">
            <img className="img-fluid" style={{width:"270px"}} src={logo} alt="logo" />
          </Link>
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
            <nav className="navbar">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                
                    <li>
                      <Link className="dropdown-item  " to="/about-us">
                        About Us
                      </Link>
                    </li>
                  
                  
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="/services"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Service
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/services/app-development"
                      >
                        App Development
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/services/data-science"
                      >
                        Data Science
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/services/cloud-devops"
                      >
                        Cloud & DevOps
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/services/iot-automation"
                      >
                        IoT & Automation
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        className="dropdown-item"
                        to="/services/wordpress-development"
                      >
                        WordPress Development
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/services/system-design"
                      >
                        System Design
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/big-data">
                        Big Data
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/ui-ux">
                        UI/UX
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/services/cybersecurity"
                      >
                        Cybersecurity
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <Link className="nav-link  " to="/careers">
                    Careers
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="bottom-info">
              <div className="contact-info">
                <span className="number">  +91 8793830447</span>
                <a className="mail" href="#">
                  <i className="fa-regular fa-envelope" />
                 work@cloudnexus.in
                </a>
                <span className="text">
                  Looking for collaboration for your next creative project?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainmanuoffcanvas;
