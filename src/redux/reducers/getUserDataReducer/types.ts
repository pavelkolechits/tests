import { TestTypes } from "../manageTestsReducer/types";
import { QuestionItem } from "../createTestReducer/types";
import { AnswerItem } from "../createTestReducer/types";

export enum getUserDataActionTypes {
  CHOOSE_TEST = "CHOOSE_TEST",
  GET_TESTS_DATA_SUCCESS = "GET_TESTS_DATA_SUCCESS",
  GET_ANSVER_FROM_USER = "GET_ANSVER_FROM_USER",
  COMPARE_RESULTS = "COMPARE_RESULTS",
  RESET_STATE = "RESET_STATE",
}
interface ResetStateAction {
  type: getUserDataActionTypes.RESET_STATE;
}
interface ChooseTestAction {
  type: getUserDataActionTypes.CHOOSE_TEST;
  payload: string;
}
interface GetTestData {
  type: getUserDataActionTypes.GET_TESTS_DATA_SUCCESS;
  payload: [TestTypes];
}
interface GetAnswerFromUser {
  type: getUserDataActionTypes.GET_ANSVER_FROM_USER;
  payload: { questionId: string; answerId: string; isCorrect: boolean };
}
interface CompareResults {
  type: getUserDataActionTypes.COMPARE_RESULTS;
  payload: [TestTypes][];
}
export interface MistakesTypes {
  question: string;
  wrongAnsvers: Array<AnswerItem> | any;
}

export type MistakesStorType = { string: string[] };

export type getTestsDataReducerAction =
  | ChooseTestAction
  | GetTestData
  | GetAnswerFromUser
  | CompareResults
  | ResetStateAction

export type getTestsDataReducerState = [TestTypes] | [];
