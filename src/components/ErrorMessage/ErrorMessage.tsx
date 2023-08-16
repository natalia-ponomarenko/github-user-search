import React, { useState, useEffect } from "react";
import "./ErrorMessage.css";

const ErrorMessage = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);

  return (
    <p className={`error-message ${isVisible ? "visible" : "hidden"}`}>
      This user doesn't exist yet
    </p>
  );
};

export default ErrorMessage;
