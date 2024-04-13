import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

function Question({ questionData }) {
  const { index } = useQuiz();
  const { question, options, correctOption, points } = questionData;
  return (
    <li className="space-y-5">
      <h2 className="text-2xl font-semibold tracking-widest text-slate-300">
        {index + 1}- {question}
      </h2>
      <div className="flex grow flex-col items-center justify-center gap-3 px-9">
        {options.map((option, idx) => (
          <Options
            option={option}
            index={idx}
            key={idx}
            correctOption={correctOption}
          />
        ))}
      </div>
    </li>
  );
}

export default Question;
