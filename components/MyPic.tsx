import React from "react";
import s from "./MyPic.module.css";

function MyPic() {
  return (
    <div className={s.img_container}>
      <div>
        <img src="/assets/images/heremyas.png" />
      </div>
    </div>
  );
}

export default MyPic;
