import React from "react";
import s from "../styles/MyPicMini.module.css";

type Props = {};

function MyPicMini({}: Props) {
  return (
    <div className={s.MyPicMini}>
      <div className={s.img_container}>
        <img src="/assets/images/heremyas.png" alt="My pic mini" />
      </div>
      <div className={s.texts}>
        <ul>
          <li>
            <p>Age: <span style={{color: '#00c2cb'}}>22 Years Old</span></p>
          </li>
          <li>
            <p>Civil Status: <span style={{color: '#00c2cb'}}>Single</span></p>
          </li>
          <li>
            <p>Blood Type: <span style={{color: '#00c2cb'}}>C++</span></p>
          </li>
          <li>
            <p>Spaces or Tabs? <span style={{color: '#00c2cb'}}>Tabs</span></p>
          </li>
          <li>
            <p>Vim or Emacs? <span style={{color: '#00c2cb'}}>Vim</span></p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyPicMini;
