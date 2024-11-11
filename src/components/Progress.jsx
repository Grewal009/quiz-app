const Progress = (prop) => {
  const { index, numOfQuestions, points, answer } = prop;
  return (
    <header className="my-5">
      <div className="h-6 w-full appearance-none rounded-full">
        <progress
          max={numOfQuestions}
          value={index + Number(answer !== null)}
          className="w-full"
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
