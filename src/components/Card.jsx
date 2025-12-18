import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="service-wrapper service-style-1">
      <div className="service-inner">
        <div className="service-icon">
          <img className="img-fluid" src={imageSrc} alt={title} />
        </div>
        <div className="bg-icon">
          <img className="img-fluid" src={imageSrc} alt={title} />
        </div>
        <div className="service-content">
          <h5 className="service-title">{title}</h5>
          <p className="service-description">{description}</p>
        </div>
      </div>

      <style jsx>{`
        .service-wrapper {
          background: rgba(54, 99, 216, 0.08);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 35px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin: 15px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
          border: 1px solid rgba(54, 99, 216, 0.15);
        }

        .service-inner {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-icon {
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
          transition: transform 0.4s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .service-icon img {
          width: 70px;
          height: 70px;
          transition: all 0.4s ease;
          filter: brightness(0.9);
          background: rgba(54, 99, 216, 0.1);
          padding: 15px;
          border-radius: 15px;
          border: 1px solid rgba(54, 99, 216, 0.2);
        }

        .bg-icon {
          position: absolute;
          right: -40px;
          bottom: -40px;
          opacity: 0.08;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform: rotate(-15deg);
        }

        .bg-icon img {
          width: 180px;
          height: 180px;
          opacity: 0.8;
          filter: blur(1px);
        }

        .service-content {
          position: relative;
          z-index: 1;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          
        }

        .service-title {
          color: #ffffff;
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 20px;
          transition: color 0.3s ease;
          letter-spacing: -0.02em;       
        }

        .service-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 0;
          transition: color 0.3s ease;
        }

        .service-wrapper:hover {
          background: linear-gradient(
            145deg,
            rgba(54, 99, 216, 0.2),
            rgba(54, 99, 216, 0.1)
          );
          transform: translateY(-8px);
          box-shadow: 0 12px 40px 0 rgba(54, 99, 216, 0.2);
          border-color: rgba(54, 99, 216, 0.3);
        }

        .service-wrapper:hover .service-icon {
          transform: scale(1.1);
        }

        .service-wrapper:hover .service-icon img {
          filter: brightness(1.1);
        }

        .service-wrapper:hover .bg-icon {
          opacity: 0.15;
          right: -30px;
          bottom: -30px;
          transform: rotate(0deg);
        }

        .service-wrapper:hover .service-title {
          color: rgba(255, 255, 255, 0.95);
        }

        .service-wrapper:hover .service-description {
          color: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 1310px) {
          .service-wrapper {
            padding: 30px;
          }
          .service-title {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 991px) {
          .service-wrapper {
            padding: 25px;
            margin: 12px;
          }
          .service-icon img {
            width: 60px;
            height: 60px;
          }
          .bg-icon img {
            width: 160px;
            height: 160px;
          }
        }

        @media (max-width: 768px) {
          .service-wrapper {
            padding: 20px;
            margin: 10px;
          }
          .service-title {
            font-size: 1.2rem;
            margin-bottom: 15px;
          }
          .service-description {
            font-size: 0.95rem;
            line-height: 1.6;
          }
          .service-icon {
            margin-bottom: 25px;
          }
        }

        @media (max-width: 576px) {
          .service-wrapper {
            padding: 20px;
            margin: 8px;
          }
          .service-icon img {
            width: 50px;
            height: 50px;
          }
          .bg-icon img {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>
    </div>
  );
};

export default Card;