const StartScreen = (prop) => {
  const { numOfQuestions } = prop;
  return (
    <div>
      <h2>Welcome to the React Quiz!</h2>
      <p>{numOfQuestions} questions to test your React mastery</p>
      <button>Lets start</button>
    </div>
  );
};

export default StartScreen;
