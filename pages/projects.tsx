import React from "react";
import MyPic from "../components/MyPic";
import Navbar from "../components/Navbar";
import ProjectContainer from "../components/ProjectContainer";
import ScrollDown from "../components/ScrollDown";
import { COLORS, NAVBAR_ITEMS } from "../enums";
import capitalize from "../utils/capitalize";
import { Head } from "../components";
import { Container } from "@chakra-ui/react";
import HeadlineCard from "../components/data_display/HeadlineCard";

function projects() {
  const tech_logos = "/assets/images/tech_logos";
  return (
    <>
      <Head
        title={`${capitalize(NAVBAR_ITEMS.Projects)} | Jeremiah Valencia`}
        meta={{ content: `${capitalize(NAVBAR_ITEMS.Projects)} heremyas` }}
      />
      <Navbar active={NAVBAR_ITEMS.Projects} />
      <Container maxW="container.xl" height="100vh" position="relative">
        <HeadlineCard lineHeight="1.2em">
          <h4>
            List of
            {/* prettier-ignore */}
            <span style={{ color: COLORS.Blue, fontSize: '2em' }}> projects </span>
          </h4>
          <br />
          <h2>i have proudly created</h2>
        </HeadlineCard>
        <MyPic />
        <ScrollDown />
      </Container>

      <ProjectContainer
        title="heremyas.me"
        description="heremyas.me is a blog site of mine. I use NEXTJS for the Frontend and DJANGO for the Backend. In this project, I learned how to create a Server and connect it in a Client."
        projectLink="https://www.heremyas.me/"
        imgSrc="/assets/images/projects/jemtech.png"
        bgColor="#090d1f"
        logoSrcs={[
          `${tech_logos}/react.png`,
          `${tech_logos}/javascript.png`,
          `${tech_logos}/css.png`,
          `${tech_logos}/next.png`,
          `${tech_logos}/bootstrap.png`,
          `${tech_logos}/django.png`,
          `${tech_logos}/heroku.png`,
        ]}
      />
      <ProjectContainer
        title="Real-time Chat App"
        description="A boring afternoon when I am scrolling on my messenger, then suddenly a great idea popped up in my head. 'What if I build something like this?' I said to myself. So I head over to my laptop and started coding the web app. I also took this opportunity to create tutorial for my Youtube channel."
        projectLink="https://chatappz.netlify.app/"
        tutorialLink="https://youtu.be/8yqOD4gifyI"
        imgSrc="/assets/images/projects/chatapp.png"
        bgColor="#131314"
        logoSrcs={[
          `${tech_logos}/html.png`,
          `${tech_logos}/css.png`,
          `${tech_logos}/javascript.png`,
          `${tech_logos}/socketio.png`,
          `${tech_logos}/express.png`,
        ]}
      />

      <ProjectContainer
        title="Bebe Time (Watch Youtube Video Together)"
        description={`This was inspired by Joma Tech's 'Cool Kids code in Javascript' video. I was amazed and wanted to try it but he didn't share the source code, so I built my own version. 2 or more user can watch youtube video synced together, if the user paused, played or seek the video, it will be reflected on other users.\n\n
        
        NOTE: The video id is the random string on the link after '...v=' (e.g 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' The video id is 'dQw4w9WgXcQ'. After entering, copy and send the link to your friends.)`}
        imgSrc="/assets/images/projects/bebetime.png"
        projectLink={"https://bebetime.netlify.app/"}
        bgColor="#151324"
        logoSrcs={[
          `${tech_logos}/html.png`,
          `${tech_logos}/css.png`,
          `${tech_logos}/javascript.png`,
          `${tech_logos}/express.png`,
          `${tech_logos}/socketio.png`,
          `${tech_logos}/youtube.png`,
        ]}
      />

      <ProjectContainer
        title="Triconverter App"
        description="This is one of the most stressing yet proudest projects I have ever built. This app was used to control our thesis hardware project. This is stressing because even though it's my first time using Flutter and Develop a Mobile App, I still managed to finish it within just a week."
        imgSrc="/assets/images/projects/tricon.png"
        bgColor="#2e1500"
        logoSrcs={[
          `${tech_logos}/dart.png`,
          `${tech_logos}/flutter.png`,
          `${tech_logos}/figma.png`,
        ]}
      />
      <ProjectContainer
        title="Python File Organizer"
        description="Python sys library is one of the coolest python library, so to practice my python skill and to upload video on my youtube channel, I created something that is helpful and can be used to solve a realworld problem."
        imgSrc="/assets/images/projects/file_organizer.jpg"
        tutorialLink="https://youtu.be/272tVFAGbBg"
        sourceCodeLink={"https://github.com/heremyas/file_organizer.git"}
        bgColor="#0a1c1e"
        logoSrcs={[`${tech_logos}/python.png`]}
      />

      <ProjectContainer
        title="Botanim"
        description="Botanim is a Front End Project that i built as a practice for my React skill. I use the trefle plant API to gather data and React JS for the main U/I. But unfortunately for some technical reasons the server went down so images and other texts may not be visible. You can still click the link to try it"
        projectLink="https://botanim.netlify.app/"
        imgSrc="/assets/images/projects/botanim.png"
        bgColor="#091f0f"
        logoSrcs={[
          `${tech_logos}/react.png`,
          `${tech_logos}/javascript.png`,
          `${tech_logos}/css.png`,
          `${tech_logos}/trefle.png`,
        ]}
      />
    </>
  );
}

export default projects;
