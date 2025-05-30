"use client";

import { motion } from "motion/react";

const MotionSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 11 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, easing: "ease-out" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
