import { createContext, useContext, useEffect, useReducer } from "react";
const initialState = {
  questions: [],
  index: 0,
  // loading, ready, active, finished, error
  status: "loading",
  answer: null,
  point: 0,
  secondRemaining: 0,
  error: "",
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "question/getQuestions":
      return { ...state, questions: action.payload, status: "ready" };
    case "question/Failed":
      return { ...state, error: action.payload, states: "error" };
    default:
      throw Error("undefined action");
  }
}
const QuizContext = createContext();
export default function QuizProvider({ children }) {
  const [states, dispatch] = useReducer(reducer, initialState);
  const { questions, index, status, answer, point, secondRemaining } = states;
  const questionLength = questions.length;

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
        point,
        secondRemaining,
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
