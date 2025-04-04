import React, { useState, useEffect } from "react";
import "./ChangeWord.css";

const words = ["WEB DESIGNER", "UI/UX DESIGNER", "GRAPHIC DESIGNER", "WEB DESIGNER", "UI/UX DESIGNER"];

const ChangeWord = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="word-container">
      <span key={index} className="word">{words[index]}</span>
    </div>
  );
};

export default ChangeWord;
