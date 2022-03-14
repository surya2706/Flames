import React, { useState } from 'react';
import { Button, Message, Header } from 'semantic-ui-react';
import { FormInput } from './form_input';
import { useSelector, useDispatch } from 'react-redux';
import { updateName1, updateName2 } from '../slice/inputSlice';
import { validateInputs, fetchResult, sameNamesError } from '../slice/resultSlice';

const InputForm = (props) => {
  const { name1, name2 } = useSelector(({ inputReducer }) => inputReducer);
  const dispatch = useDispatch();
  const [name1State, setName1State] = useState('');
  const [name2State, setName2State] = useState('');
  const inputError = useSelector(
    ({ resultReducer }) => resultReducer.inputError
  );
  const { message, errorMessage } = useSelector(( { resultReducer }) => resultReducer)

  const name1Handler = (e) => {
    const { value } = e.target;
    setName1State(value);
    dispatch(updateName1(value));
  };

  const name2Handler = (e) => {
    const { value } = e.target;
    setName2State(value);
    dispatch(updateName2(value));
  };

  const submitHandler = () => {
    dispatch(validateInputs({ name1, name2 }));
    if (!inputError.name1 && !inputError.name2) {
      if (name1 !== name2) {
        dispatch(fetchResult({name1, name2}))
      } else {
        dispatch(sameNamesError())
      }
    }
  };

  return (
    <div className='form'>
      <div className='title'>
        <Header as='h1' color='blue' content='FLAMES' />
      </div>
      <form>
        <FormInput
          name='name_1'
          type='text'
          label='Enter your name'
          handler={name1Handler}
          value={name1State}
          errorMessage={inputError.name1}
        />
        <br />
        <FormInput
          name='name_2'
          type='text'
          label='Enter your partner name'
          handler={name2Handler}
          value={name2State}
          errorMessage={inputError.name2}
        />
        <br />
        {errorMessage && (
        <Message error header='Invalid entry' content='Both names are same!' />
      )}
        <br />
        <Button
          color='blue'
          type='button'
          content='Click here'
          onClick={submitHandler}
        />
      </form>
      <br />
      <div className='message-box'>
        {message && (
      <Message
        color='blue'
        content={message}
      />
    )}
      </div>
    </div>
  );
};

export default InputForm;
