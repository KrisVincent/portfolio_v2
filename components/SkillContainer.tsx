import React, { Component } from "react";
import { ReactElement } from "react";
import s from "../styles/SkillContainer.module.css";
import NewLineText from "./NewLineText";
import Image from "./data-display/Image";

interface SkillProps {
  imgSrc?: string;
  title?: string;
  bgColor?: string;
  skillBar?: ReactElement;
}

function SkillContainer({ imgSrc, title, bgColor, skillBar }: SkillProps) {
  return (
    <div className={s.SkillContainer} style={{ backgroundColor: bgColor }}>
      <div className={s.texts_container}>
        <div>
          <div className={s.title}>
            <h4>{title}</h4>
          </div>
          {/* <NewLineText text={description} /> */}
          {skillBar}
          <div style={{ display: "flex", flexDirection: "column" }}></div>
        </div>
      </div>
      <div className={s.img_container}>
        <Image alt="heremyas | jeremiah valencia" src={imgSrc} />
      </div>
    </div>
  );
}

export default SkillContainer;
