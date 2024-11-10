const Question = (prop) => {
  const { question, answer, dispatch } = prop;
  console.log(question, answer, dispatch);
  return (
    <div>
      <p>{question.question}</p>
      <div>
        {question.options.map((o, index) => (
          <button
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            className={`flex ${index === answer ? "px-5" : ""} ${answer !== null && index === question.correctOption ? "bg-green-500" : answer !== null ? "bg-orange-400" : "bg-gray-300"}`}
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
