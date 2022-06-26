import React from "react";
import s from "../styles/SkillContainer.module.css";
import NewLineText from "./NewLineText";


function SkillContainer({
  imgSrc,
  title,
  description,
  projectLink,
  bgColor,
  logoSrcs,
  tutorialLink,
  sourceCodeLink
}) {
  return (
    <div className={s.SkillContainer} style={{ backgroundColor: bgColor }}>
      <div className={s.texts_container}>
        <div>
          <div className={s.title}>
            <h4>{title}</h4>
          </div>
          <NewLineText text={description} />
          <div style={{display: 'flex', flexDirection: 'column'}}>

          </div>
        </div>
      </div>
      <div className={s.img_container}>
        <img src={imgSrc} />
      </div>
    </div>
  );
}

export default SkillContainer;
