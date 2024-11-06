const Question = (prop) => {
  const { question } = prop;
  return (
    <div>
      <p>{question.question}</p>
      <div>
        {question.options.map((o, index) => (
          <button className="flex" key={index}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
