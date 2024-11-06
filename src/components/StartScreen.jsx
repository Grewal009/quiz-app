const StartScreen = (prop) => {
  const { numOfQuestions, dispatch } = prop;
  return (
    <div>
      <h2>Welcome to the React Quiz!</h2>
      <p>{numOfQuestions} questions to test your React mastery</p>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="bg-slate-300 px-5 py-2 hover:bg-slate-200"
      >
        Lets start
      </button>
    </div>
  );
};

export default StartScreen;
