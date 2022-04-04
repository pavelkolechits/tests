import {
  createTestReducerAction,
  createTestReducerState,
  createTestActionTypes,
} from "./types";

const initialState: createTestReducerState = {
  questions: [],
};

export const createTestReducer = (
  state: createTestReducerState = initialState,
  action: createTestReducerAction
) => {
  switch (action.type) {
    case createTestActionTypes.CREATE_QUESTION: {
      const questionItem = {
        id: action.payload.id,
        question: action.payload.value,
        answers: [],
      };

      return { ...state, questions: [...state.questions, questionItem] };
    }

    case createTestActionTypes.DELETE_QUESTION: {
      const newState = state.questions.filter((i) => i.id !== action.payload);

      return { ...state, questions: newState };
    }
    case createTestActionTypes.CREATE_ANSWER: {
      const addAnswer = state.questions.filter(
        (i) => i.id === action.payload.id
      )[0];
      addAnswer.answers.push({
        answer: action.payload.answer,
        isCorrect: false,
        answerId: action.payload.answerId,
      });

      return { ...state };
    }
    case createTestActionTypes.DELETE_ANSWER: {
      const newQuestions = state.questions.map((i) =>
        i.id === action.payload.questionId
          ? {
              ...i,
              answers: [
                ...i.answers.filter(
                  (i) => i.answerId !== action.payload.answerId
                ),
              ],
            }
          : i
      );

      return { ...state, questions: newQuestions };
    }
    case createTestActionTypes.EDIT_QUESTION: {
      const newQuestions = state.questions.map((i) =>
        i.id === action.payload.itemId
          ? { ...i, question: action.payload.value }
          : i
      );
      return { ...state, questions: newQuestions };
    }
    case createTestActionTypes.EDIT_ANSWER: {
      let newAnswers = state.questions
        .filter((i) => i.id === action.payload.questionId)[0]
        .answers.map((i) =>
          i.answerId === action.payload.answerId
            ? { ...i, answer: action.payload.value }
            : i
        );

      const newQuestions = state.questions.map((i) =>
        i.id === action.payload.questionId
          ? {
              ...i,
              answers: newAnswers,
            }
          : i
      );
      return { ...state, questions: newQuestions };
    }

    case createTestActionTypes.SELECT_ANSWER: {

      let newAnswers = state.questions
        .filter((i) => i.id === action.payload.questionId)[0]
        .answers.map((i) =>
          i.answerId === action.payload.answerId
            ? { ...i, isCorrect: action.payload.isCorrect }
            : i
        );
      console.log(action.payload.isCorrect)
      const newQuestions = state.questions.map((i) =>
        i.id === action.payload.questionId
          ? {
              ...i,
              answers: newAnswers,
            }
          : i
      );
      return { ...state, questions: newQuestions };
    }

    default:
      return { ...state };
  }
};
