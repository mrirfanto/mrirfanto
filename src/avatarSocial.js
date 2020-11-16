import React from "react";
import circleAva from "./assets/circleAva.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const AvatarSocial = () => {
  return (
    <div>
      <div className="avatar">
        <img src={circleAva} alt="avatar" />
      </div>
      <ul>
        <li className="icons">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </li>
        <li className="icons">
          <FontAwesomeIcon icon={faGithub} />
        </li>
        <li className="icons">
          <FontAwesomeIcon icon={faTwitter} />
        </li>
      </ul>
    </div>
  );
};

export default AvatarSocial;
