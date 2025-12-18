import { useState } from "react";
import JobItem from "../../components/JobItem";
import jobImage1 from '../../assets/images/jobs/01.jpg';
import jobImage2 from '../../assets/images/jobs/02.jpg';
import jobImage3 from '../../assets/images/jobs/03.jpg';
import Pagination from "../../components/Pagination";
import subtitleicon from "../../assets/images/subtitle-icon.png"

const JobPosting = () => {
  const jobs = [
    {
      id: 1,
      title: "Web Designer",
      image: jobImage1,
      time: "Full Time",
      location: "Bhopal, India",
      description:
        "We are looking for a creative Web Designer to build engaging and visually appealing websites. You will work with our development team to create responsive and user-friendly interfaces.",
      experience: "0-2 Years",
      salary: "₹3,00,000 - ₹4,00,000 per annum",
      deadline: "20 Mar 2025",
    },
    {
      id: 2,
      title: "Devops Engineer",
      image: jobImage2,
      time: "Full Time",
      location: "Bhopal, India",
      description:
        "Join our dynamic engineering team as a DevOps Engineer. You’ll be responsible for designing, implementing, and managing CI/CD pipelines, automating infrastructure, and ensuring system reliability and scalability",
      experience: "0-2 Years",
      salary: "₹3,00,000 - ₹4,00,000 per annum",
      deadline: "15 Apr 2025",
    },
    {
      id: 3,
      title: "PHP Developer",
      image: jobImage3,
      time: "Full Time",
      location: "Bhopal, India",
      description:
        "We are seeking an experienced PHP Developer to build and maintain web applications. You will work on backend development and ensure the performance and scalability of our web solutions.",
      experience: "0-2 Years",
      salary: "₹3,50,000 - ₹4,50,000 per annum",
      deadline: "30 Mar 2025",
    },
    {
      id: 4,
      title: "React Developer",
      image: jobImage3,
      time: "Remote",
      location: "Bhopal, India",
      description:
        "We are looking for a skilled React Developer to develop and maintain modern web applications. You will work closely with designers and backend developers to implement user-friendly interfaces.",
      experience: "0-2 Years",
      salary: "₹3,00,000 - ₹4,00,000 per annum",
      deadline: "30 Mar 2025",
    },
    {
      id: 5,
      title: "Data Analyst",
      image:jobImage3,
      time: "Full Time",
      location: "Bhopal, India",
      description:
        "We are hiring a Data Analyst to analyze large datasets and provide actionable insights for business growth. You will work with various teams to enhance data-driven decision-making.",
      experience: "0-2 Years",
      salary: "₹3,50,000 - ₹4,00,000 per annum",
      deadline: "30 Mar 2025",
    },
  ];

  const jobsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const displayedJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="space-pt xl:!pt-6 relative">
      <div className="container">
        <div className="row justify-center">
          <div className="col-md-10">
            <div className="section-title text-center">
              <span className="sub-title justify-center flex items-center">
                <img
                  className="img-fluid w-6 mr-2"
                  src={subtitleicon}
                  alt="Subtitle Icon"
                />
                Open Positions
              </span>
              <h2 className="title">Find Your Job Here</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="find-job-wrapper">
              {displayedJobs.map((job, index) => (
                <JobItem key={index} {...job} />
              ))}
            </div>
          </div>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default JobPosting;
