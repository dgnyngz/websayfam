import React from "react";
import rectangle37 from "../../logolar/rectangle37.svg";
import rectangle36 from "../../logolar/rectangle36.svg";
export const Project = (props) => {
  return (
    <div className="projects-box">
      <div className="projects-box-text">
        <div className="projects-aciklama">
          <h2>{props.proje}</h2>
          <p>{props.aciklama}</p>
        </div>

        <div className="projects-box-text-pr">
          {props.konular.map((item, key) => (
            <div key={key}>
              <p>{item}</p>
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
      <img className="resimpc" src={rectangle37} alt=""></img>
      <img className="resim" src={rectangle36} alt=""></img>
    </div>
  );
};
