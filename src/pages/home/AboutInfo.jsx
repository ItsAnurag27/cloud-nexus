import React from "react";
import subtitle_icon from "../../assets/images/subtitle-icon.png";
import shape from "../../assets/images/team/shape.png";
import arrow from "../../assets/images/arrow-right.png"
import about_07 from "../../assets/images/about/ye5.jpg";
import { Link } from "react-router-dom";
function AboutInfo() {
  return (
    <div>
            <section className="space-pt">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-lg-4">
              <div className="section-title mb-lg-0">
                <span className="sub-title"><img className="img-fluid" src={subtitle_icon} alt />key Information</span>
                <h2 className="title mb-0">Who we are ?</h2>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-10 algin pt-2">
              <p className="">At CloudNexus, we offer a diverse range of IT solutions and digital services designed to empower businesses with progressive technology. From custom software development to cloud solutions and digital transformation, our expertise helps organizations optimize efficiency, enhance scalability, and drive innovation.</p>
            </div>
          </div>
          <div className="row justify-content-between mt-2 pt-2">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <img className="img-fluid pe-5" style={{height:"650px", width:"700px"}} src={about_07} alt />
            </div>
            <div className="col-lg-4 col-sm-6  ">
              <div className="about-details ">
                <div className="rated-reviews-2 flex">
                  <h3 className="title mb-0">
                  Why Cloud Nexus
                  </h3>
                </div>
                <div className="list-wrapper  " style={{margin:"0 8px 0 0"}}>
                  <ul className="list col-xl-9  ">
                    <li><img className="img-fluid" src={arrow}alt />End-to-End Support</li>
                    <li><img className="img-fluid " src={arrow}alt />Expert Team & Global Experience
                    </li>
                    <li><img className="img-fluid" src={arrow}alt />Security & Reliability                    </li>
                    <li><img className="img-fluid" src={arrow}alt />Business-Centric Results                    </li><li><img className="img-fluid" src={arrow}alt />Product-Driven Innovation</li>
                    <li><img className="img-fluid" src={arrow}alt />Business-Centric Results                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-xxl-9">
                    <div className="counter counter-style-1">
                      <div className="counter-number"><span className="timer mb-0" data-to={240} data-speed={2000}>240</span><span className="suffix">+</span></div>
                      <div className="counter-info"><span className="counter-title">Team Size</span></div>
                    </div>
                  </div>
                  <div className="col-xxl-9">
                    <div className="counter counter-style-1">
                      <div className="counter-number"><span className="timer mb-0" data-to={100} data-speed={2000}>100</span><span className="suffix">%</span></div>
                      <div className="counter-info"><span className="counter-title">Customer Satisfaction</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <div className="about-right">
                <div className="rotate-img">
                  <img className="img-fluid  rotate  " style={{width:"300px", padding:"80px 0 0 0"}} src={shape} alt />
                </div>
                {/* <div className="d-flex justify-content-end">
                  <Link className="btn btn-effect" to="/about-us">
                    <span>Company Overview</span>
                  
                  </Link>
                </div> */}
                  <div className="d-flex justify-content-end">
                  <Link className="btn btn-effect" to="about-us">
                    <span>Company Overview</span>
                    <svg width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_59_256)"><path d="M19.4854 11.4293L17.0513 12.221C13.1214 13.4993 10.3036 16.9595 9.84784 21.0668C9.49371 16.981 6.71926 13.5081 2.81255 12.2604L0.210283 11.4293" stroke="white" strokeWidth={2} /><path d="M9.83594 20.8889L9.83594 0" stroke="white" strokeWidth={2} /></g><defs><clipPath id="clip0_59_256"><rect width="21.3333" height={20} fill="white" transform="translate(20) rotate(90)" /></clipPath></defs></svg>
                  </Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutInfo;
