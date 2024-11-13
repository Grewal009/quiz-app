import { useEffect, useReducer } from "react";
import ReactQuiz from "./ReactQuiz";
import Loading from "./Loading";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Timer from "./Timer";
import { GET_REQUEST_API } from "../../utils/constants";
const initialstate = {
  questions: [],
  status: "loading", // loading, error, ready, active, finished
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  timeRemaining: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        timeRemaining: state.questions.length * 30,
      };
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
    case "finish":
      return {
        ...state,
        status: "finished",
        answer: null,
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    case "restart":
      return {
        ...state,
        questions: state.questions,
        highScore: state.highScore,
        status: "ready",
        index: 0,
        points: 0,
        answer: null,
        timeRemaining: null,
      };

    case "tick":
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1,
        status: state.timeRemaining == 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action unknown");
  }
};
const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const { questions, status, index, answer, points, highScore, timeRemaining } =
    state;

  const numOfQuestions = questions.length;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(GET_REQUEST_API);
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
    <div className="flex h-screen flex-col items-center">
      <div className="h-1/6 bg-gray-300 lg:h-1/5"></div>
      <div className="flex-grow-0 justify-center">
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
          <div>
            <footer className="flex justify-between">
              {status == "active" && (
                <Timer dispatch={dispatch} timeRemaining={timeRemaining} />
              )}
              {(answer == 0 || answer) && (
                <NextButton
                  dispatch={dispatch}
                  answer={answer}
                  numOfQuestions={numOfQuestions}
                  index={index}
                />
              )}
              {status === "finished" && (timeRemaining <= 0 || index == 11) ? (
                <FinishedScreen
                  points={points}
                  numOfQuestions={numOfQuestions}
                  highScore={highScore}
                  dispatch={dispatch}
                />
              ) : (
                ""
              )}
            </footer>
          </div>
        </ReactQuiz>
      </div>
    </div>
  );
};
export default Main;
