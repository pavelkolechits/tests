import {
  manageTestsReducerState,
  manageTestsReducerAction,
  manageTestsActionTypes,
} from "./types";
const initialState: manageTestsReducerState = {
  allTest: [],
};

export const manageTestsReducer = (
  state: manageTestsReducerState = initialState,
  action: manageTestsReducerAction
) => {
  switch (action.type) {
    case manageTestsActionTypes.GET_TEST: {
      return {
        ...state,
        allTest: [
          ...state.allTest,
          { testName: action.payload.testName, test: action.payload.test, id: action.payload.id },
        ],
      };
    }
    case manageTestsActionTypes.RELOAD: {
      let newTests = JSON.parse(localStorage.getItem("allTests") || "");
      return { ...state, allTest: [...(state.allTest = newTests)] };
    }

    default:
      return { ...state };
  }
};
