import { useEffect, useReducer } from "react";
import ReactQuiz from "./ReactQuiz";
import Loading from "./Loading";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";

const initialstate = {
  questions: [],
  status: "loading", // loading, error, ready, active, finished
  index: 0,
  answer: null,
  points: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      // eslint-disable-next-line no-case-declarations
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    default:
      throw new Error("Action unknown");
  }
};
const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const { questions, status, index, answer, points } = state;

  const numOfQuestions = questions.length;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9000/questions");
      if (!response.ok) {
        throw new Error(`Error:${response.status} ${response.statusText}`);
      }
      const json = await response.json();
      console.log(json);
      dispatch({ type: "dataReceived", payload: json });
    } catch (error) {
      console.error("Failed to fetch data: ", error);
      dispatch({ type: "dataFailed" });
    }
  };

  return (
    <div className="mt-32 flex h-[435px] justify-center">
      <ReactQuiz>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numOfQuestions={numOfQuestions}
              points={points}
              answer={answer}
            />
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
          </>
        )}
        {answer && <NextButton dispatch={dispatch} answer={answer} />}
      </ReactQuiz>
    </div>
  );
};
export default Main;
