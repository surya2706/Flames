import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Message, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { validate } from "./validate";
import { submit } from "./submit";
import { formInput } from "./form_input";

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
