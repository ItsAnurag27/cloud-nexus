import React from 'react'
import subtitle_icon from '../../assets/images/subtitle-icon.png'
import about_03 from '../../assets/images/about/exx.jpg'
import about_01 from '../../assets/images/about/ex6.jpg'

function AboutInfo() {
  return (
    <div>
      <section className="space-pt">
        <div className="container">
          <div className="row justify-content-between pt-5">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="section-title pb-0 pb-lg-4">
                <h2 className="title"> Your experience is everything to us </h2>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <img className="img-fluid" src={about_03} alt="about company" />
                </div>
                <div className="col-sm-8">
                  <p className="ps-lg-4 mt-4 mt-sm-0 ">
                    <br></br>
                   
                    At CloudNexus, we are more than just an IT consulting company—we are innovators, problem-solvers, and architects of the digital future. We specialize in progressive IT solutions, cloud transformation, AI-driven automation, and enterprise consulting, helping businesses thrive in an ever-evolving tech landscape. <br />
                    <br />
Our team of technology experts, strategists, and problem-solvers collaborates closely with clients to design tailored solutions that enhance efficiency, drive growth, and future-proof operations. Whether it's cloud migration, software development, automation, or cybersecurity, we ensure that your IT ecosystem is agile, secure, and optimized for success. 
                  </p>
                </div>
              </div>
              <div className="row mt-4 mt-sm-5">
                <div className="col-sm-6">
                  <div className="counter counter-style-1">
                    <div className="counter-number">
                      <span className="timer mb-0" data-to={240} data-speed={2000}>240</span>
                      <span className="suffix">+</span>
                    </div>
                    <div className="counter-info">
                      <span className="counter-title">Team Size</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="counter counter-style-1">
                    <div className="counter-number">
                      <span className="timer mb-0" data-to={100} data-speed={2000}>100</span>
                      <span className="suffix">%</span>
                    </div>
                    <div className="counter-info">
                      <span className="counter-title">Customer Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex justify-content-center">
              
              <img className="img-fluid ps-lg-5   " style={{}} src={about_01} alt="about overview" />
            </div>
          </div>
        </div>
      </section>  
    </div>
  )
}

export default AboutInfo