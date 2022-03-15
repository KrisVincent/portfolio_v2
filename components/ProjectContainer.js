import React from "react";
import s from "../styles/ProjectContainer.module.css";

function ProjectContainer({ imgSrc, title, description, projectLink, bgColor }) {
  return (
    <div className={s.ProjectContainer} style={{backgroundColor: bgColor}}>
      <div className={s.texts_container}>
        <div className={s.title}>
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
        <a className={s.try} href={projectLink} target='_blank'>Click to try</a>
      </div>
      <div className={s.img_container}>
        <img src={imgSrc} />
      </div>
    </div>
  );
}

export default ProjectContainer;
