import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { GET_INPUTS } from "../actions/actions";

const getInputs = (state = [], action) => {
  switch (action.type) {
    case GET_INPUTS:
      console.log("inputs in reducers", action.name_1, action.name_2);
      return [
        ...state,
        {
          name_1: action.name_1,
          name_2: action.name_2
        }
      ];
    default:
      return state;
  }
};

const reducer = combineReducers({
  getInputs,
  form: formReducer
});

export default reducer;
