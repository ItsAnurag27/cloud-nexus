import React from 'react'
import subtitleIcon from '../../assets/images/subtitle-icon.png'
import caseStudy1 from '../../assets/images/case-studies/01.png'
import caseStudy2 from '../../assets/images/case-studies/02.png'
import caseStudy3 from '../../assets/images/case-studies/03.png'
import brandIcon1 from '../../assets/images/client-logo/brand-icon1.png'
import brandIcon2 from '../../assets/images/client-logo/brand-icon2.png'
import brandIcon3 from '../../assets/images/client-logo/brand-icon3.png'
import brandIcon4 from '../../assets/images/client-logo/brand-icon4.png'
import brandIcon5 from '../../assets/images/client-logo/brand-icon5.png'
// import c1 from '../../assets/images/client/c1.png'
// import c2 from '../../assets/images/client/c2.png'
// import c3 from '../../assets/images/client/c3.png'
// import c4 from '../../assets/images/client/c4.png'
// import c5 from '../../assets/images/client/c5.png'

function CaseStudies() {
  return (
    <div>
   <section className="space-ptb z-index-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-5">
                  <div className="section-title mb-4 mb-lg-0">
                    <span className="sub-title"><img className="img-fluid" src={subtitleIcon} alt /> Client Projects</span>
                    <h2 className="title"> Projects For Our Amazing Clients</h2>
                  </div>
                </div>
                {/* <div className="col-xl-6 col-lg-4">
                  <p>We create innovative, high-quality solutions tailored to our clients' needs, delivering excellence, creativity, and lasting impact in every project.</p>
                </div> */}
                {/* <div className="col-xl-2 col-lg-3 text-end">
                  <a className="btn btn-effect" href="/about-us">
                    <span>About Us</span>
                    <svg width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_59_255)"><path d="M19.4854 11.4293L17.0513 12.221C13.1214 13.4993 10.3036 16.9595 9.84784 21.0668C9.49371 16.981 6.71926 13.5081 2.81255 12.2604L0.210283 11.4293" stroke="white" strokeWidth={2} /><path d="M9.83594 20.8889L9.83594 0" stroke="white" strokeWidth={2} /></g><defs><clipPath id="clip0_59_255"><rect width="21.3333" height={20} fill="white" transform="translate(20) rotate(90)" /></clipPath></defs></svg>
                  </a>
                </div> */}
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="case-studies-wrapper case-studies-style-2">
                    <div className="case-studies-item">
                      <div className="item-inner ">
                        <h3 className="case-studies-title">FinTech
                        </h3>
                        <div className="case-studies-description  "style={{width: "90%"}}>A secure and AI-driven personal finance app that helps users track expenses, manage budgets, invest smartly, and analyze spending patterns. Features include automated savings plans, fraud detection, digital wallets, and seamless payment integration. </div>

                      
                        {/* <div className="case-studies-description"><img className="img-fluid" src={c1} alt /></div> */}
                      </div>
                      <div className="case-studies-image"><img className="img-fluid gsap-img-animation" src={caseStudy1} alt style={{scale: 'none', transform: 'translate(-50%, -50%) translate(746px, 498px)', opacity: 0, visibility: 'hidden'}} /></div>
                      <div className="marquee-wrapper">
                        <div className="marquee-inner">
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Data Science</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">System Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Big Data</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title">App Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Web Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">Cloud & DevOps</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Cybersecurity</span>
                          </div>
                          {/* <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title"></span>
                          </div> */}
                          
                        </div>
                      </div>
                    </div>
                    <div className="case-studies-item">
                      <div className="item-inner">
                        <h3 className="case-studies-title">MedTech </h3>
                        <div className="case-studies-description  "style={{width: "90%"}}>A HIPAA-compliant telehealth platform that enables virtual doctor consultations, remote patient monitoring, AI-powered diagnostics, and e-prescriptions. Integrated with wearables and EHR systems, this app enhances accessibility to medical care. </div>
                      
                        {/* <div className="case-studies-description"><img className="img-fluid" src={c2} alt /></div> */}
                      </div>
                      <div className="case-studies-image"><img className="img-fluid gsap-img-animation" src={caseStudy2} alt style={{scale: 'none', transform: 'translate(-50%, -50%) translate(746px, 498px)', opacity: 0, visibility: 'hidden'}} /></div>
                      <div className="marquee-wrapper">
                        <div className="marquee-inner">
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Data Science</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">System Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Big Data</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title">App Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Web Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">Cloud & DevOps</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Cybersecurity</span>
                          </div>
                          {/* <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title"></span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="case-studies-item">
                      <div className="item-inner">
                        <h3 className="case-studies-title">EdTech 
                     </h3>
                        <div className="case-studies-description"style={{width: "90%"}} >An interactive and adaptive learning platform that leverages AI and gamification to personalize education. Features include live classes, AI tutors, quizzes, progress tracking, and collaborative learning tools for students and professionals. </div>
                       
                        {/* <div className="case-studies-description"><img className="img-fluid" src={c3} alt /></div> */}
                      </div>
                      <div className="case-studies-image"><img className="img-fluid gsap-img-animation" src={caseStudy3} alt style={{scale: 'none', transform: 'translate(-50%, -50%) translate(746px, 498px)', opacity: 0, visibility: 'hidden'}} /></div>
                      <div className="marquee-wrapper">
                        <div className="marquee-inner">
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Data Science</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">System Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Big Data</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title">App Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Web Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">Cloud & DevOps</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Cybersecurity</span>
                          </div>
                          {/* <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title"></span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="case-studies-item">
                      <div className="item-inner">
                        <h3 className="case-studies-title">Enterprise </h3>
                        <div className="case-studies-description" style={{width: "90%"}}>A custom-built enterprise application that automates and integrates HR, finance, inventory, and project management. Features AI-powered analytics, workflow automation, real-time dashboards, and cloud-based collaboration tools to streamline operations. </div>
                      
                        {/* <div className="case-studies-description"><img className="img-fluid" src={c4} alt /></div> */}
                      </div>
                      <div className="case-studies-image"><img className="img-fluid gsap-img-animation" src={caseStudy1} alt style={{scale: 'none', transform: 'translate(-50%, -50%) translate(746px, 498px)', opacity: 0, visibility: 'hidden'}} /></div>
                      <div className="marquee-wrapper">
                        <div className="marquee-inner">
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Data Science</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">System Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Big Data</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title">App Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Web Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">Cloud & DevOps</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Cybersecurity</span>
                          </div>
                          {/* <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title"></span>
                          </div> */}
                          
                        </div>
                      </div>
                    </div> 
                    {/* <div className="case-studies-item">
                      <div className="item-inner">
                        <h3 className="case-studies-title">Jenkins</h3>
                        <div className="case-studies-description" >Implemented a Jenkins CI pipeline to automate building, scanning, and deploying container images to JFrog Artifactory.</div>
                        {/* <div className="case-studies-description" style={{width: "90%"}}>Implemented a Jenkins CI pipeline to automate building, scanning, and deploying container images to JFrog Artifactory.</div> 

                         <div className="case-studies-action"><a className="btn-arrow" href="#"><svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_923_143)"><path d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657" stroke="inherit" strokeWidth={2} /><path d="M15.7602 8.12158H0.1875" stroke="inherit" strokeWidth={2} /></g><defs><clipPath id="clip0_923_143"><rect width="15.904" height="14.8437" fill="inherit" transform="translate(0.1875 0.578125)" /></clipPath></defs></svg></a></div> 
                        <div className="case-studies-description"><img className="img-fluid" src={c5} alt /></div>
                      </div>
                      <div className="case-studies-image"><img className="img-fluid gsap-img-animation" src={caseStudy2} alt style={{scale: 'none', transform: 'translate(-50%, -50%) translate(746px, 498px)', opacity: 0, visibility: 'hidden'}} /></div>
                      <div className="marquee-wrapper">
                        <div className="marquee-inner">
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Data Science</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">System Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Big Data</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title">App Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Web Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">Cloud & DevOps</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Cybersecurity</span>
                          </div>
                          {/* <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title"></span>
                          </div> 
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section> 
    </div>
  )
}

export default CaseStudies
