import {
  getTestsDataReducerAction,
  getTestsDataReducerState,
  getUserDataActionTypes,
} from "./types";
import { TestTypes } from "../manageTestsReducer/types";
import { QuestionItem } from "../createTestReducer/types";
import { AnswerItem } from "../createTestReducer/types";

const initialState: getTestsDataReducerState = [];

const mistakesStor: any = {};

 const compareAnswers = (
  originTest: QuestionItem,
  userVariant: QuestionItem,
  id: string
) => {
  const wrongAnsvers: any = [];

  for (let i = 0; i < originTest.answers.length; i++) {
    if (originTest.answers[i].isCorrect !== userVariant.answers[i].isCorrect) {
      mistakesStor[id] = wrongAnsvers;
      wrongAnsvers.push(originTest.answers[i].answer, originTest.answers[i].answerId);
      console.log(wrongAnsvers);
    }
  }
};

export const getUserDataReducer = (
  state: getTestsDataReducerState = initialState,
  action: getTestsDataReducerAction
) => {
  switch (action.type) {
    case getUserDataActionTypes.GET_TESTS_DATA_SUCCESS: {
      return action.payload;
    }
    case getUserDataActionTypes.CHOOSE_TEST: {
      const newState = state.filter((i) => i.id === action.payload)[0];

      return [newState];
    }

    case getUserDataActionTypes.GET_ANSVER_FROM_USER: {
      console.log(state);
      let newAnswers = state[0]?.test
        .filter((i) => i.id === action.payload.questionId)[0]
        .answers.map((i) =>
          i.answerId === action.payload.answerId
            ? { ...i, isCorrect: !i.isCorrect }
            : i
        );

      const newQuestions = state[0]?.test.map((i) =>
        i.id === action.payload.questionId
          ? {
              ...i,
              answers: newAnswers,
            }
          : i
      );
      return [{ ...state[0], test: newQuestions }];
    }
    case getUserDataActionTypes.RESET_STATE: {
      const resetAnswers = (answers: AnswerItem[]) => {
        return answers.map((i) => {
          return { ...i, isCorrect: false };
        });
      };
      let newState = state[0]?.test.map((i) => {
        return { ...i, answers: resetAnswers(i.answers) };
      });
      return [{ ...state[0], test: newState }];
    }

    case getUserDataActionTypes.COMPARE_RESULTS: {
      const originTest = action.payload[0][0].test;
      const userVariant = action.payload[1][0].test;

      for (let i = 0; i < originTest.length; i++) {
        compareAnswers(originTest[i], userVariant[i], originTest[i].id);
      }

      return mistakesStor;
    }

    default:
      return state;
  }
};
