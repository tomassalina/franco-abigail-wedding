"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "días" },
    { value: timeLeft.hours, label: "hs" },
    { value: timeLeft.minutes, label: "min" },
    { value: timeLeft.seconds, label: "seg" },
  ];

  return (
    <div className="max-w-lg w-[80%] md:w-full mx-auto flex items-center justify-between gap-4">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex-col items-center">
          <motion.div
            className="md:w-20 md:h-20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: unit.label === "seg" ? [1, 1.05, 1] : 1,
              opacity: 1,
            }}
            transition={{
              scale: {
                repeat: unit.label === "seg" ? Number.POSITIVE_INFINITY : 0,
                duration: 1,
              },
              opacity: {
                duration: 0.5,
                delay: index * 0.1,
              },
            }}
          >
            <motion.span
              className="font-playfair text-3xl md:text-6xl text-secondary"
              key={unit.value}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {unit.value}
              {unit.label !== "seg" && <span className="text-3xl">:</span>}
            </motion.span>
          </motion.div>
          <motion.p
            className="text-xs mt-1 text-secondary uppercase mr-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          >
            {unit.label}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
