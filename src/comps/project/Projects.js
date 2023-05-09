import React, { useContext } from "react";
import { Project } from "./Project";
import ProjectsData from "./ProjectData";
import { languageContext } from "../../context/LanguageContext";
import { themeContext } from "../../context/ThemeContext";
import "./Projects.css";
const Projects = () => {
  const { data, language } = useContext(languageContext);
  const { darkMode } = useContext(themeContext);
  return (
    <div className={darkMode ? "projects-dark" : "projects"}>
      <div className={darkMode ? "baslik-project-dark" : "baslik-project"}>
        <h2>{data.projectSection.baslik[language]}</h2>
      </div>
      <div className="project">
        {ProjectsData.map((proje) => (
          <div key={proje.id}>
            <Project
              proje={proje.proje}
              aciklama={proje.aciklama}
              konular={proje.konular}
              linkler={proje.linkler}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
