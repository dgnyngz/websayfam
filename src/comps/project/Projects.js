import React, { useContext } from "react";
import { Project } from "./Project";
import ProjectsData from "./ProjectData";
import { languageContext } from "../../context/LanguageContext";
import "./Projects.css";
const Projects = () => {
  const { data, language } = useContext(languageContext);
  return (
    <div className="projects">
      <div className="container">
        <div className="baslik-project">
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
    </div>
  );
};

export default Projects;
