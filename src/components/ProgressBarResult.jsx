import { useQuiz } from "../context/QuizContext";

function ProgressBarResult() {
  const { questionLength, index } = useQuiz();
  return (
    <div className="w-full space-y-1">
      <progress value={50} max={100} className="w-full"></progress>
      <div className="flex  w-full justify-between ">
        <p>{`${index + 1} / ${questionLength}`}</p>
        <p>25%</p>
      </div>
    </div>
  );
}

export default ProgressBarResult;
