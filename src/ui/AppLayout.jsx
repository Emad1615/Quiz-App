import { useQuiz } from "../context/QuizContext";
import Loader from "./Loader";

function AppLayout() {
  const { status } = useQuiz();
  return (
    <div className="text-white py-16 flex flex-col justify-center items-center">
      {status === "loading" && <Loader />}
    </div>
  );
}

export default AppLayout;
