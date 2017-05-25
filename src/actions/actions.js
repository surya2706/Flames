export const GET_INPUTS = 'GET_INPUTS';

export const getInputs = (name_1, name_2) => {
  const action = {
    type: GET_INPUTS,
    name_1,
    name_2
  };
  console.log('actions in getInputs', name_1, name_2);
  return action;
}
