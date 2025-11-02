import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if (timeRemaining > 0) {
      const timeoutId = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timeoutId);
    } else {
      // test expects false to be passed
      onAnswered(false);
    }
  }, [timeRemaining, onAnswered]);

  return (
    <div className="question">
      <h1>{question.prompt}</h1>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
