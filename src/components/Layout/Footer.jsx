import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-white">
        <div className="container">
          <section>
            <a
              className="btn btn-link btn-floating btn-lg text-secondary-color m-1"
              href="https://www.linkedin.com/in/floyd-fernandes-03b771121/"
              role="button"
              target="_blank"
              rel="noreferrer"
              data-mdb-ripple-color="dark"
            >
              <LinkedInIcon />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-secondary-color m-1"
              href="floydfernandes20@gmail.com"
              role="button"
              target="_blank"
              rel="noreferrer"
              data-mdb-ripple-color="dark"
            >
              <EmailIcon />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-secondary-color m-1"
              href="https://github.com/floydfdes"
              role="button"
              target="_blank"
              rel="noreferrer"
              data-mdb-ripple-color="dark"
            >
              <GitHubIcon />
            </a>
          </section>
        </div>
        <div className="text-center text-secondary-color">
          Designed and Developed by Floyd Fernandes
        </div>
        <div className="text-center text-secondary-color p-2">
          © 2022 Copyright:
          <a className="text-secondary-color" href="https://mdbootstrap.com/">
            postpred.netlifyapp.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
