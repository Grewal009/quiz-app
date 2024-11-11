const FinishedScreen = (prop) => {
  const { points, numOfQuestions, highScore, dispatch } = prop;
  return (
    <div className="flex flex-col items-center justify-center">
      <p>
        Your score <strong>{points}</strong> out of {numOfQuestions * 10}.
      </p>
      <p>High score: {highScore}</p>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="mt-3 rounded-2xl bg-blue-300 px-3 py-2 hover:bg-blue-400"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default FinishedScreen;
