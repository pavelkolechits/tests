import {QuestionItem} from '../createTestReducer/types'


export enum manageTestsActionTypes {
    GET_TEST = "GET_TEST",
    RELOAD = "RELOAD"
} 






interface Test {
    testName: string;
    id: string; 
    test: Array<QuestionItem>
}
interface ReloadAction {
    type: manageTestsActionTypes.RELOAD
}

interface GetTestAction {
    type: manageTestsActionTypes.GET_TEST
    payload: {testName: string, test: Array<QuestionItem>, id: string}
}


export type manageTestsReducerAction = GetTestAction | ReloadAction

export type manageTestsReducerState = {
  allTest: Array<Test> | []
}

