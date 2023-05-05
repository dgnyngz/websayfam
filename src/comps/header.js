import { useContext } from "react";

import { languageContext } from "../context/LanguageContext";

export const Header = () => {
  const { language, data } = useContext(languageContext);
  return (
    <>
      <div>
        <div>{data.headerSection.mode[language]}</div>
        <div>{data.headerSection.dil[language]}</div>
        <div>{data.headerSection.selam[language]}</div>
        <div>{data.headerSection.tanitim[language]}</div>
        <div>{data.headerSection.davet[language]}</div>
      </div>
      <div>foto</div>
    </>
  );
};
