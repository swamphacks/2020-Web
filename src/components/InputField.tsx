import React from 'react';
import {FieldProps} from 'formik';
import styled from 'styled-components';

import '../App.css';

import InputErrorMessage from './InputErrorMessage';

interface Props extends FieldProps {}

const Input = styled.input`
  font-family: Avenir, Roboto, Sans-serif;
  font-weight: regular;
  color: black;
  border: none;
  background-image: none;
  background-color: white;
  box-shadow: none;
  -webkit-box-shadow: none;
  border-radius: 10px;
  min-width: 200px;
  width: 100%;
  font-size: var(--paragraph);
  line-height: var(--paragraph-height);
  margin: 5px 0;
  padding: 12px 20px;
  :focus {
    outline: none;
    box-shadow: 0 0 3pt 2pt #75f2a9;
  }
  box-sizing: border-box;
`;

const InputField: React.FC<Props> = ({
  field, // { name, value, onChange, onBlur }
  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <>
      <Input type="text" {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <InputErrorMessage>{errors[field.name]}</InputErrorMessage>
      )}
    </>
  );
};

export default InputField;
