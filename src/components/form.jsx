import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Message, Header } from "semantic-ui-react";
import { connect } from "react-redux";
// import { fetchResult } from "../actions/actions";

import { validate } from "./validate";
import { submit } from "./submit";
import { formInput } from "./form";
import "../index.css";

// const formInput = ({ input, label, type, meta: { touched, error } }) => {
//   const hasError = touched && error !== undefined;
//   return (
//     <div>
//       <div>
//         <Header sub color="blue" content={label} />
//       {/* <label>{label}</label> */}
//       </div>
//       <br />
//       <div className="reminder-form">
//         <Input
//           error={hasError}
//           fluid
//           placeholder={label}
//           type={type}
//           {...input}
//         />
//       </div>
//       {hasError && <Message error header="Error" content={error} />}
//     </div>
//   );
// };

// const submit = (values, dispatch) => {
//   let name1 = values.name_1.toLowerCase().replace(/ /g, "");
//   let name2 = values.name_2.toLowerCase().replace(/ /g, "");
//   if (name1 !== name2) {
//     return dispatch(fetchResult(name1, name2));
//   } else {
//     console.log('error araised');
//     throw new SubmissionError({
//       _error: 'Invalid entry. Both the names are same!'
//     })
//   }
// };

class InputForm extends Component {
  render() {
    const { handleSubmit, response, error } = this.props;
    const hasMessage = response.message !== undefined;
    const messageHeader = `You have got ${response.letter}`;
    return (
      <div className="form">
        <div className="title">
          <Header as="h1" color="blue" content="FLAMES" />
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <Field
            name="name_1"
            component={formInput}
            type="text"
            label="Enter your name"
          />
          <br />
          <Field
            name="name_2"
            component={formInput}
            type="text"
            label="Enter your partner name"
          />
          <br />
          {error &&
            <Message
              error
              header="Invalid entry"
              content="Both names are same!"
            />}
          <br />
          <Button color="blue" type="submit" content="Click here" />
        </form>
        <br />
        <div className="message-box">
          {hasMessage &&
            <Message
              color="blue"
              header={messageHeader}
              content={response.message}
            />}
        </div>
      </div>
    );
  }
}

// const validate = values => {
//   const errors = {};
//   if (!values.name_1 || values.name_1 === "") {
//     errors.name_1 = "Required";
//   } else if (!values.name_1.match(/^[a-zA-Z]+(\s{0,1}[a-zA-Z ])*$/)) {
//     errors.name_1 = "Enter a valid name";
//   }
//
//   if (!values.name_2 || values.name_2 === "") {
//     errors.name_2 = "Required";
//   } else if (!values.name_2.match(/^[a-zA-Z]+(\s{0,1}[a-zA-Z ])*$/)) {
//     errors.name_2 = "Enter a valid name";
//   }
//   return errors;
// };

const Form = reduxForm({
  form: "GetNames",
  validate
})(InputForm);

function mapStateToProps(state) {
  return {
    response: state.showResponse
  };
}

export default connect(mapStateToProps)(Form);
