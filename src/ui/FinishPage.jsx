import { useQuiz } from "../context/QuizContext";

function FinishPage() {
  const { highScorePoints, point, pointsPercentage, dispatch, letterGrade } =
    useQuiz();
  return (
    <div className="mx-3 space-y-8 rounded bg-slate-800 px-3 py-3 text-center shadow-md sm:mx-1">
      <h1 className="border-b border-b-slate-700 py-1 text-xl font-semibold uppercase tracking-widest text-slate-400 shadow-2xl">
        Quiz result
      </h1>
      <table className="table-auto border-separate border-spacing-5 rounded border  border-slate-600 bg-slate-700">
        <caption className="mb-1 caption-top text-sm font-normal text-slate-500">
          Table Result: contain all exam score and your collected points with
          details 🎓
        </caption>
        <thead>
          <tr>
            <th>Total exam points</th>
            <th>Your collected points</th>
            <th>Your points Percentage</th>
            <th>Your grade</th>
          </tr>
        </thead>
        <tbody className="font-light">
          <tr>
            <td>{highScorePoints}</td>
            <td>{point}</td>
            <td>{pointsPercentage.toFixed(0)}%</td>
            <td>{letterGrade(Math.trunc(pointsPercentage))}</td>
          </tr>
        </tbody>
      </table>
      <blockquote className="space-x-3 border-l-4 border-slate-600 px-4 text-left">
        <strong className="text-slate-400">Our advice :</strong>{" "}
        <span className=" text-sm tracking-widest text-slate-400">
          if your grade under 'B' give your brain a lot of react knowledge{" "}
        </span>
      </blockquote>
      <div className="flex justify-center">
        <button
          className="btn"
          onClick={() => dispatch({ type: "question/restartQuiz" })}
        >
          test yourself again
        </button>
      </div>
      <p className="uppercase text-slate-300"> best wishes 🌹</p>
    </div>
  );
}

export default FinishPage;
