import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;

    case "sub":
      return state - 1;

    case "reset":
      return 0;

    default:
      throw new Error("Unexpected action");
  }
};

const Body = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const minusHandler = () => {
    dispatch("sub");
  };
  const plusHandler = () => {
    dispatch("add");
  };
  const resetHandler = () => {
    dispatch("reset");
  };

  return (
    <div className="mt-5 text-center">
      <p className="mb-3">{count}</p>
      <button
        onClick={minusHandler}
        className="h-10 w-16 bg-slate-100 hover:bg-slate-200"
      >
        -
      </button>
      <button
        onClick={plusHandler}
        className="h-10 w-16 bg-slate-100 hover:bg-slate-200"
      >
        +
      </button>
      <button
        onClick={resetHandler}
        className="h-10 w-16 bg-slate-100 hover:bg-slate-200"
      >
        reset
      </button>
    </div>
  );
};

export default Body;
