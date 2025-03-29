"use client";

import type React from "react";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export default function ScrollAnimationWrapper({
  children,
  delay = 0.2,
}: ScrollAnimationWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
