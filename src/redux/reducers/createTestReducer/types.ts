export enum createTestActionTypes {
  CREATE_QUESTION = "CREATE_QUESTION",
  CREATE_ANSWER = "CREATE_ANSWER",
  DELETE_QUESTION = "DELETE_QUESTION",
  DELETE_ANSWER = "DELETE_ANSWER",
  EDIT_QUESTION = "EDIT_QUESTION",
  EDIT_ANSWER = "EDIT_ANSWER",
  SELECT_ANSWER = "SELECT_ANSWER",
  RELOAD = 'RELOAD',
  SAVE_TEST = 'SAVE_TEST',
  RESET_STATE = 'RESET_STATE'
}

export interface AnswerItem {
  answer: string;
  isCorrect: boolean;
  answerId: string;
}
interface ResetStateAction {
  type: createTestActionTypes.RESET_STATE
}

interface SaveTest {
  type: createTestActionTypes.SAVE_TEST,
  payload: {test: Array<QuestionItem>, testName: string }
}

export interface QuestionItem {
  id: string;
  question: string;
  answers: Array<AnswerItem>;
}
interface ReloadAction {
  type: createTestActionTypes.RELOAD
}
interface SelectAnswerAction{
  type: createTestActionTypes.SELECT_ANSWER;
  payload: {isCorrect: boolean, answerId: string, questionId: string}

}
interface DeleteQuestionAction {
  type: createTestActionTypes.DELETE_QUESTION;
  payload: string;
}
interface EditQuestionAction {
  type: createTestActionTypes.EDIT_QUESTION;
  payload: {value: string, itemId: string};
}
interface EditAnswerAction {
  type: createTestActionTypes.EDIT_ANSWER;
  payload: { value: string, answerId: string, questionId: string };
}
interface DeleteAnswerAction {
  type: createTestActionTypes.DELETE_ANSWER;
  payload: { answerId: string; questionId: string };
}

interface CreateQuestionAction {
  type: createTestActionTypes.CREATE_QUESTION;
  payload: { value: string; id: string };
}
interface CreateAnswerAction {
  type: createTestActionTypes.CREATE_ANSWER;
  payload: { answer: string; id: string; answerId: string };
}

export type createTestReducerAction =
  | CreateAnswerAction
  | CreateQuestionAction
  | DeleteQuestionAction
  | DeleteAnswerAction
  | EditQuestionAction
  | EditAnswerAction
  | SelectAnswerAction
  | ReloadAction
  | SaveTest
  | ResetStateAction

export type createTestReducerState = { questions: Array<QuestionItem> | [] };
