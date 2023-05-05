import { useContext } from "react";
import { languageContext } from "../context/LanguageContext";
import jsLogo from "../logolar/js_logo.svg";
import figmaLogo from "../logolar/figma.svg";
import nodeLogo from "../logolar/node.svg";
import reduxLogo from "../logolar/redux.svg";
import vsLogo from "../logolar/vscode.svg";
import reactLogo from "../logolar/react.svg";

export const Skills = () => {
  const { language, data } = useContext(languageContext);
  return (
    <>
      <div>{data.headerSection.yetenekler[language]}</div>
      <img src={jsLogo} alt="logo" width="40px"></img>
      <h2>JAVASCRIPT</h2>
      <img src={reactLogo} width="40px" alt="logo"></img>
      <h2>REACT</h2>
      <img src={reduxLogo} width="40px" alt="logo"></img>
      <h2>REDUX</h2>
      <img src={nodeLogo} width="40px" alt="logo"></img>
      <h2>NODE</h2>
      <img src={vsLogo} width="40px" alt="logo"></img>
      <h2>VS CODE</h2>
      <img src={figmaLogo} width="40px" alt="logo"></img>
      <h2>FİGMA</h2>
    </>
  );
};
