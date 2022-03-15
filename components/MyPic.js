import Image from "next/image";
import React from "react";
import s from "../styles/MyPic.module.css";

function MyPic() {
  return (
    <div className={s.img_container}>
      <Image src={"/assets/images/heremyas.png"} width={700} height={700} />
    </div>
  );
}

export default MyPic;
