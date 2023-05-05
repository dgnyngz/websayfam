import { useContext } from "react";

import { languageContext } from "../context/LanguageContext";

export const Header = () => {
  const { language, data } = useContext(languageContext);
  return (
    <>
      <div className="header">
        <div className="mods">
          <div className="mod">{data.headerSection.mode[language]}</div>
          <div className="cizgi">
            <hr />
          </div>
          <div className="dil">{data.headerSection.dil[language]}</div>
        </div>
        <div className="xx">
          <div className="selam">{data.headerSection.selam[language]}</div>
          <div className="tanitim">{data.headerSection.tanitim[language]}</div>
          <div className="davet">{data.headerSection.davet[language]}</div>
        </div>
      </div>
      <div>foto</div>
    </>
  );
};
