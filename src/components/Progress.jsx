const Progress = (prop) => {
  const { index, numOfQuestions, points, answer } = prop;
  return (
    <header className="my-5">
      <div className="h-6 w-full">
        <progress
          max={numOfQuestions}
          value={index + Number(answer !== null)}
          className="h-3 w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-blue-500"
        />
      </div>
      <div className="flex justify-between">
        <p>
          Question <strong>{index + 1}</strong>/{numOfQuestions}
        </p>
        <p>
          <strong>{points}</strong>/{numOfQuestions * 10}
        </p>
      </div>
    </header>
  );
};

export default Progress;
