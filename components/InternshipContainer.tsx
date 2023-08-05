import React from "react";
import s from "../styles/InternshipContainer.module.css";
import NewLineText from "./NewLineText";

type Props = {
  imgSrc: string;
  title: String;
  description: String;
  projectLink?: string;
  bgColor: string;
  subtitle: String;
  sidetitle: String;
};

function InternshipContainer({
  imgSrc,
  title,
  description,
  projectLink,
  bgColor,
  subtitle,
  sidetitle,
}: Props) {
  return (
    <div className={s.InternshipContainer} style={{ backgroundColor: bgColor }}>
      <div className={s.texts_container}>
        <div className={s.title}>
          <h4>{`${title} (${sidetitle})`}</h4>
          <span style={{ color: "#00C2CB" }}>
            {subtitle && `(${subtitle})`}
          </span>
        </div>
        <NewLineText text={description} />
        {/* <a className={s.try} href={projectLink} target='_blank' rel="noreferrer">Click to try</a> */}
      </div>
      <div className={s.img_container}>
        <img src={imgSrc} />
      </div>
    </div>
  );
}

export default InternshipContainer;
