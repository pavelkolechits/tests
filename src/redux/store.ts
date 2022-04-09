import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createTestReducer } from './reducers/createTestReducer/createTestReducer'
import { manageTestsReducer } from './reducers/manageTestsReducer/manageTestsReducer'





export const store = createStore(combineReducers({createTestReducer, manageTestsReducer}), composeWithDevTools())

console.log(store.getState())
export type RootState = ReturnType<typeof store.getState>