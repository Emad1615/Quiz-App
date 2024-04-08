import { useQuiz } from "../context/QuizContext";

function StartPage() {
  const { questionLength, dispatch } = useQuiz();
  return (
    <>
      <div className="mx-3 space-y-2 rounded bg-slate-800 px-3 py-3 text-center shadow-md sm:mx-1">
        <h3 className="px-16 text-xl uppercase tracking-widest">
          You Are Welcome,
        </h3>
        <p className="tracking-widest text-slate-400">
          {questionLength} Questions to test your React mastery
        </p>
      </div>
      <button
        className="btn"
        onClick={() => dispatch({ type: "question/StartQuiz" })}
      >
        Start Quiz
      </button>
    </>
  );
}

export default StartPage;
