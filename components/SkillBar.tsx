import React from "react";
import s from "../styles/SkillBar.module.css";
import { motion, VariantLabels } from "framer-motion";

interface SkillBarProps {
  percentage: VariantLabels;
  bgColor: string
}



function SkillBar({ percentage, bgColor }: SkillBarProps) {
  return (
    <div className={s.SkillBar}>
      <motion.aside
      style={{backgroundColor: bgColor}}
      className={s.bar}
      whileInView={{ width: percentage}}
      initial={{ width: '0'}}
      exit={{
        // opacity: 0,
        width: percentage,
        // transition: { backgroundColor: { delay: 0 }, opacity: { delay: 0.1 } }
      }}
    
      transition={{
        from: '0%', duration: 1
      }}

    >

    </motion.aside>
    </div>
  );
}

export default SkillBar;
