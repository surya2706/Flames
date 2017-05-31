import React from "react";
import { Header, Message, Input } from "semantic-ui-react";

export const formInput = ({ input, label, type, meta: { touched, error } }) => {
  const hasError = touched && error !== undefined;
  return (
    <div>
      <div>
        <Header sub color="blue" content={label} />
      </div>
      <br />
      <div className="reminder-form">
        <Input
          error={hasError}
          fluid
          placeholder={label}
          type={type}
          {...input}
        />
      </div>
      {hasError && <Message error header="Error" content={error} />}
    </div>
  );
};
