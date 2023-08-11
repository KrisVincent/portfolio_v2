import { Variants, motion } from "framer-motion";
import style from "./TypewriterEffect.module.css";

// NOTE: Make sure to just add elements and br only
// make sure no comment in the children

type Props = {
  children: Array<JSX.Element>;
};

const sentence: Variants = {
  hidden: { display: "initial" },
  visible: {
    display: "initial",
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter: Variants = {
  hidden: {
    display: "none",
    y: 50,
  },
  visible: {
    display: "initial",
    y: 0,
  },
};

const TypewriterEffect = ({ children }: Props) => {
  const ChakraCursor = motion(children.slice(-1)[0].type);

  return (
    <div className={style.TypewriterEffect}>
      <motion.div
        className="headline-title"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {children.map((component: JSX.Element, componentIndex) => {
          const MotionComponent = motion(component.type);

          return (
            <span style={component.props.style} key={componentIndex}>
              {component.type !== "br" ? (
                component.props.children.split("").map((char, index) => {
                  return (
                    <MotionComponent key={`${char}-${index}`} variants={letter}>
                      {char}
                      {component.props.children.length - 1 === index &&
                        children.length - 1 !== componentIndex && <br />}
                    </MotionComponent>
                  );
                })
              ) : (
                <MotionComponent
                  key={componentIndex}
                  variants={letter}
                ></MotionComponent>
              )}
            </span>
          );
        })}
        <ChakraCursor
          animate={{
            opacity: [1, 1, 0],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 0.7,
            repeat: Infinity,
            repeatType: "loop",
          }}
          variants={{
            hidden: {
              display: "initial",
            },
            visible: {
              display: "initial",
            },
          }}
        >
          |
        </ChakraCursor>
      </motion.div>
    </div>
  );
};

export default TypewriterEffect;
