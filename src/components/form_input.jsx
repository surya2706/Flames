import React from 'react';
import { Header, Message, Input } from 'semantic-ui-react';

export const FormInput = ({
  input,
  label,
  type,
  handler,
  value,
  errorMessage,
}) => {
  return (
    <div>
      <div>
        <Header sub color='blue' content={label} />
      </div>
      <br />
      <div className='reminder-form'>
        <Input
          error={Boolean(errorMessage)}
          fluid
          placeholder={label}
          type={type}
          onChange={handler}
          {...input}
          value={value}
        />
      </div>
      {errorMessage && <Message error content={errorMessage} />}
    </div>
  );
};
