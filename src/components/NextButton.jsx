const NextButton = (prop) => {
  const { dispatch, numOfQuestions, index } = prop;

  return (
    <div className="flex justify-end">
      {index < numOfQuestions - 1 ? (
        <button
          onClick={() => dispatch({ type: "nextQuestion" })}
          className="mt-3 rounded-2xl bg-slate-500 px-5 py-2 text-slate-50 transition-all duration-300 hover:bg-gray-600"
        >
          Next
        </button>
      ) : (
        ""
      )}
      {index === numOfQuestions - 1 ? (
        <button
          onClick={() => dispatch({ type: "finish" })}
          className="mt-3 rounded-2xl bg-slate-500 px-5 py-2 text-slate-50 transition-all duration-300 hover:bg-gray-600"
        >
          Finish
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default NextButton;
