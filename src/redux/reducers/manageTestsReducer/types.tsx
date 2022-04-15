import { QuestionItem } from "../createTestReducer/types";

export enum manageTestsActionTypes {
  GET_TEST = "GET_TEST",
  RELOAD = "RELOAD",
  SEND_TEST_DATA = "SEND_TEST_DATA",
  GET_TESTS_DATA = "GET_TESTS_DATA",
  GET_TESTS_DATA_SUCCESS = "GET_TESTS_DATA_SUCCESS",
}

interface GetTestDataTypes {
  type: manageTestsActionTypes.GET_TESTS_DATA;
}
interface GetTestDataTypesSuccess {
  type: manageTestsActionTypes.GET_TESTS_DATA_SUCCESS;
  payload: [{ testName: string; test: Array<QuestionItem>; id: string }] 
}

interface TestTypes {
  testName: string;
  id: string;
  test: Array<QuestionItem>;
}
interface ReloadAction {
  type: manageTestsActionTypes.RELOAD;
}
interface SendTestDataAction {
  type: manageTestsActionTypes.SEND_TEST_DATA;
  payload: { testName: string; test: Array<QuestionItem>; id: string };
}

interface GetTestAction {
  type: manageTestsActionTypes.GET_TEST;
  payload: { testName: string; test: Array<QuestionItem>; id: string };
}


export type manageTestsReducerAction =
  | GetTestAction
  | ReloadAction
  | SendTestDataAction
  | GetTestDataTypes
  | GetTestDataTypesSuccess;

export type manageTestsReducerState = [TestTypes] | [];
