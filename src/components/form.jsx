import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Input, Button, Message } from "semantic-ui-react";
import { connect } from 'react-redux'
import { fetchResult } from '../actions/actions';
import '../index.css';

const formInput = ({ input, label, type, meta: { touched, error } }) => {
  const hasError = touched && error !== undefined;
  return (
    <div>
      <label>{label}</label>
      <div>
        <Input
          error={hasError}
          fluid
          placeholder={label}
          type={type}
          {...input}
        />
        {touched && error && <span>{error}</span>}
      </div>
      {hasError && <Message error header="Error" content={error} />}
    </div>
  );
};

const submit = (values, dispatch) => {
  return dispatch(fetchResult(values.name_1, values.name_2));
  // console.log('submmited values', values.name_1, values.name_2);
  // return dispatch(getInputs(values.name_1, values.name_2));
};

// const Result = (message) => {
//   console.log(message);
//   return (
//     <div>
//       <Message content={message} />
//     </div>
//   )
// }


class InputForm extends Component {
  render() {
    const { handleSubmit, response } = this.props;
    const hasMessage = response.message !== undefined;
    return (
      <div className="form">
        <div className="title">
          FLAMES
        </div>
        <form onSubmit={handleSubmit(submit)} className="reminder-form">
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
          <Button type="submit" content="Click here" />
        </form>
        <div className="message-box">
          {hasMessage && <Message content={response.message} />}
        </div>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.name_1 || values.name_1 === '') {
    errors.name_1 = "Required";
  } else if (!values.name_1.match(/^[a-zA-Z]+(\s{0,1}[a-zA-Z ])*$/)) {
    errors.name_1 = "Enter a valid name";
  }

  if (!values.name_2 || values.name_2 === '') {
    errors.name_2 = "Required";
  } else if (!values.name_2.match(/^[a-zA-Z]+(\s{0,1}[a-zA-Z ])*$/)) {
    errors.name_2 = "Enter a valid name";
  }
  return errors;
};

const Form = reduxForm({
  form: "GetNames",
  validate
})(InputForm);

function mapStateToProps(state) {
  return {
    response: state.showResponse
  }
}

export default connect(mapStateToProps)(Form);
