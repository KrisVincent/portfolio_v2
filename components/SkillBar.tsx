import React, { useState } from "react";
import s from "./SkillBar.module.css";
import { motion, VariantLabels } from "framer-motion";

interface SkillBarProps {
  percentage: VariantLabels;
  bgColor: string;
}

function SkillBar({ percentage, bgColor }: SkillBarProps) {
  const [seen, setSeen] = useState(false);

  return (
    <div className={s.SkillBar}>
      <motion.div
        style={{ backgroundColor: bgColor }}
        className={s.bar}
        onViewportEnter={() => {
          setSeen(true);
        }}
        initial={{ width: "0" }}
        animate={{ width: seen ? percentage : 0 }}
        transition={{
          from: "0%",
          duration: 1,
        }}
      ></motion.div>
    </div>
  );
}

export default SkillBar;
