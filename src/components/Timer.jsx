import { useEffect } from "react";

const Timer = (prop) => {
  const { dispatch, timeRemaining } = prop;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <p className="mx-3 mt-3 w-20 rounded-2xl border bg-slate-500 px-5 py-2 text-sm font-medium text-slate-50 transition-all duration-300">
      {String(Math.floor(timeRemaining / 60)).padStart(2, "0")}:
      {String(Math.floor(timeRemaining % 60)).padStart(2, "0")}
    </p>
  );
};

export default Timer;
