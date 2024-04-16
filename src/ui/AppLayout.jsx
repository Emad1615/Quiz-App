import NextButton from "../components/NextButton";
import ProgressBarResult from "../components/ProgressBarResult";
import QuestionList from "../components/QuestionList";
import Timer from "../components/Timer";
import { useQuiz } from "../context/QuizContext";
import FinishPage from "./FinishPage";
import Loader from "./Loader";
import StartPage from "./StartPage";

function AppLayout() {
  const { status } = useQuiz();
  return (
    <div className="flex h-dvh flex-col justify-between ">
      <div className="flex flex-col items-center justify-center  p-5 py-16 text-white md:m-auto lg:w-1/2">
        <h1 className="my-10 text-4xl font-semibold uppercase">Quiz App</h1>
        {status === "loading" && <Loader />}
        {status === "ready" && <StartPage />}
        {status === "active" && (
          <>
            <ProgressBarResult />
            <QuestionList />
            <div className="my-10 flex w-full justify-between">
              <Timer />
              <NextButton />
            </div>
          </>
        )}
        {status === "finish" && <FinishPage />}
      </div>
      <footer className=" w-full bg-slate-950 px-2 py-4  ">
        <p className="text-sm uppercase tracking-widest text-slate-500">
          Created by Emad Ismail Mohammed
        </p>
      </footer>
    </div>
  );
}

export default AppLayout;
