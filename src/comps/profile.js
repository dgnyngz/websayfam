import { useContext } from "react";
import { languageContext } from "../context/LanguageContext";
export const Profile = () => {
  const { language, data, setLanguage } = useContext(languageContext);
  return (
    <>
      <div className="profil-baslik">
        <h2>{data.profileSection.baslik[language]}</h2>
      </div>
      <div className="profile-section">
        <div className="info">
          <h2>{data.profileSection.bilgi[language]}</h2>
          <p>{data.profileSection.dogum[language]}</p>
          <p>{data.profileSection.ikamet[language]}</p>
          <p>{data.profileSection.egitim[language]}</p>
          <p>{data.profileSection.tercih[language]}</p>
        </div>
        <div className="about"></div>
      </div>
    </>
  );
};
