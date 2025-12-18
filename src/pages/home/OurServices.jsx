import React from 'react'
import subtitle_icon from '../../assets/images/subtitle-icon.png'
import Appdev from '../../assets/images/svg/services/App-Development.png'
import AppdevColor from '../../assets/images/svg/services/color-icon/App-Development.png'
import DataScience from '../../assets/images/svg/services/ai.png'
import DataScienceColor from '../../assets/images/svg/services/color-icon/ai.png'
import CloudDevops from '../../assets/images/svg/services/devops.png'
import CloudDevopsColor from '../../assets/images/svg/services/color-icon/devops.png'
import Iot from '../../assets/images/svg/services/iot.png'
import IotColor from '../../assets/images/svg/services/color-icon/iot.png'
import SystemDesign from '../../assets/images/svg/services/system.png'
import SystemDesignColor from '../../assets/images/svg/services/color-icon/system.png'
import BigData from '../../assets/images/svg/services/bigdata.png'
import BigDataColor from '../../assets/images/svg/services/color-icon/bigdata.png'
import UiUx from '../../assets/images/svg/services/Uiux-design.png'
import UiUxColor from '../../assets/images/svg/services/color-icon/Uiux-design.png'
import CyberSecurity from '../../assets/images/svg/services/CyberSecurity.png'
import CyberSecurityColor from '../../assets/images/svg/services/color-icon/CyberSecurity.png'
import WebDev from '../../assets/images/svg/services/webdev.png'
import WebDevColor from '../../assets/images/svg/services/color-icon/webdev.png'
import Crm from '../../assets/images/svg/services/crm.png'
import CrmColor from '../../assets/images/svg/services/color-icon/crm.png'

