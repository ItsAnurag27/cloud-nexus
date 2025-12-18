import { Link } from "react-router-dom";
import logo from "../assets/images/logo2.png";

function Header() {
  return (
    <div>
      <header className="header header-default header-sticky header-absolute custom-header">
        <div className="header-inner">
          <div className="site-logo">
            <Link className="navbar-brand" to="/">
              <img className="img-fluid" src={logo} alt="logo" style={{height:"40px", width:"250px"}} />
            </Link>
          </div>
          <div className="site-menu d-none d-xl-block ">
            <ul className="main-menu  " >
              {/* <li className="nav-item  ">
                <Link className="nav-link" to="#">
                  Company
                  <i className="fa-solid fa-chevron-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link className="nav-link" to="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/team">
                      Our Team
                    </Link>
                  </li>
                </ul>
                
              </li> */}
   <li className="nav-item  ">
                <Link className="nav-link !text-[1.5rem]" to="/about-us">
                About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link !text-[1.5rem]" to="/services">
                  Services <i className="fa-solid fa-chevron-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link className="nav-link" to="/services/app-development">
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/services/web-development">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/services/data-science">
                      Data Science
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/services/cloud-devops">
                      Cloud & DevOps
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/services/iot-automation">
                      IoT & Automation
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className="nav-link"
                      to="/services/wordpress-development"
                    >
                      WordPress Development
                    </Link>
                  </li> */}
                  <li>
                    <Link className="nav-link" to="/services/system-design">
                      System Design
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/services/big-data">
                      Big Data
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/services/ui-ux">
                      UI/UX
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/services/cybersecurity">
                      Cybersecurity
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item ">
                <Link className="nav-link  !text-[1.5rem]" to="/careers">
                  Careers
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link  !text-[1.5rem]" to="/contact-us">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="site-action d-none d-xl-block">
            <div className="action-hamburger">
              <Link
                className="hamburger"
                to="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <span className="hamburger-container">
                  <span className="hamburger-inner" />
                  <span className="hamburger-hidden" />
                </span>
              </Link>
            </div>
          </div>
          <div className="mobile-action d-block d-xl-none">
            <div className="mobile-hamburger">
              <Link
                className="hamburger"
                to="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#menuOffcanvas"
                aria-controls="menuOffcanvas"
              >
                <span className="hamburger-container">
                  <span className="hamburger-inner" />
                  <span className="hamburger-hidden" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
