import { Head } from "../components";
import s from "../styles/Skills.module.css";
import Navbar from "../components/Navbar";
import MyPic from "../components/MyPic";
import ScrollDown from "../components/ScrollDown";
import SkillContainer from "../components/SkillContainer";
import SkillBar from "../components/SkillBar";
// import SkillBar from "../components/SkillBar";

function skills() {
  const tech_logos = "/assets/images/tech_logos";
  return (
    <div className={s.Skills}>
      <Head
        title="Skills | Jeremiah Valencia"
        meta={{ content: "Skills Jeremiah Valencia" }}
      />

      <Navbar currentPage={6} />
      <div className={s.texts_container}>
        <div className={s.txt_container}>
          <h4>
            Skills I{" "}
            <span style={{ fontSize: "1.7em", color: "#00c2cb" }}>
              Gained and learned
            </span>
            <span style={{ fontSize: "1.7em" }}> in my course</span> and
            <span style={{ fontSize: "1.7em" }}> self study</span>{" "}
          </h4>
        </div>
        <MyPic />
        <ScrollDown />
      </div>
      {/* <h3>SOFTWARE</h3> */}

      {/* <SkillBar /> */}

      <SkillContainer
        title="HTML"
        skillBar={<SkillBar percentage="90%" bgColor="#E44D26" />}
        imgSrc={`${tech_logos}/html.png`}
        bgColor="#090d1f"
      />

      <SkillContainer
        title="CSS"
        skillBar={<SkillBar percentage="85%" bgColor="#2965F1" />}
        imgSrc={`${tech_logos}/css.png`}
        bgColor="#090d1f"
      />

      <SkillContainer
        title="JavaScript"
        skillBar={<SkillBar percentage="80%" bgColor="#F0DB4F" />}
        imgSrc={`${tech_logos}/javascript.png`}
        bgColor="#090d1f"
      />

      <SkillContainer
        title="React"
        skillBar={<SkillBar percentage="70%" bgColor="#62DAFB" />}
        imgSrc={`${tech_logos}/react.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="Next JS"
        skillBar={<SkillBar percentage="60%" bgColor="#ffffff" />}
        imgSrc={`${tech_logos}/next.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="Typescript"
        skillBar={<SkillBar percentage="55%" bgColor="#007ACC" />}
        imgSrc={`${tech_logos}/typescript.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="Node JS"
        skillBar={<SkillBar percentage="45%" bgColor="#8CC84B" />}
        imgSrc={`${tech_logos}/node.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="Python"
        skillBar={<SkillBar percentage="70%" bgColor="#FFD041" />}
        imgSrc={`${tech_logos}/python.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="Django"
        skillBar={<SkillBar percentage="40%" bgColor="#27AB78" />}
        imgSrc={`${tech_logos}/django.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="Flask"
        skillBar={<SkillBar percentage="65%" bgColor="#ffffff" />}
        imgSrc={`${tech_logos}/flask.png`}
        bgColor="#090d1f"
      />

      <SkillContainer
        title="Bootstrap"
        skillBar={<SkillBar percentage="80%" bgColor="#7611F6" />}
        imgSrc={`${tech_logos}/bootstrap.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="Git"
        skillBar={<SkillBar percentage="55%" bgColor="#F05033" />}
        imgSrc={`${tech_logos}/git.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="Heroku"
        skillBar={<SkillBar percentage="40%" bgColor="#8062A7" />}
        imgSrc={`${tech_logos}/heroku.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="Laravel"
        skillBar={<SkillBar percentage="50%" bgColor="#FF291A" />}
        imgSrc={`${tech_logos}/laravel.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="Dart"
        skillBar={<SkillBar percentage="40%" bgColor="#0082C8" />}
        imgSrc={`${tech_logos}/dart.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="Flutter"
        skillBar={<SkillBar percentage="55%" bgColor="#55C5F8" />}
        imgSrc={`${tech_logos}/flutter.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="API"
        skillBar={<SkillBar percentage="57%" bgColor="#223C5B" />}
        imgSrc={`${tech_logos}/api.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="JSON"
        skillBar={<SkillBar percentage="60%" bgColor="#ffffff" />}
        imgSrc={`${tech_logos}/json.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="PHP"
        skillBar={<SkillBar percentage="65%" bgColor="#777CB4" />}
        imgSrc={`${tech_logos}/php.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="Java"
        skillBar={<SkillBar percentage="45%" bgColor="#223C5B" />}
        imgSrc={`${tech_logos}/java.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="C++"
        skillBar={<SkillBar percentage="40%" bgColor="#00599C" />}
        imgSrc={`${tech_logos}/c++.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="C"
        skillBar={<SkillBar percentage="35%" bgColor="#649AD2" />}
        imgSrc={`${tech_logos}/c.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="MySQL"
        skillBar={<SkillBar percentage="65%" bgColor="#F56202" />}
        imgSrc={`${tech_logos}/mysql.png`}
        bgColor="#090d1f"
      />
      <SkillContainer
        title="PostgreSQL"
        skillBar={<SkillBar percentage="50%" bgColor="#223C5B" />}
        imgSrc={`${tech_logos}/postgresql.png`}
        bgColor="#090d1f"
      />
    </div>
  );
}

export default skills;
