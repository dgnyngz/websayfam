import { useContext } from "react";
import { languageContext } from "../context/LanguageContext";
export const Profile = () => {
  const { language, data } = useContext(languageContext);
  return (
    <>
      <div className="profile-main">
        <div className="profil-baslik">
          <h2>{data.profileSection.baslik[language]}</h2>
        </div>
        <div className="profile-section">
          <div className="info">
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
          <div className="about">
            <h2>{data.profileSection.hakkimda[language]}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
