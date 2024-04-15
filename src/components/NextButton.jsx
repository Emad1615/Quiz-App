import { useQuiz } from "../context/QuizContext";

function NextButton() {
  const { dispatch, answer, questionLength, index } = useQuiz();
  const lastQuestion = questionLength === index + 1;
  if (answer === null) return null;
  return (
    <>
      {!lastQuestion ? (
        <button
          className="scale-100 bg-orange-500 px-6 py-1 uppercase transition-all duration-300 ease-out hover:scale-110 hover:bg-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 focus:ring-offset-slate-700"
          onClick={() => dispatch({ type: "question/nextQuestion" })}
        >
          next
        </button>
      ) : (
        <button
          className="scale-100 bg-orange-500 px-6 py-1 uppercase transition-all duration-300 ease-out hover:scale-110 hover:bg-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 focus:ring-offset-slate-700"
          onClick={() => dispatch({ type: "question/finishQuiz" })}
        >
          Finish
        </button>
      )}
    </>
  );
}

export default NextButton;
