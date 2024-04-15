import { createContext, useContext, useEffect, useReducer } from "react";
const initialState = {
  questions: [],
  questionLength: 0,
  index: 0,
  // loading, ready, active, finish, error
  status: "loading",
  answer: null,
  point: 0,
  secondsRemaining: null,
  error: "",
};
const SECOND_PER_QUESTION = 30;
function reducer(state = initialState, action) {
  switch (action.type) {
    case "question/getQuestions":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        questionLength: action.payload.length,
        secondsRemaining: action.payload.length * SECOND_PER_QUESTION,
      };
    case "question/Failed":
      return { ...state, error: action.payload, states: "error" };
    case "question/StartQuiz":
      return { ...state, status: "active" };
    case "question/setAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        point:
          question.correctOption === action.payload
            ? state.point + question.points
            : state.point,
      };
    case "question/nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "question/finishQuiz":
      return { ...state, status: "finish" };
    case "question/restartQuiz":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
        questionLength: state.questionLength,
      };
    case "question/tick":
      return {
        ...state,
        secondsRemaining:
          state.secondsRemaining > 0
            ? state.secondsRemaining - 1
            : state.secondsRemaining,
        status: state.secondsRemaining === 0 ? "finish" : state.status,
      };
    default:
      throw Error("undefined action");
  }
}
const QuizContext = createContext();
export default function QuizProvider({ children }) {
  const [states, dispatch] = useReducer(reducer, initialState);
  const {
    questions,
    questionLength,
    index,
    status,
    answer,
    point,
    secondsRemaining,
  } = states;
  const highScorePoints = questions.reduce((sum, arr) => sum + arr.points, 0);
  const pointsPercentage = (point / highScorePoints) * 100;
  const letterGrade = (value) => {
    if (value <= 100 && value >= 97) return "A+";
    else if (value <= 96 && value >= 93) return "A";
    else if (value <= 92 && value >= 90) return "A-";
    else if (value <= 89 && value >= 87) return "B+";
    else if (value <= 86 && value >= 83) return "B";
    else if (value <= 82 && value >= 80) return "B-";
    else if (value <= 79 && value >= 77) return "C+";
    else if (value <= 76 && value >= 73) return "C";
    else if (value <= 72 && value >= 70) return "C-";
    else if (value <= 69 && value >= 67) return "D+";
    else if (value <= 66 && value >= 63) return "D";
    else if (value <= 62 && value >= 60) return "D-";
    else return "F";
  };
  useEffect(() => {
    fetch("http://localhost:80/questions")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "question/getQuestions", payload: data }),
      )
      .catch((error) =>
        dispatch({
          type: "question/Failed",
          payload: "An Error Occured during load data",
        }),
      );
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        questionLength,
        index,
        answer,
        status,
        highScorePoints,
        point,
        pointsPercentage,
        secondsRemaining,
        letterGrade,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) throw Error("context out of scope");
  return context;
}
