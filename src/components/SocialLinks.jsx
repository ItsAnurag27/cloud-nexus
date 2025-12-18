import { Link } from "react-router-dom";

export const SocialLinks = ({ customStyle = "", scale = "" }) => (
  <div className={`team-social  `}>
    <ul className={` ${customStyle}`}>
      {/* <li className={`${scale}`}>
        <Link to="#">
          <i className="fab fa-facebook-f" />
        </Link>
      </li> */}
      <li className={`${scale}`}>
      <a href="https://www.instagram.com/cloudnexus.in?igsh=dHZzczFiMjByMXU3" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-instagram text-3xl" />
</a>
      </li>
      {/* <li className={`${scale}`}>
        <Link to="#">
          <i className="fab fa-twitter" />
        </Link>
      </li> */}
      <li className={`${scale}`}>
        <a href="https://www.linkedin.com/company/cloudnexusorg/about/" target="_blank">
          <i className="fab fa-linkedin text-3xl" />
        </a>
      </li>
    </ul>
  </div>
);
