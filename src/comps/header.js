import { useContext } from "react";
// import fotoSvg from "../logolar/fotograf.svg";
import linkedin from "../logolar/linkedin.svg";
import { languageContext } from "../context/LanguageContext";
import github from "../logolar/github.svg";
export const Header = () => {
  const { language, data, setLanguage } = useContext(languageContext);
  function dilDegis() {
    setLanguage(language === "tr" ? "en" : "tr");
  }
  return (
    <>
      <div className="header">
        <div className="mods">
          <div className="mod">{data.headerSection.mode[language]}</div>
          <div className="cizgi">
            <hr />
          </div>
          <div className="dil">
            <button onClick={dilDegis} className="dil-button">
              {data.headerSection.dil[language]}
            </button>
          </div>
        </div>
        <div className="header-main">
          <div className="xx">
            <div className="selam">{data.headerSection.selam[language]}</div>
            <div className="tanitim">
              {data.headerSection.tanitim[language]}
            </div>
            <div className="header-icons">
              <a href="https://www.linkedin.com/in/do%C4%9Fan-yang%C3%B6z-4b9b22219/">
                <img
                  src={linkedin}
                  width="31px"
                  height="33.6"
                  alt="linkedinİcon"
                ></img>
              </a>

              <a href="https://github.com/dgnyngz">
                <img
                  src={github}
                  width="31px"
                  height="33.6"
                  alt="githubİcon"
                ></img>
              </a>
            </div>
            <div className="davet">{data.headerSection.davet[language]}</div>
          </div>
          <div className="foto">{/* <img src={fotoSvg}></img> */}</div>
        </div>
      </div>
    </>
  );
};
