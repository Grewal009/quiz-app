import { useEffect, useReducer } from "react";
import ReactQuiz from "./ReactQuiz";
import Loading from "./Loading";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialstate = {
  questions: [],
  status: "loading", // loading, error, ready, active, finished
  index: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };

    default:
      throw new Error("Action unknown");
  }
};
const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const { questions, status, index } = state;

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
    <div>
      <ReactQuiz>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question question={questions[index]} />}
      </ReactQuiz>
    </div>
  );
};
export default Main;
