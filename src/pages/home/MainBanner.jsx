import { Link } from "react-router-dom";
import banner_shape_01 from "../../assets/images/banner/banner-03/bg.jpg";
import img1 from "../../assets/images/avatar/01.jpg";
import img2 from "../../assets/images/avatar/02.jpg";
import img3 from "../../assets/images/avatar/03.jpg";
import img4 from "../../assets/images/avatar/04.jpg";
function MainBanner() {
  return (

<div className="main-banner main-banner-3">
      <img className="img-fluid banner-bg" src={banner_shape_01} alt />
      <div className="container-fluid g-md-0">
        <div className="banner-inner">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-conent">
                {/* <span className="sub-title"><img className="img-fluid" src={logo01} alt /> CloudNexus</span> */}
                <h1 className="title">Pioneering Innovation <span className="icon-title">With</span>    Smart Solutions</h1>
                <div className="banner-conent-footer">
                 
                  <div className="clienti-reviews">
                    <ul className="clienti-profile">
                      <li>
                        <img className="img-fluid" src={img1} alt />
                      </li>
                      <li>
                        <img className="img-fluid" src={img2} alt />
                      </li>
                      <li>
                        <img className="img-fluid" src={img3} alt />
                      </li>
                      <li>
                        <img className="img-fluid" src={img4} alt />
                      </li>
                    </ul>
                    <div className="reviews"><span className="reviews-number"> 200+</span> <span>Satisfied clients</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default MainBanner;






<div className="main-banner main-banner-3">
      <img className="img-fluid banner-bg" src="images/banner/banner-03/bg.jpg" alt />
      <div className="container-fluid g-md-0">
        <div className="banner-inner">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-conent">
                <span className="sub-title"><img className="img-fluid" src="images/subtitle-icon.png" alt /> Itinfinite</span>
                <h1 className="title">Smart IT <span className="icon-title"><img className="banner-icon" src="images/banner/banner-03/01.png" alt />Solutions</span> For A Connected World</h1>
                <div className="banner-conent-footer">
                  <a className="btn btn-effect" href="#">
                    <span>Get A Quote</span>
                    <svg width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_59_255)"><path d="M19.4854 11.4293L17.0513 12.221C13.1214 13.4993 10.3036 16.9595 9.84784 21.0668C9.49371 16.981 6.71926 13.5081 2.81255 12.2604L0.210283 11.4293" stroke="white" strokeWidth={2} /><path d="M9.83594 20.8889L9.83594 0" stroke="white" strokeWidth={2} /></g><defs><clipPath id="clip0_59_255"><rect width="21.3333" height={20} fill="white" transform="translate(20) rotate(90)" /></clipPath></defs></svg>
                  </a>
                  <div className="clienti-reviews">
                    <ul className="clienti-profile">
                      <li>
                        <img className="img-fluid" src="images/avatar/01.jpg" alt />
                      </li>
                      <li>
                        <img className="img-fluid" src="images/avatar/02.jpg" alt />
                      </li>
                      <li>
                        <img className="img-fluid" src="images/avatar/03.jpg" alt />
                      </li>
                      <li>
                        <img className="img-fluid" src="images/avatar/04.jpg" alt />
                      </li>
                    </ul>
                    <div className="reviews"><span className="reviews-number"> 1,250+</span> <span>Satisfied clients</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>








// import { Link } from "react-router-dom";
// import banner_bg_01 from "../../assets/images/banner/banner-02/01.png";
// import banner_shape_01 from "../../assets/images/banner/banner-02/bg.jpg";
// function MainBanner() {
//   return (
// <div className="main-banner main-banner-2 -mt-25">
// <div className="banner-inner">
//   <img className="img-fluid banner-bg" src={banner_shape_01} alt="#" />
//   <div className="container">
//     <div className="row">
//       <div className="col-md-12">
//         <div className="banner-conent pt-16">
//           {/* <h1 className="title">
          
//             Pioneering </h1>
//           <h1 className="title">
//           <h2 className="sub-title">
//           <span className="sub-title"> innovation with </span></h2>
//       smart solutions
//     </h1> */}
   
//           <h1 className="text-2xl lg:text-9xl font-bold leading-tight pt-10">
//             Pioneering innovation
//           </h1>
//             <span className="sub-title  "style={{ fontSize: '40px' }} >  with </span>
//           <h2 className="text-3xl lg:text-5xl font-semibold mt-2">
//             Smart Solutions
//           </h2>
        
//           </div>
          
//           <div className="row justify-content-start align-items-center">
           

//             <div className="row mt-4 mt-sm-5">
//                 <div className="col-sm-6">
//                   <div className="counter counter-style-1">
//                     <div className="counter-number">
//                       <span
//                         className="timer mb-0"
//                         data-to={240}
//                         data-speed={2000}
//                       >
//                         100
//                       </span>
//                       <span className="suffix">%</span>
//                     </div>
//                     <div className="counter">
//                       <span className="counter-title" style={{ fontSize: '25px' }}> Committed to Customer Satisfaction & Excellence</span>
//                     </div>
//                   </div>
//                 </div>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//   );
// }

// export default MainBanner;