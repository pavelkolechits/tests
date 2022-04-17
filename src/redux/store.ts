import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createTestReducer } from "./reducers/createTestReducer/createTestReducer";
import { manageTestsReducer } from "./reducers/manageTestsReducer/manageTestsReducer";
import createSagaMiddleware from "redux-saga";
import { createTestSagaWatcher } from "./redux-saga/createTestSaga";
import { getUserDataReducer } from "./reducers/getUserDataReducer/getUserDataReducer";

const sagaMiddleware = createSagaMiddleware();

const reducers = { createTestReducer, manageTestsReducer, getUserDataReducer };

export const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(createTestSagaWatcher);
