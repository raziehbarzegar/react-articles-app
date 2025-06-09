import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const socialIconClass =
    "text-secondary text-3xl hover:scale-90 transition-transform duration-300";

  return (
    <div className="footer h-32 bg-primary mt-6 flex items-center">
      <div className="container">
        <div className="social-icons flex justify-center items-center gap-6">
          <Link
            to="https://www.instagram.com/razieh.brz/"
            className={socialIconClass}
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://www.linkedin.com/in/razieh-barzegar-770441214"
            className={`${socialIconClass} text-4xl`}
            target="_blank"
          >
            <CiLinkedin />
          </Link>
          <Link
            to="https://github.com/raziehbarzegar/"
            className={socialIconClass}
            target="_blank"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
