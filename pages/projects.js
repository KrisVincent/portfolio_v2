import React from "react";
import MyPic from "../components/MyPic";
import Navbar from "../components/Navbar";
import ProjectContainer from "../components/ProjectContainer";
import s from "../styles/Projects.module.css";

function projects() {
  return (
    <div className={s.Projects}>
      <Navbar currentPage={3} />
      <div className={s.texts_container}>
        <div className={s.txt_container}>
          <h4>
            List of my{" "}
            <span style={{ fontSize: "1.7em" }}>Most proudest projects</span>{" "}
          </h4>
        </div>
        <MyPic />
      </div>

      <ProjectContainer
        title="Botanim"
        description="Botanim is a Front End Project that i built as a practice for my React skill. I use the trefle plant API to gather data and React JS for the main U/I. But unfortunately for some reason the server went down so images and other texts may not be visible. You can still click the link to try it"
        projectLink="https://botanim.netlify.app/"
        imgSrc="https://imgur.com/WdcaR9T.png"
        bgColor="#091f0f"
      />
      <ProjectContainer
        title="Jemtech"
        description="Jem Tech is a blog site of mine. I use NEXTJS for the Frontend and DJANGO for the Backend. In this project, I learned how to create a Server and connect it in a Client."
        projectLink="https://www.heremyas.me/"
        imgSrc="https://imgur.com/qSfYQwD.png"
        bgColor="#090d1f"
      />
      <ProjectContainer
        title="Real-time Chat App"
        description="Officia ipsum dolore irure sunt fugiat. Aliqua irure incididunt commodo esse eu officia dolore veniam pariatur aliquip eu aliqua. Excepteur minim adipisicing ex labore fugiat ullamco minim. Ea ullamco fugiat dolor pariatur enim. Elit aliquip quis Lorem culpa Lorem pariatur laboris incididunt enim et esse mollit."
        projectLink="https://chatappz.netlify.app/"
        imgSrc="https://i.imgur.com/DYlMDMb.png"
        bgColor="#131314"
      />
    </div>
  );
}

export default projects;
