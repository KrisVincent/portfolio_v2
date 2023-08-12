import { Head } from "../components";
import s from "../styles/Skills.module.css";
import Navbar from "../components/Navbar";
import MyPic from "../components/MyPic";
import ScrollDown from "../components/ScrollDown";
import SkillBar from "../components/SkillBar";
import { NAVBAR_ITEMS } from "../enums";
import capitalize from "../utils/capitalize";
import { Stack } from "@chakra-ui/react";
import SkillCard from "../components/data_display/SkillCard";
import { Container } from "@chakra-ui/react";
import SkillSet from "../models/skill";
import HeadlineCard from "../components/data_display/HeadlineCard";

const tech_logos = "/assets/images/tech_logos";

const skillSet: Array<SkillSet> = [
  {
    title: "HTML",
    skillBar: <SkillBar percentage="90%" bgColor="#E44D26" />,
    imgSrc: `${tech_logos}/html.png`,
    bgColor: "#090d1f",
  },
  {
    title: "CSS",
    skillBar: <SkillBar percentage="85%" bgColor="#2965F1" />,
    imgSrc: `${tech_logos}/css.png`,
    bgColor: "#090d1f",
  },
  {
    title: "JavaScript",
    skillBar: <SkillBar percentage="80%" bgColor="#F0DB4F" />,
    imgSrc: `${tech_logos}/javascript.png`,
    bgColor: "#090d1f",
  },
  {
    title: "React",
    skillBar: <SkillBar percentage="70%" bgColor="#62DAFB" />,
    imgSrc: `${tech_logos}/react.png`,
    bgColor: "#090d1f",
  },
  {
    title: "Next JS",
    skillBar: <SkillBar percentage="60%" bgColor="#ffffff" />,
    imgSrc: `${tech_logos}/next.png`,
    bgColor: "#090d1f",
  },
  {
    title: "Typescript",
    skillBar: <SkillBar percentage="55%" bgColor="#007ACC" />,
    imgSrc: `${tech_logos}/typescript.png`,
    bgColor: "#090d1f",
  },
  {
    title: "Python",
    skillBar: <SkillBar percentage="70%" bgColor="#FFD041" />,
    imgSrc: `${tech_logos}/python.png`,
    bgColor: "#090d1f",
  },
  {
    title: "Flask",
    skillBar: <SkillBar percentage="65%" bgColor="#ffffff" />,
    imgSrc: `${tech_logos}/flask.png`,
    bgColor: "#090d1f",
  },
  {
    title: "Bootstrap",
    skillBar: <SkillBar percentage="80%" bgColor="#7611F6" />,
    imgSrc: `${tech_logos}/bootstrap.png`,
    bgColor: "#090d1f",
  },
  {
    title: "Flutter",
    skillBar: <SkillBar percentage="55%" bgColor="#55C5F8" />,
    imgSrc: `${tech_logos}/flutter.png`,
    bgColor: "#090d1f",
  },
  {
    title: "Git",
    skillBar: <SkillBar percentage="55%" bgColor="#F05033" />,
    imgSrc: `${tech_logos}/git.png`,
    bgColor: "#090d1f",
  },
  {
    title: "API",
    skillBar: <SkillBar percentage="57%" bgColor="#223C5B" />,
    imgSrc: `${tech_logos}/api.png`,
    bgColor: "#090d1f",
  },
  {
    title: "MySQL",
    skillBar: <SkillBar percentage="65%" bgColor="#F56202" />,
    imgSrc: `${tech_logos}/mysql.png`,
    bgColor: "#090d1f",
  },
];

function skills() {
  return (
    <div className={s.Skills}>
      <Head
        title={`${capitalize(NAVBAR_ITEMS.Skills)} | Jeremiah Valencia`}
        meta={{
          content: `${capitalize(
            NAVBAR_ITEMS.Skills
          )} Skills Jeremiah Valencia`,
        }}
      />

      <Navbar active={NAVBAR_ITEMS.Skills} />
      <Container maxW="container.xl" height="100vh" position="relative">
        <HeadlineCard lineHeight="1.2em">
          <h4>
            Skills I{/* prettier-ignore */}
            <span style={{ fontSize: "1.7em", color: "#00c2cb" }}> Gained and learned </span>
          </h4>
          <span style={{ fontSize: "1.7em" }}> in my course</span>
          <span style={{ fontSize: "1.7em" }}>and self study</span>
        </HeadlineCard>
        <MyPic />
        <ScrollDown />
      </Container>
      <Container maxW="2xl" centerContent>
        <Stack
          width={{ lg: "900px", md: "700px", sm: "400px", base: "300px" }}
          spacing="4"
        >
          {skillSet.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              bgColor={skill.bgColor}
              imgSrc={skill.imgSrc}
              skillBar={skill.skillBar}
            />
          ))}
        </Stack>
      </Container>
    </div>
  );
}

export default skills;
