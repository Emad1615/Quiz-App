import { useQuiz } from "../context/QuizContext";
import NextButton from "./NextButton";
import Question from "./Question";

function QuestionList() {
  const { questions, index, dispatch, status } = useQuiz();
  return (
    <div className="space-y-5">
      <ul className="flex items-center justify-center">
        <Question questionData={questions.at(index)} key={index} />
      </ul>
      <div className="my-10 flex justify-between">
        <label className="border px-3 py-1">03:44</label>
        <NextButton />
      </div>
    </div>
  );
}

export default QuestionList;
