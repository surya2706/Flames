import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Input, Button, Message } from "semantic-ui-react";
import { connect } from 'react-redux'
import { getInputs } from '../actions/actions';

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
  return dispatch(getInputs(values.name_1, values.name_2));
  // console.log('submmited values', values.name_1, values.name_2);
  // return dispatch(getInputs(values.name_1, values.name_2));
};


class InputForm extends Component {

  render() {
    const { handleSubmit, name_1, name_2 } = this.props;
    return (
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
        <Button type="submit" content="Click here" />
      </form>
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
    getInputs: state
  }
}

export default connect(mapStateToProps)(Form);
