const NextButton = (prop) => {
  const { dispatch, numOfQuestions, index } = prop;

  return (
    <div className="flex justify-end">
      {index < numOfQuestions - 1 ? (
        <button
          onClick={() => dispatch({ type: "nextQuestion" })}
          className="mt-3 rounded-2xl bg-blue-300 px-3 py-2 hover:bg-blue-400"
        >
          Next
        </button>
      ) : (
        ""
      )}
      {index === numOfQuestions - 1 ? (
        <button
          onClick={() => dispatch({ type: "finish" })}
          className="mt-3 rounded-2xl bg-blue-300 px-3 py-2 hover:bg-blue-400"
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
