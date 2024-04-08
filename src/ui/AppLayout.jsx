import QuestionList from "../components/QuestionList";
import { useQuiz } from "../context/QuizContext";
import Loader from "./Loader";
import StartPage from "./StartPage";

function AppLayout() {
  const { status } = useQuiz();
  return (
    <div className="flex flex-col items-center justify-center py-16 text-white">
      <h1 className="my-10 text-4xl font-semibold uppercase">Quiz App</h1>
      {status === "loading" && <Loader />}
      {status === "ready" && <StartPage />}
      {status === "active" && <QuestionList />}
    </div>
  );
}

export default AppLayout;
