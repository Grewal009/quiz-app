const NextButton = (prop) => {
  const { dispatch } = prop;

  return (
    <div className="flex justify-end">
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="bg-slate-100 px-3 py-2 hover:bg-slate-200"
      >
        Next
      </button>
    </div>
  );
};

export default NextButton;
