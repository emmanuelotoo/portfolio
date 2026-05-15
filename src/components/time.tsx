"use client";
import { useState, useEffect } from "react";

export const Time = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const timeString = date.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Africa/Accra"
      });
      setTime(timeString);
    };
    
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className="tabular-nums">
      {time || "--:--"} <span className="text-secondary-foreground/60">· accra</span>
    </p>
  );
};