import React, { useState } from 'react';
import QuestionCard from './component/question';
import ResultScreen from './component/resultscreen';
import questions from './data/question';
import './index.css';

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    const nextQ = current + 1;
    if (nextQ < questions.length) {
      setCurrent(nextQ);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      <h1>🧠 Mini Quiz App</h1>
      {showResult ? (
        <ResultScreen score={score} total={questions.length} restart={restartQuiz} />
      ) : (
        <QuestionCard
          question={questions[current].question}
          options={questions[current].options}
          currentQ={current}
          totalQ={questions.length}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;
