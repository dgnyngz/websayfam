import { useContext } from "react";
import { languageContext } from "../context/LanguageContext";
import jsLogo from "../logolar/js_logo.svg";
import figmaLogo from "../logolar/figma.svg";
import nodeLogo from "../logolar/node.svg";
import reduxLogo from "../logolar/redux.svg";
import vsLogo from "../logolar/vscode.svg";
import reactLogo from "../logolar/react.svg";
import { themeContext } from "../context/ThemeContext";

export const Skills = () => {
  const { language, data } = useContext(languageContext);
  const { darkMode } = useContext(themeContext);
  return (
    <>
      <div className={darkMode ? "skill-section-dark" : "skill-section"}>
        <div className={darkMode ? "baslik-dark" : "baslik"}>
          <h2>{data.headerSection.yetenekler[language]}</h2>
        </div>
        <div className={darkMode ? "logo-container-dark" : "logo-container"}>
          <div className="logolar">
            <img src={jsLogo} alt="logo"></img>
            <h2>JAVASCRIPT</h2>
          </div>
          <div className="logolar">
            <img src={reactLogo} alt="logo"></img>
            <h2>REACT</h2>
          </div>
          <div className="logolar">
            <img src={reduxLogo} alt="logo"></img>
            <h2>REDUX</h2>
          </div>
          <div className="logolar">
            <img src={nodeLogo} alt="logo"></img>
            <h2>NODE</h2>
          </div>
          <div className="logolar">
            <img src={vsLogo} alt="logo"></img>
            <h2>VS CODE</h2>
          </div>
          <div className="logolar">
            <img src={figmaLogo} alt="logo"></img>
            <h2>FİGMA</h2>
          </div>
        </div>
      </div>
    </>
  );
};
