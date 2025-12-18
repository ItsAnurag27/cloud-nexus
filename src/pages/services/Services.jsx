import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
 
const Services = () => {
  const navigate = useNavigate();
 
  const servicesData = [
    {
      id: 1,
      title: 'App Development',
      description: 'Transform your ideas into seamless app experiences with our expert app development services and ensure innovation and quality.',
      icon: Appdev,
      colorIcon: AppdevColor
    },
    {
      id: 2,
      title: 'Data Science',
      description: 'We help businesses harness the power of data to make smarter decisions, optimize operations, and drive innovation. Our Data Science services blend cutting-edge analytics and machine learning.',
      icon: DataScience,
      colorIcon: DataScienceColor
    },
    {
      id: 3,
      title: 'Cloud & DevOps',
      description: 'We help IT industries leverage Cloud and DevOps for seamless automation, scalable infrastructure, continuous integration, enhanced security, and faster deployments to drive innovation.',
      icon: CloudDevops,
      colorIcon: CloudDevopsColor
    },
    {
      id: 4,
      title: 'Iot & Automation',
      description: 'We help businesses harness the power of IoT and automation to streamline operations, improve productivity, and drive innovation.',
      icon: Iot,
      colorIcon: IotColor
    },
    {
      id: 5,
      title: 'System Design',
      description: 'We specialize in end-to-end system design solutions that ensure scalability, efficiency, and security for your business.',
      icon: SystemDesign,
      colorIcon: SystemDesignColor
    },
    {
      id: 6,
      title: 'Big Data',
      description: 'We help IT industries leverage Big Data for real-time analytics, predictive insights, AI-driven automation, cybersecurity, and scalable cloud integration to drive innovation.',
      icon: BigData,
      colorIcon: BigDataColor
    },
    {
      id: 7,
      title: 'UI/UX Design',
      description: 'We are experts in crafting intuitive user interfaces and engaging user experiences to elevate your brand and captivate your audience.',
      icon: UiUx,
      colorIcon: UiUxColor
    },
    {
      id: 8,
      title: 'Cyber Security',
      description: 'Infuse cybersecurity into your strategy and ecosystem to protect value, help prevent threats and build trust as you grow.',
      icon: CyberSecurity,
      colorIcon: CyberSecurityColor
    },
    {
      id: 9,
      title: 'Web Development',
      description: 'We do not just build websites, we create user experiences that engage and convert. Our designers and developers will collaborate to bring your vision to life with a stunning, functional website.',
      icon: WebDev,
      colorIcon: WebDevColor
    },
    // {
    //   id: 10,
    //   title: 'Wordpress Development',
    //   description: 'Professional WordPress development services delivering custom, scalable, and high-performance websites.',
    //   icon: Crm,
    //   colorIcon: CrmColor
    // },
  ]
  const getServicePath = (title) => {
    const paths = {
      'App Development': '/services/app-development',
      'Data Science': '/services/data-science',
      'Cloud & DevOps': '/services/Cloud-Devops',
      'Iot & Automation': '/services/Iot-Automation',
      'System Design': '/services/System-Design',
      'Big Data': '/services/Big-Data',
      'UI/UX Design': '/services/Ui-Ux',
      'Cyber Security': '/services/CyberSecurity',
      'Web Development': '/services/web-development',
      'Wordpress Development': '/services/Wordpress-Development'
    };
    return paths[title] || '#';
  };
 
  const ServiceCard = ({ service }) => {
    const handleClick = () => {
      navigate(getServicePath(service.title));
    };
 
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleClick();
      }
    };
 
    return (
      <div
        className="service-wrapper service-style-1 card-button"
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <div className="service-inner">
          <div className="service-icon">
            <img className="img-fluid" src={service.icon} alt={service.title} />
          </div>
          <div className="bg-icon">
            <img className="img-fluid" src={service.colorIcon} alt={service.title} />
          </div>
          <div className="service-content">
            <h5 className="service-title">{service.title}</h5>
            <p>{service.description}</p>
            <div className="service-links">
              <div className="btn-arrow">
                <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_923_133)">
                    <path d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657" stroke="currentColor" strokeWidth={2} />
                    <path d="M15.7602 8.12158H0.1875" stroke="currentColor" strokeWidth={2} />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
 
  return (
    <div>
      <section className="space-ptb ellipse-bottom" style={{ paddingTop: '95px', paddingBottom: '95px' }}>
        <div className="container">
          <h4>
          Revolutionize Your Business with
          <br />
          Cutting-Edge Technology
          </h4>
          <div className="row justify-content-start">
            <div className="col-lg-12">
              <div className="services grid-wrapper grid-xl-4 grid-lg-3 grid-md-2 grid-sm-1">
                {servicesData.map(service => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
 
export default Services
 