import { useQuiz } from "../context/QuizContext";

function Timer() {
  const { secondsRemaining } = useQuiz();
  //   const minutes = ~~((secondsRemaining % 3600) / 60);
  const minutes = ~~(secondsRemaining / 60);
  const seconds = ~~secondsRemaining % 60;
  return (
    <label className="border px-3 py-1">{`${minutes > 10 ? minutes : "0" + minutes}:${seconds > 10 ? seconds : "0" + seconds}`}</label>
  );
}

export default Timer;