function OurServices() {

return(
  <section className="">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xxl-6 col-lg-8 ">
              <div className="section-title">
                <span className="sub-title"><img className="img-fluid" src={subtitle_icon} alt /> Our Services</span>
                <h2 className="title"> Services that transform   your business 
                </h2>
              </div>
              <div className="">
                <p>We all know that nothing moves until someone makes a decision. The first action is always in making the decision to proceed. which most people overlook, we don’t do it intentionally or with malice.</p>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="service-wrapper service-style-1">
                <div className="service-inner">
                  <div className="service-icon">
                    <img className="img-fluid" src={BigData} alt />
                  </div>
                  <div className="bg-icon">
                    <img className="img-fluid" src={BigDataColor} alt />
                  </div>
                  <div className="service-content">
                    <h5 className="service-title">Big Data</h5>
                    <p>We help IT industries leverage Big Data for real-time analytics, predictive insights, AI-driven automation, cybersecurity, and scalable cloud integration to drive innovation.</p>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="service-wrapper service-style-1">
                <div className="service-inner">
                  <div className="service-icon">
                    <img className="img-fluid" src={Appdev} alt />
                  </div>
                  <div className="bg-icon">
                    <img className="img-fluid" src={AppdevColor} alt />
                  </div>
                  <div className="service-content">
                    <h5 className="service-title">App Development</h5>
                    <p>Transform your ideas into seamless app experiences with our expert app development services and ensure innovation and quality.</p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="service-wrapper service-style-1">
                <div className="service-inner">
                  <div className="service-icon">
                    <img className="img-fluid" src={ DataScience} alt />
                  </div>
                  <div className="bg-icon">
                    <img className="img-fluid" src={ DataScienceColor} alt />
                  </div>
                  <div className="service-content">
                    <h5 className="service-title">Data Science</h5>
                    <p>We help businesses harness the power of data to make smarter decisions, optimize operations, and drive innovation. Our Data Science services blend cutting-edge analytics and machine learning.</p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="service-wrapper service-style-1">
                <div className="service-inner">
                  <div className="service-icon">
                    <img className="img-fluid" src={CloudDevops} alt />
                  </div>
                  <div className="bg-icon">
                    <img className="img-fluid" src={CloudDevopsColor} alt />
                  </div>
                  <div className="service-content">
                    <h5 className="service-title">Cloud & DevOps</h5>
                    <p>We help IT industries leverage Cloud and DevOps for seamless automation, scalable infrastructure, continuous integration, enhanced security, and faster deployments to drive innovation.</p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="service-wrapper service-style-1">
                <div className="service-inner">
                  <div className="service-icon">
                    <img className="img-fluid" src={Iot} alt />
                  </div>
                  <div className="bg-icon">
                    <img className="img-fluid" src={IotColor} alt />
                  </div>
                  <div className="service-content">
                    <h5 className="service-title">Iot & Automation</h5>
                    <p>At CloudNexus, we help businesses harness the power of IoT and automation to streamline operations, improve productivity, and drive innovation.</p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="service-wrapper service-style-1">
                <div className="service-inner">
                  <div className="service-icon">
                    <img className="img-fluid" src={SystemDesign} alt />
                  </div>
                  <div className="bg-icon">
                    <img className="img-fluid" src={SystemDesignColor} alt />
                  </div>
                  <div className="service-content">
                    <h5 className="service-title">System Design</h5>
                    <p>We specialize in end-to-end system design solutions that ensure scalability, efficiency, and security for your business.</p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="service-wrapper service-style-1">
                <div className="service-inner">
                  <div className="service-icon">
                    <img className="img-fluid" src={UiUx} alt />
                  </div>
                  <div className="bg-icon">
                    <img className="img-fluid" src={UiUxColor} alt />
                  </div>
                  <div className="service-content">
                    <h5 className="service-title">UI/UX Design</h5>
                    <p>We are experts in crafting intuitive user interfaces and engaging user experiences to elevate your brand and captivate your audience.</p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="service-wrapper service-style-1">
                <div className="service-inner">
                  <div className="service-icon">
                    <img className="img-fluid" src={CyberSecurity} alt />
                  </div>
                  <div className="bg-icon">
                    <img className="img-fluid" src={CyberSecurityColor} alt />
                  </div>
                  <div className="service-content">
                    <h5 className="service-title">Cyber Security</h5>
                    <p>Infuse cybersecurity into your strategy and ecosystem to protect value, help prevent threats and build trust as you grow.</p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="service-wrapper service-style-1">
                <div className="service-inner">
                  <div className="service-icon">
                    <img className="img-fluid" src={WebDev} alt />
                  </div>
                  <div className="bg-icon">
                    <img className="img-fluid" src={WebDevColor} alt />
                  </div>
                  <div className="service-content">
                    <h5 className="service-title">Web Development</h5>
                    <p>We do not just build websites, we create user experiences that engage and convert. Our designers and developers will collaborate to bring your vision to life with a stunning, functional website.</p>
                   
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </section>
)

   
  }
  
  export default OurServices;


  

















// function OurServices() {
//   const servicesLeft = [
//       {
//         icon: InfoSecurity,
//         colorIcon: InfoSecurityColor,
//         title: "Information Security",
//         description: "Protect your business with cutting-edge security solutions that safeguard data, prevent breaches, and ensure compliance."
//       },
//       {
//         icon: DataSync,
//         colorIcon: DataSyncColor,
//         title: "Data Synchronization",
//         description: "Seamlessly sync data across multiple platforms and devices, ensuring real-time updates and operational efficiency."
//       },
//       {
//         icon: EventProcess,
//         colorIcon: EventProcessColor,
//         title: "Event Processing",
//         description: "Optimize business operations with real-time event-driven processing, enabling faster decision-making and automation."
//       }
//     ];
    
//     const servicesRight = [
//       {
//         icon: ProcessAuto,
//         colorIcon: ProcessAutoColor,
//         title: "Process Automation",
//         description: "Streamline workflows with intelligent automation solutions, reducing manual effort and increasing productivity."
//       },
//       {
//         icon: MobilePlatform,
//         colorIcon: MobilePlatformColor,
//         title: "Mobile Platforms",
//         description: "Develop and optimize mobile solutions to enhance user experience, increase engagement, and expand digital reach."
//       },
//       {
//         icon: ContentMgmt,
//         colorIcon: ContentMgmtColor,
//         title: "Content Management",
//         description: "Effortlessly organize, manage, and distribute content with robust CMS solutions tailored to your business needs."
//       }
//     ];
    
  

