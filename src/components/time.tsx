"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Africa/Accra"
    });
  };

  const timeString = formatTime(time);
  const [hours, minutes] = timeString.split(":");
  const minuteKey = time.getMinutes();

  return (
    <motion.p className="relative inline-flex">
      <span>{hours}:</span>
      <span className="relative inline-block w-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={minuteKey}
            className="absolute"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {minutes}
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.p>
  );
};