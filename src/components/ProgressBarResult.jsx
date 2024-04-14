import { useQuiz } from "../context/QuizContext";

function ProgressBarResult() {
  const { questionLength, index, point, highScorePoints } = useQuiz();
  const percentagePoints = (point / highScorePoints) * 100;
  return (
    <div className="w-full space-y-1">
      <progress
        value={point}
        max={highScorePoints}
        className="w-full"
      ></progress>
      <div className="flex  w-full justify-between ">
        <p>{`${index + 1} / ${questionLength}`}</p>
        <p>{percentagePoints.toFixed(0)}%</p>
      </div>
    </div>
  );
}

export default ProgressBarResult;
