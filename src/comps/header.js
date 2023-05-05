import { useContext } from "react";
import mockData from "../mocks/Data";
import { languageContext } from "../context/languageContext";

export const Header = () => {
  const { language } = useContext(languageContext);
  return (
    <div>
      <div>{mockData.headerSection.mode[language]}</div>
      <div>{mockData.headerSection.dil.tr}</div>
    </div>
  );
};
