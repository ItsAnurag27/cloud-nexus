import React from "react";
import logo from "../assets/images/logo2.png";
import addressIcon from "../assets/images/svg/pin.png";
// import phoneIcon from "../assets/images/svg/address-info-headphone.svg";
import emailIcon from "../assets/images/svg/address-info-email.svg";
import { Link } from "react-router-dom";
import { SocialLinks } from "../components/SocialLinks";

function Footer() {
  const contactInfo = [
    {
      icon: addressIcon,
      title: "2nd Stage BTM Layout",
      subtitle: "Bengaluru, Karnataka 560076, IN",
    },
    {
      icon: emailIcon,
      title: "work@cloudnexus.in",
      subtitle: "24x7 online support",
    },
  ];

  
  const quickLinks = [
    // { text: "Team", url: "team" },
    { text: "Home", url: "/" },
    { text: "About us", url: "about-us" },
    { text: "Service", url: "services" },
    { text: "Contact", url: "contact-us" },
  ];

  return (
    // <footer className=" text-white py-10">
     <footer className="site-footer footer-dark py-2"> 

      <div className="container mx-auto px-7 ">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {/* Company Info */}
          <div className="space-y-9">
            <Link to="/" className="block">
              <img src={logo} alt="CloudNexus Logo" className="h-10" />
            </Link>
            <p className="text-gray-400 text-sm ">
            We provide innovative technology solutions, transforming digital infrastructure through advanced advancements, ensuring scalability, security, and seamless integration for sustainable growth.           </p>
            <div className="lg social-icon flex  ">
                 <SocialLinks
                    customStyle="!flex  !pl-0   "
                   scale="hover:scale-140"
                 />
               </div>
          </div>

          {/* Contact Information */}
          <div className="pb-1 pl-7 ">
            <h5 className="text-lg font-semibold mb-4">Where To Find Us</h5>
            <div className="space-y-5 ">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img src={info.icon} alt="" className="w-5 h-5 mt-1" />
                  <div>
                    <p className="text-white">{info.title}</p>
                    <p className="text-gray-400 text-sm">{info.subtitle}</p>
                  </div>
                </li>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

             <div className="widget widget-menu pl-16">
             <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                  <ul className="list-unstyled list-col-1 mb-0">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <Link to={link.url}>{link.text}</Link>
                       </li>
                     ))}
                  </ul>
              </div>
             

          {/* Call Center */}
          <div>
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h5 className="text-lg font-semibold mb-2">Call Details</h5>
              <a 
                href="tel:+918793830447"
                className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300 block mb-2"
              >
                +91 8793830447
              </a>
              <h6 className="text-gray-400 text-sm">
              and get a tailored cloud solution        
                    </h6>
            </div>
         
            {/* <div className="lg social-icon flex justify-center ">
                 <SocialLinks
                    customStyle="!flex gap-[3rem] !pl-0  "
                   scale="hover:scale-140"
                 />
               </div> */}
            </div>
          </div>
     

        {/* Footer Bottom */}
        <div className="mt-0 pt-2 border-t border-gray-800 ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 ">
            <p className="text-gray-400 text-sm" > Privacy Policy</p>
            <p className=" text-gray-400 text-sm" > Terms of Service</p>
{/* 
              <Link 
                // to="/privacy-policy"
                to="/"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                // to="/terms"
                 to="/"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link> */}
            </div>
            <p className="text-gray-400 text-sm  ">
              © {new Date().getFullYear()} CloudNexus Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;












// import React from "react";
// import logo from "../assets/images/logo1.png";
// import addressIcon from "../assets/images/svg/address-info-contacts.svg";
// import phoneIcon from "../assets/images/svg/address-info-headphone.svg";
// import emailIcon from "../assets/images/svg/address-info-email.svg";
// import { Link } from "react-router-dom";
// import { SocialLinks } from "../components/SocialLinks";

// function Footer() {
//   const contactInfo = [
//     {
//       icon: addressIcon,
//       title: "2nd Stage BTM Layout",
//       subtitle: " Bengaluru, Karnataka 560076, IN",
//     },
//     {
//       icon: phoneIcon,
//       title: "+91 8793830447",
//       subtitle: "Mon-fri 10:30am 7:30pm",
//     },
//     {
//       icon: emailIcon,
//       title: "work@gmail.com",
//       subtitle: "24x7 online support",
//     },
//   ];

//   const quickLinks = [
//     { text: "Home", url: "/" },
//     { text: "About us", url: "about-us" },
//     // { text: "Team", url: "team" },
//     { text: "Service", url: "services" },
//     { text: "Contact", url: "contact-us" },
//   ];

//   const socialLinks = [
//     { name: "Fb", url: "#" },
//     { name: "Dr", url: "#" },
//     { name: "Tw", url: "#" },
//     { name: "Be", url: "#" },
//   ];

//   return (
//     <div>
//       <footer className="site-footer footer-dark">
//         <div className="footer-main">
//           <div className="container">
//             <div className="row">
//               <div className="col-xl-3 col-md-5">
//                 <div className="widget widget-address-info">
//                   <h5 className="widget-title">Where To Find Us</h5>
//                   <ul className="address-info-list">
//                     {contactInfo.map((info, index) => (
//                       <li key={index}>
//                         <i className="icon">
//                           <img className="img-fluid" src={info.icon} alt="" />
//                         </i>
//                         <span className="info">
//                           <span>{info.title} </span>
//                           {info.subtitle}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-xl-5 col-md-7">
//                 <div className="widget widget-menu">
//                   <h6 className="widget-title">Quick Links</h6>
//                   <ul className="list-unstyled list-col-3 mb-0">
//                     {quickLinks.map((link, index) => (
//                       <li key={index}>
//                         <Link to={link.url}>{link.text}</Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-xl-3 col-md-12 ms-auto">
//                 <div className="widget widget-info">
//                   <h5 className="widget-title">Call Center</h5>
//                   <a className="number" href="tel:+1800555500">
//                     +91 8793830447
//                   </a>
//                   <h6 className="title">and get a free estimate</h6>
//                 </div>
//                 <div className="lg:pt-[5rem] social-icon ">
//                   <SocialLinks
//                     customStyle="!flex gap-[3rem] !pl-0  "
//                     scale="hover:scale-140"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="footer-copyright">
//           <div className="container">
//             <div className="row align-items-center">    
//               <div className="col-lg-6">
//                 <p>
//                  <a className="footer-logo" href="/">
//                     <img className="img-fluid" src={logo} alt="logo" />
//                   </a>
//                 </p>
//               </div>
//                   {/* <div class="col-lg-6 text-lg-end ">
          
//               <Link to="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
//                 Privacy Policy
//               </Link></div> */}
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Footer;