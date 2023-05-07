import { useContext } from "react";
import { languageContext } from "../context/LanguageContext";

export const Footer = () => {
  const { language, data } = useContext(languageContext);
  return (
    <>
      <div className="footer-section">
        <div className="footer-main">
          <div className="footer-davet">
            {data.footerSection.istek[language]}
          </div>
          <div className="links">
            <a href="https://github.com/dgnyngz">GitHub</a>
            <br />
            <a href="https://github.com/dgnyngz">Personal Blog</a>
            <br />
            <a href="https://www.linkedin.com/in/do%C4%9Fan-yang%C3%B6z-4b9b22219/">
              Linkedin
            </a>
            <br />
            <a href="mailto:dgnyngz@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </>
  );
};
