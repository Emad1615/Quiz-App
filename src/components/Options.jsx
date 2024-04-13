import { useQuiz } from "../context/QuizContext";

function Options({ option, index, correctOption }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswer = answer !== null;
  return (
    <button
      disabled={hasAnswer}
      onClick={() => dispatch({ type: "question/setAnswer", payload: index })}
      className={`w-full bg-slate-800 px-10 py-2 transition-all hover:bg-slate-900 
      ${answer === index && "translate-x-10 "}
      ${hasAnswer ? (index === correctOption ? "bg-green-500" : "bg-red-500") : ""}`}
      value={index}
    >
      {option}
    </button>
  );
}

export default Options;
