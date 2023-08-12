import { motion } from "framer-motion";
import React from "react";

type Props = {
  lastChildType: string;
};

const ChakraCursor = ({ lastChildType }: Props) => {
  const ChakraCursor = motion(lastChildType);

  return (
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
  );
};

export default ChakraCursor;
