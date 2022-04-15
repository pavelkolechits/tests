import {
  manageTestsReducerState,
  manageTestsReducerAction,
  manageTestsActionTypes,
} from "./types";
const initialState: manageTestsReducerState = [];

export const manageTestsReducer = (
  state: manageTestsReducerState = initialState,
  action: manageTestsReducerAction
) => {
  switch (action.type) {
  
    case manageTestsActionTypes.GET_TESTS_DATA_SUCCESS: {
      return action.payload
    }
  

    default:
      return state ;
  }
};
