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
    { value: timeLeft.days, label: "DÍAS" },
    { value: timeLeft.hours, label: "HS" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEG" },
  ];

  return (
    <div className="flex justify-center space-x-4 md:space-x-8">
      {timeUnits.map((unit, index) => (
        <div key={index} className="text-center">
          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-md flex items-center justify-center shadow-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: unit.label === "SEG" ? [1, 1.05, 1] : 1,
              opacity: 1,
            }}
            transition={{
              scale: {
                repeat: unit.label === "SEG" ? Number.POSITIVE_INFINITY : 0,
                duration: 1,
              },
              opacity: {
                duration: 0.5,
                delay: index * 0.1,
              },
            }}
          >
            <motion.span
              className="text-2xl md:text-3xl font-bold text-[#C19C67]"
              key={unit.value}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {unit.value}
            </motion.span>
          </motion.div>
          <motion.p
            className="text-xs mt-1 text-[#787878]"
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
