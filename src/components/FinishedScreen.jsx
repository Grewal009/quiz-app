const FinishedScreen = (prop) => {
  const { points, numOfQuestions, highScore, dispatch } = prop;
  const totalScore = numOfQuestions * 10;
  let emoji;
  if (points == totalScore) {
    emoji = "🥇";
  }
  if (points > totalScore / 2 && points < totalScore) {
    emoji = "🥳";
  }
  if (points < totalScore / 2) {
    emoji = "🤔";
  }

  return (
    <div className="flex flex-col items-center justify-center text-xl font-semibold">
      <p className="my-1 w-full cursor-pointer rounded-2xl bg-cyan-500 px-4 py-3 text-center text-zinc-50">
        {emoji} Your score <strong>{points}</strong> out of{" "}
        {numOfQuestions * 10}
      </p>
      <p className="mt-2 text-base text-gray-600">High score: {highScore}</p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="mt-3 rounded-2xl bg-slate-500 px-5 py-2 text-slate-50 transition-all duration-300 hover:bg-gray-600"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default FinishedScreen;
