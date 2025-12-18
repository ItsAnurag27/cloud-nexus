// components/JobItem.jsx
import { useState } from "react";
import JobModal from "./JobModal";

const JobItem = ({
  id,
  title,
  image,
  time,
  location,
  description,
  experience,
  salary,
  deadline,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <div className="find-job-item">
        <div className="job-title">
          <h4 className="awards-name">{title}</h4>
        </div>
        <div className="job-details">
          <div className="job-image">
            <img className="img-fluid" src={image} alt={title} />
          </div>
          <div className="job-content">
            <div className="job-time">{time}</div>
            <div className="job-location">
              Location : <span>{location}</span>
            </div>
            <div className="job-desc">{description}</div>
            <div className="job-info">
              <div className="info-item info-experience">
                Experience : <span>{experience}</span>
              </div>
              <div className="info-item info-salary">
                Salary : <span>{salary}</span>
              </div>
              <div className="info-item info-deadline">
                Deadline : <span>{deadline}</span>
              </div>
            </div>
          </div>
          <div className="job-action">
            <button
              className="btn btn-effect text-white"
              onClick={() => setIsModalOpen(true)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <JobModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          jobData={{
            id,
            title,
            time,
            location,
            description,
            experience,
            salary,
            deadline,
          }}
        />
      )}
    </div>
  );
};

export default JobItem;
