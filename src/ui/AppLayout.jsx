import ProgressBarResult from "../components/ProgressBarResult";
import QuestionList from "../components/QuestionList";
import { useQuiz } from "../context/QuizContext";
import FinishPage from "./FinishPage";
import Loader from "./Loader";
import StartPage from "./StartPage";

function AppLayout() {
  const { status } = useQuiz();
  return (
    <div className="flex flex-col items-center justify-center  p-5 py-16 text-white md:m-auto lg:w-1/2">
      <h1 className="my-10 text-4xl font-semibold uppercase">Quiz App</h1>
      {status === "loading" && <Loader />}
      {status === "ready" && <StartPage />}
      {status === "active" && (
        <>
          <ProgressBarResult />
          <QuestionList />
        </>
      )}
      {status === "finish" && <FinishPage />}
    </div>
  );
}

export default AppLayout;
