import Head from "next/head";
import MyPic from "../components/MyPic";
import Navbar from "../components/Navbar";
import ScrollDown from "../components/ScrollDown";
import s from "../styles/Resume.module.css";
import { COLORS, NAVBAR_ITEMS } from "../enums";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";
import HeadlineCard from "../components/data_display/HeadlineCard";
import SkillCard from "../components/data_display/SkillCard";
import { Field as FormikField, Form as FormikForm, Formik } from "formik";

const socials = [
  {
    platform: "Instagram",
    username: "@heremyaz",
    link: "https://www.instagram.com/heremyaz",
    iconLink:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
  },
  {
    platform: "Youtube",
    username: "@heremyas",
    link: "https://www.youtube.com/heremyas",
    iconLink:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png",
  },
  {
    platform: "Email",
    username: "Jeremiah Valencia",
    link: "valenciajeremiah01@gmail.com",
    iconLink:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Email_icon.png",
  },
];

function validateName(value) {
  let error;
  if (!value) {
    error = "Name is required";
  } else if (value.toLowerCase() !== "naruto") {
    error = "Jeez! You're not a fan 😱";
  }
  return error;
}

export default function HomePage() {
  return (
    <div className={s.Resume}>
      <Head>
        <title>Resume | Jeremiah Valencia</title>
        <meta name="description" content="Resume Jeremiah Valencia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={NAVBAR_ITEMS.Contact} />
      <Container maxW="container.xl" height="100vh">
        <HeadlineCard>
          <h4 style={{ fontSize: "1.7em", color: "#00c2cb" }}>Contact</h4>
          <span>Me</span>
        </HeadlineCard>
        <MyPic />
        <ScrollDown />
      </Container>
      <Container maxW="2xl" centerContent padding="50px 0">
        <Stack
          width={{ lg: "900px", md: "700px", sm: "400px", base: "300px" }}
          spacing="4"
        >
          {socials.map((social, index) => (
            <SkillCard
              key={index}
              title={social.username}
              imgSrc={social.iconLink}
              bgColor=""
              skillBar={
                social.platform === "Youtube" ? (
                  <Link color={COLORS.Blue} href={social.link} isExternal>
                    Subscribe: {social.link}
                  </Link>
                ) : social.platform === "Instagram" ? (
                  <Link color={COLORS.Blue} href={social.link} isExternal>
                    Follow me: {social.link}
                  </Link>
                ) : social.platform === "Email" ? (
                  <Link color={COLORS.Blue} href={social.link} isExternal>
                    Email me: {social.link}
                  </Link>
                ) : (
                  <></>
                )
              }
            />
          ))}
        </Stack>
      </Container>
      <Container maxW="2xl" centerContent>
        <Heading>Send Me A Message</Heading>
        <Formik
          initialValues={{ name: "Sasuke" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <FormikForm style={{ width: "100%" }}>
              <FormikField name="fullName" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel>Full Name</FormLabel>
                    <Input {...field} placeholder="name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </FormikField>
              <FormikField name="email" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel>Email</FormLabel>
                    <Input {...field} placeholder="name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </FormikField>
              <FormikField
                as="textarea"
                rows="4"
                name="message"
                validate={validateName}
              >
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel>Message</FormLabel>
                    <Input {...field} placeholder="Message..." />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </FormikField>
              <Button
                mt={4}
                // colorScheme={COLORS.Blue}
                backgroundColor={COLORS.Blue}
                color="white"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </FormikForm>
          )}
        </Formik>
      </Container>
    </div>
  );
}
