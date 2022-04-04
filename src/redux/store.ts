import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createTestReducer } from './reducers/createTestReducer/createTestReducer'



const reducers = combineReducers({createTestReducer})

export const store = createStore(reducers, composeWithDevTools())


export type RootState = ReturnType<typeof store.getState>