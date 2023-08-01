// import Image from "next/image";
import React from "react";
import s from "../styles/MyPic.module.css";

function MyPic() {
  return (
    <div className={s.img_container}>
      {/* <div className={s.child_img_container}> */}
      {/* <Image src={"/assets/images/heremyas.png"} width={660} height={600} /> */}
      <div>
        <img src="/assets/images/heremyas.png" />
      </div>
      {/* </div> */}
    </div>
  );
}

export default MyPic;
