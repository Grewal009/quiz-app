const StartScreen = (prop) => {
  const { numOfQuestions, dispatch } = prop;
  return (
    <div className="flex flex-col items-center text-sm font-medium text-slate-600 lg:text-xl lg:font-semibold">
      <h2>Welcome to the React Quiz!</h2>
      <p>{numOfQuestions} questions to test your React skill</p>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="mt-3 rounded-2xl bg-slate-500 px-5 py-2 text-slate-50 transition-all duration-300 hover:bg-gray-600"
      >
        Start
      </button>
    </div>
  );
};

export default StartScreen;
