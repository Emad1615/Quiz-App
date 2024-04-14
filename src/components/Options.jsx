import { useQuiz } from "../context/QuizContext";

function Options({ option, idx, correctOption }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswer = answer !== null;
  console.log(idx + "--" + correctOption);

  return (
    <button
      disabled={hasAnswer}
      onClick={() => dispatch({ type: "question/setAnswer", payload: idx })}
      className={`w-full  px-10 py-2 transition-all hover:bg-slate-900 ${answer === idx && "translate-x-10 "}
      ${hasAnswer ? (idx === correctOption ? "bg-green-500" : "bg-red-500") : "bg-slate-800"}`}
      value={idx}
    >
      {option}
    </button>
  );
}

export default Options;
