import { put, takeEvery, call } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { QuestionItem } from "../../components/QuestionItem/QuestionItem";
import { manageTestsActionTypes } from "../reducers/manageTestsReducer/types";
import axios from "axios";


 function* sendTestSaga(action: any): Generator {

  yield call(() => axios.post<AxiosResponse>("http://localhost:8000/tests", action.payload)
  );
  
}
function* getTestsData():Generator {
  const response =  yield call(() => axios.get<AxiosResponse>("http://localhost:8000/tests").then((i: AxiosResponse) => i.data))
  yield put({type: manageTestsActionTypes.GET_TESTS_DATA_SUCCESS, payload: response})
  
}

export function* createTestSagaWatcher() {
  yield takeEvery(manageTestsActionTypes.SEND_TEST_DATA, sendTestSaga);
  yield takeEvery(manageTestsActionTypes.GET_TESTS_DATA, getTestsData);
}

