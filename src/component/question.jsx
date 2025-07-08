import React from 'react';

const QuestionCard = ({ question, options, currentQ, totalQ, handleAnswer }) => {
  return (
    <div className="question-card">
      <h3>Question {currentQ + 1} of {totalQ}</h3>
      <p>{question}</p>
      <div className="options">
        {options.map((opt, idx) => (
          <button key={idx} onClick={() => handleAnswer(opt)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
