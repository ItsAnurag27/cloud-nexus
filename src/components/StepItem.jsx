import arrow_right from '../assets/images/arrow-right.png'



const StepItem = ({ number, title, description, list, image }) => (
  <div className="steps-item">
    <div className="step-arrow">
      {/* <span className="btn-arrow cursor-default">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M15.7602 8.12158H0.1875"
              stroke="currentColor"
              strokeWidth="2"
            />
          </g>
        </svg>
      </span> */}
    </div>
    <div className="step-info">
      <span className="step-number">{number}</span>
      <h3 className="step-title">{title}</h3>
      <p>{description}</p>
      <div className="list-wrapper">
        <ul className="step-list list col-2">
          {list.map((item, index) => (
            <li key={index}>
              <img
                className="img-fluid"
                src={arrow_right}
                alt="Arrow Icon"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="step-image">
        <img className="img-fluid" src={image} alt={title} />
      </div>
    </div>
  </div>
);
export default StepItem;
