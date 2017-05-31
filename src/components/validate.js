export const validate = values => {
  const errors = {};
  if (!values.name_1 || values.name_1 === "") {
    errors.name_1 = "Required";
  } else if (!values.name_1.match(/^[a-zA-Z]+(\s{0,1}[a-zA-Z ])*$/)) {
    errors.name_1 = "Enter a valid name";
  }

  if (!values.name_2 || values.name_2 === "") {
    errors.name_2 = "Required";
  } else if (!values.name_2.match(/^[a-zA-Z]+(\s{0,1}[a-zA-Z ])*$/)) {
    errors.name_2 = "Enter a valid name";
  }
  return errors;
};
