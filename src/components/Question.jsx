const Question = (prop) => {
  const { question, answer, dispatch } = prop;
  console.log(question, answer, dispatch);
  return (
    <div className="flex w-96 flex-col">
      <p className="leading-5">{question.question}</p>
      <div className="w-full">
        {question.options.map((o, index) => (
          <button
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            className={`my-1 w-full cursor-pointer rounded-2xl px-4 py-2 text-left transition-all duration-300 ${index === answer ? "mx-3" : ""} ${answer !== null && index === question.correctOption ? "bg-green-500" : answer !== null ? "bg-orange-400" : "bg-gray-300 hover:mx-3"}`}
            key={index}
            disabled={answer !== null}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
