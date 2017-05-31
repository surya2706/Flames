import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { SHOW_RESPONSE } from "../actions/actions";

const getResult = (name1, name2, letter) => {
  var message;
  switch (letter) {
    case "F":
      message = `${name1} and ${name2} has got ${letter} which stands for FRIEND`;
      break;
    case "L":
      message = `${name1} and ${name2} has got ${letter} which stands for LOVE`;
      break;
    case "A":
      message = `${name1} and ${name2} has got ${letter} which stands for AFFECTION`;
      break;
    case "M":
      message = `${name1} and ${name2} has got ${letter} which stands for MARRIAGE`;
      break;
    case "E":
      message = `${name1} and ${name2} has got ${letter} which stands for ENEMY`;
      break;
    case "S":
      message = `${name1} and ${name2} has got ${letter} which stands for SIBLING`;
      break;
    default:
      message = `The names you entered are same. Invalid entry.`;
  }
  return message;
};

const showResponse = (state = {}, action) => {
  switch (action.type) {
    case SHOW_RESPONSE:
      console.log("inputs in reducers", action.letter);
      let result = getResult(action.name1, action.name2, action.letter);
      return {
        ...state,
        message: result
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  showResponse,
  form: formReducer
});

export default reducer;
