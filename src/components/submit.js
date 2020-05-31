import { SubmissionError } from 'redux-form';
import { submitInput } from '../actions/actions';

export const submit = (values, dispatch) => {
  let name1 = values.name_1.toLowerCase().replace(/ /g, '');
  let name2 = values.name_2.toLowerCase().replace(/ /g, '');
  if (name1 !== name2) {
    return dispatch(submitInput(name1, name2));
  } else {
    console.log('error araised');
    throw new SubmissionError({
      _error: 'Invalid entry. Both the names are same!',
    });
  }
};
