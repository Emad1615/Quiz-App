import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";
import tickSound from "./../Tick-DeepFrozenApps-397275646.mp3";

function Timer() {
  const { secondsRemaining, dispatch } = useQuiz();
  const minutes = ~~(secondsRemaining / 60);
  const seconds = ~~secondsRemaining % 60;
  const sound = new Audio(tickSound);
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "question/tick" });
      //   sound.play();
    }, [1000]);
    return () => clearInterval(intervalId);
  }, [dispatch]);
  useEffect(() => {
    if (secondsRemaining <= 60) sound.play();
  }, [secondsRemaining]);
  return (
    <label className="border px-3 py-1">{`${minutes > 10 ? minutes : "0" + minutes}:${seconds > 10 ? seconds : "0" + seconds}`}</label>
  );
}

export default Timer;
