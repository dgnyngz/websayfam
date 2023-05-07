import React from "react";

export const Project = (props) => {
  return (
    <div className="projects-box">
      <div className="projects-box-img">
        <img src="" alt="project-img"></img>
      </div>
      <div className="projects-box-text">
        <div>
          <h2>{props.proje}</h2>
          <p>{props.aciklama}</p>
        </div>
        <div className="projects-box-text-button">
          {props.konular.map((item, key) => (
            <div key={key}>
              <button>{item}</button>
            </div>
          ))}
        </div>
        <div className="projects-box-text-link">
          {props.linkler.map((link, index) => (
            <div key={index}>
              <a href={link.site}>{link.linkIsim}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
