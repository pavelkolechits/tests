import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createTestReducer } from "./reducers/createTestReducer/createTestReducer";
import { manageTestsReducer } from "./reducers/manageTestsReducer/manageTestsReducer";
import createSagaMiddleware from "redux-saga";
import { createTestSagaWatcher } from "./redux-saga/createTestSaga";

const sagaMiddleware = createSagaMiddleware();


export const store = createStore(
  combineReducers({ createTestReducer, manageTestsReducer }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);


export type RootState = ReturnType<typeof store.getState>;


sagaMiddleware.run(createTestSagaWatcher)