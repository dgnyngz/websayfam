import { useContext } from "react";
import { languageContext } from "../context/LanguageContext";
import { themeContext } from "../context/ThemeContext";
export const Profile = () => {
  const { language, data } = useContext(languageContext);
  const { darkMode } = useContext(themeContext);
  return (
    <>
      <div className={darkMode ? "profile-main-dark" : "profile-main"}>
        <div className="profil-baslik">
          <h2>{data.profileSection.baslik[language]}</h2>
        </div>
        <div className={darkMode ? "profile-section-dark" : "profile-section"}>
          <div className={darkMode ? " info-dark" : "info"}>
            <h2>{data.profileSection.bilgi[language]}</h2>
            <div className="bilgiler">
              <div>
                <p>{data.profileSection.dogum[language]}</p>
                <p>{data.profileSection.ikamet[language]}</p>
                <p>{data.profileSection.egitim[language]}</p>
                <p>{data.profileSection.tercih[language]}</p>
              </div>
              <div>
                <p>11.06.1996</p>
                <p>Erzurum</p>
                <p>Atatürk Ünv. İnşaat Mühendisliği,2021</p>
                <p>FullStack Web Developer</p>
              </div>
            </div>
          </div>
          <div className={darkMode ? "about-dark" : "about"}>
            <h2>{data.profileSection.hakkimda[language]}</h2>
            <p>{data.profileSection.aciklama[language]}</p>
            <p>{data.profileSection.aciklama2[language]}</p>
          </div>
        </div>
      </div>
    </>
  );
};
