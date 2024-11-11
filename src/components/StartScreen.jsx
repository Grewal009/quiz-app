const StartScreen = (prop) => {
  const { numOfQuestions, dispatch } = prop;
  return (
    <div className="flex flex-col items-center">
      <h2>Welcome to the React Quiz!</h2>
      <p>{numOfQuestions} questions to test your React skill</p>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="mt-3 rounded-2xl bg-blue-300 px-5 py-2 hover:bg-blue-400"
      >
        Lets start
      </button>
    </div>
  );
};

export default StartScreen;
