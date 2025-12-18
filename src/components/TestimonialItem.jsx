import React from 'react';

function TestimonialItem({ rating, quoteSrc, content, name, position }) {
  return (
    <div className="px-3">
      <div className="testimonial-wrapper bg-dark-soft p-4 rounded">
        <div className="testimonial-ratings mb-3">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`fa-star ${index < rating ? "fa-solid" : "fa-regular"} text-warning me-1`}
            />
          ))}
        </div>
        <div className="testimonial-quote mb-4">
          <img className="img-fluid" src={quoteSrc} alt="quote" width="40" />
        </div>
        <div className="testimonial-content mb-4">
          <p className="text-white-50">{content}</p>
        </div>
        <div className="testimonial-author">
          <div className="author-info">
            <h6 className="author-name text-white mb-1">{name}</h6>
            <span className="author-position text-primary">{position}</span>
          </div>
        </div>
      </div>
    

    </div>
  );
}

export default TestimonialItem;







// function TestimonialItem({ rating, quoteSrc, content, name, position }) {
//   return (
//     <div className="item">
//       <div className="testimonial-wrapper testimonial-style-2">
//         <div className="testimonial-ratings">
//           {Array.from({ length: 5 }, (_, index) => (
//             <i
//               key={index}
//               className={`fa-solid fa-star ${
//                 index < rating ? "" : "fa-regular"
//               }`}
//             ></i>
//           ))}
//         </div>
//         <div className="testimonial-quote">
//           <img className="img-fluid" src={quoteSrc} alt="quote icon" />
//         </div>
//         <div className="testimonial-content">
//           <p>{content}</p>
//         </div>
//         <div className="testimonial-author">
//           <div className="author-info">
//             <h6 className="author-name">{name}</h6>
//             <span className="author-position">{position}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TestimonialItem;