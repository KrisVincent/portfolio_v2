import React from "react";
import s from "../styles/CertificateContainer.module.css";
import Image from "./data-display/Image";

function CertificateContainer({ imgSrc, title, bgColor, organizer, date }) {
  return (
    <div
      className={s.CertificateContainer}
      style={{ backgroundColor: bgColor }}
    >
      <div className={s.texts_container}>
        <h5 style={{ fontSize: "18px" }}>{organizer}</h5>
        <div className={s.title}>
          <h4>{title}</h4>
        </div>
        <p>{date}</p>
        {/* <a className={s.try} href={projectLink} target='_blank' rel="noreferrer">Click to try</a> */}
      </div>
      <div className={s.img_container}>
        <Image alt="heremyas | Jeremiah Valencia" src={imgSrc} />
      </div>
    </div>
  );
}

export default CertificateContainer;
