import React from "react";
import s from "../styles/ProjectContainer.module.css";
import NewLineText from "./NewLineText";
import Image from "./data-display/Image";

type Props = {
  imgSrc: string;
  title: String;
  description: String;
  projectLink?: string;
  bgColor: string;
  logoSrcs: Array<string>;
  tutorialLink?: string;
  sourceCodeLink?: string;
};

function ProjectContainer({
  imgSrc,
  title,
  description,
  projectLink,
  bgColor,
  logoSrcs,
  tutorialLink,
  sourceCodeLink,
}: Props) {
  return (
    <div className={s.ProjectContainer} style={{ backgroundColor: bgColor }}>
      <div className={s.texts_container}>
        <div>
          <div className={s.title}>
            <h4>{title}</h4>
          </div>
          <NewLineText text={description} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            {projectLink ? (
              <a
                className={s.try}
                href={projectLink}
                target="_blank"
                rel="noreferrer"
              >
                Click to try
              </a>
            ) : (
              ""
            )}
            {tutorialLink ? (
              <a
                className={s.try}
                href={tutorialLink}
                target="_blank"
                rel="noreferrer"
              >
                Tutorial
              </a>
            ) : (
              ""
            )}

            {sourceCodeLink ? (
              <a
                className={s.try}
                href={sourceCodeLink}
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={s.logo_section}>
          <p>Technology Used: &nbsp;&nbsp;</p>
          <div className={s.logo_container}>
            {logoSrcs.map((logo, index) => (
              <div key={index} className={s.logoItemContainer}>
                <Image alt="heremyas | Jeremiah Valencia" src={logo} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={s.img_container}>
        <Image alt="heremyas | Jeremiah Valencia" src={imgSrc} />
      </div>
    </div>
  );
}

export default ProjectContainer;
