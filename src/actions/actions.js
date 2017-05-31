export const SHOW_RESPONSE = "SHOW_RESPONSE";

const showResponse = (name1, name2, letter) => {
  const action = {
    type: SHOW_RESPONSE,
    name1,
    name2,
    letter
  };
  console.log("Response from server is ", letter);
  return action;
};

export const fetchResult = (name_1, name_2) => dispatch => {
  let jsonobject;
  let flamespair = { name_1: name_1, name_2: name_2 };

  return fetch("/getResult", {
    method: "POST",
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(flamespair)
  })
  .then(response => response.json())
  .then(json => {
    return dispatch(showResponse(name_1, name_2, json.letter));
  });
};
