import { Variants, motion } from "framer-motion";
import style from "./TypewriterEffect.module.css";
import { ReactNode } from "react";
import ChakraCursor from "./components/ChakraCursor";

// NOTE: Make sure to just add elements and br only
// make sure no comment in the children

type Props = {
  children: Array<JSX.Element>;
  animationSpeed: number;
};

const TypewriterEffect = ({ animationSpeed, children }: Props) => {
  const sentence: Variants = {
    hidden: { display: "initial" },
    visible: {
      display: "initial",
      transition: {
        delay: 0.5,
        staggerChildren: animationSpeed,
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

  const getComponent = (component: JSX.Element, componentIndex, children) => {
    const componentProps = component.props;
    const componentType = component.type;
    const componentChildren = componentProps.children;
    const MotionComponent = motion(componentType);

    let componentNode: ReactNode;

    switch (componentType) {
      case "br":
        componentNode = (
          <MotionComponent
            key={componentIndex}
            variants={letter}
          ></MotionComponent>
        );
        break;

      default:
        // there is <span> in line
        if (Array.isArray(componentChildren)) {
          let subChildText = "";
          componentChildren.map((componentChild) => {
            typeof componentChild == "string"
              ? subChildText.concat(componentChild)
              : subChildText.concat(componentChild.props.children);
          });
          componentNode = componentChildren.map((subChild) => {
            const subChildProps = subChild.props;
            const isText = typeof subChild == "string";

            return displayAnimatedString(
              isText ? subChild : subChildProps.children,
              MotionComponent,
              children,
              componentIndex,
              !isText && subChildProps.style,
              subChildText.length,
              true
            );
          });
        } else {
          componentNode = displayAnimatedString(
            componentProps.children, // textString
            MotionComponent, // Motion Component
            children, //
            componentIndex,
            componentProps.style
          );
        }
        break;
    }
    return componentNode;
  };

  const displayAnimatedString = (
    text,
    MotionComponent,
    children,
    componentIndex,
    style?,
    subChildTextLength?,
    isNested?
  ) => {
    const indexOfLastItemInComponent = text.length - 1;
    const indexOfLastComponentInChildren = children.length - 1;

    return text.split("").map((char, charIndex) => {
      return (
        <MotionComponent
          style={style}
          key={`${char}-${charIndex}`}
          variants={letter}
        >
          {char}
          {/* add br if the index reaches the index of the last item in component */}
          {isNested
            ? subChildTextLength - 1 === charIndex
            : indexOfLastItemInComponent === charIndex &&
              // this line is for not letting the br reach the very bottom of the
              // text so no new line at the very end
              indexOfLastComponentInChildren !== componentIndex && <br />}
        </MotionComponent>
      );
    });
  };

  return (
    <div className={style.TypewriterEffect}>
      <motion.div
        className="headline-title"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {children.map((component: JSX.Element, componentIndex) => {
          return (
            <span key={componentIndex}>
              {getComponent(component, componentIndex, children)}
            </span>
          );
        })}
        <ChakraCursor lastChildType={String(children.slice(-1)[0].type)} />
      </motion.div>
    </div>
  );
};

TypewriterEffect.defaultProps = {
  animationSpeed: 0.08,
};

export default TypewriterEffect;
