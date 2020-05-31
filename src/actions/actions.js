export const SUBMIT_INPUT = 'SUBMIT_INPUT';
export const SHOW_RESPONSE = 'SHOW_RESPONSE';
export const SUBMIT_FAILED = 'SUBMIT_FAILED';

export const submitInput = (name_1, name_2) => ({
  type: SUBMIT_INPUT,
  name_1,
  name_2,
});

export const showResponse = (name_1, name_2, letter) => {
  return {
    type: SHOW_RESPONSE,
    name_1,
    name_2,
    letter,
  };
};

export const submitFailed = (payload) => ({
  type: SUBMIT_FAILED,
  payload: payload,
  error: true,
});
