import { useContext } from "react";
import { languageContext } from "../context/LanguageContext";
import { themeContext } from "../context/ThemeContext";
export const Footer = () => {
  const { language, data } = useContext(languageContext);
  const { darkMode } = useContext(themeContext);
  return (
    <>
      <div className={darkMode ? "footer-section-dark" : "footer-section"}>
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