//     const cardStyles = {
//       wrapper: {
//         perspective: '1000px',
//         height: '350px',
//         width: '100%',
//         position: 'relative',
//         marginBottom: '2rem'
//       },
//       flipper: {
//         position: 'relative',
//         width: '100%',
//         height: '100%',
//         transformStyle: 'preserve-3d',
//         transition: 'transform 0.6s',
//         cursor: 'pointer'
//       },
//       front: {
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//         backfaceVisibility: 'hidden',
//         background: 'linear-gradient(145deg, #1a1a1a 0%, #2c2c2c 100%)',
//         borderRadius: '15px',
//         padding: '2rem',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center'
//       },
//       back: {
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//         backfaceVisibility: 'hidden',
//         background: 'linear-gradient(145deg, #1e3a8a 0%, #1e40af 100%)',
//         borderRadius: '15px',
//         padding: '2rem',
//         transform: 'rotateY(180deg)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center'
//       },
//       icon: {
//         width: '80px',
//         height: '80px',
//         marginBottom: '1.5rem',
//         transition: 'transform 0.3s ease'
//       },
//       title: {
//         color: '#ffffff',
//         fontSize: '1.5rem',
//         // fontWeight: 'bold',
//         textAlign: 'center',
//         marginBottom: '1rem'
//       },
//       description: {
//         color: '#ffffff',
//         fontSize: '1rem',
//         lineHeight: '1.6',
//         textAlign: 'center'
//       }
//     };
  
//     const ServiceCard = ({ service }) => (
//       <div 
//         style={cardStyles.wrapper}
//         onMouseEnter={(e) => {
//           e.currentTarget.querySelector('.flipper').style.transform = 'rotateY(180deg)';
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.querySelector('.flipper').style.transform = 'rotateY(0deg)';
//         }}
//       >
//         <div className="flipper" style={cardStyles.flipper}>
//           {/* Front of card */}
//           <div style={cardStyles.front}>
//             <img 
//               src={service.icon} 
//               alt={service.title}
//               style={cardStyles.icon}
//             />
//             <h3 style={cardStyles.title}>{service.title}</h3>
//           </div>
//           {/* Back of card */}
//           <div style={cardStyles.back}>
//             <p style={cardStyles.description}>
//               {service.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     );
  
//     return (
//       <div style={{ background: '#000000' }}>
//         <section style={{ padding: '6rem 0', position: 'relative', zIndex: 2 }}>
//           <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
//             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//               {/* Left Column */}
//               <div style={{ flex: '0 0 100%', maxWidth: '400px', marginBottom: '3rem' }}>
//                 <div style={{ position: 'sticky', top: '80px' }}>
//                   <div style={{ marginBottom: '2rem' }}>
//                     <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#3663D8' }}>
//                       <img src={subtitle_icon} alt="icon" style={{ width: '20px' }} />
//                       Our Services
//                     </span>
//                     <h2 className="title" >
//                     Services to Power Your Business
//                     </h2>
//                   </div>
//                   <div style={{ color: '#9ca3af', lineHeight: '1.8' }}>
//                     <p>Nothing moves forward until a decision is made. The first step in progress 
//                       is choosing to take action—a step many overlook, not out of intent or 
//                       neglect, but simply by hesitation.</p>
//                   </div>
//                 </div>
//               </div>
  
//               {/* Right Column */}
//               <div style={{ flex: '1', maxWidth: '700px' }}>
//                 <div style={{ 
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                   gap: '2rem'
//                 }}>
//                   <div>
//                     {servicesLeft.map((service, index) => (
//                       <ServiceCard key={index} service={service} />
//                     ))}
//                   </div>
//                   <div style={{ marginTop: '4rem' }}>
//                     {servicesRight.map((service, index) => (
//                       <ServiceCard key={index} service={service} />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
  
//   export default OurServices;