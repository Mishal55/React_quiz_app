import React from 'react';

const ResultScreen = ({ score, total, restart }) => {
  return (
    <div className="result-screen">
      <h2>🎉 Quiz Completed!</h2>
      <p>You scored {score} out of {total}</p>
      <button onClick={restart}>Restart Quiz 🔁</button>
    </div>
  );
};

export default ResultScreen;
