import { useQuiz } from "../context/QuizContext";

function Options({ option, index }) {
  const { dispatch } = useQuiz();
  return (
    <button
      onClick={() => dispatch({ type: "question/setAnswer", payload: index })}
      className="w-full bg-slate-800 px-10 py-2 transition-all hover:bg-slate-900"
      value={index}
    >
      {option}
    </button>
  );
}

export default Options;
