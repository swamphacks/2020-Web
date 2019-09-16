import React from 'react';
import {FieldProps} from 'formik';
import styled from 'styled-components';

import InputErrorMessage from './InputErrorMessage';

const Input = styled.textarea.attrs(props => ({
  wrap: 'soft'
}))`
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
  height: 200px;
  font-size: 24px;
  margin: 5px 0;
  padding: 20px 20px;
  resize: none;
  :focus {
    outline: none;
    box-shadow: 0 0 3pt 2pt #75f2a9;
  }
`;

const TitleContainer = styled.div`
  font-family: Avenir, Roboto, Sans-serif;
  font-weight: regular;
  color: white;
  font-size: 24px;
  margin: 20px -20px;
`;

interface Props extends FieldProps {
  title?: string;
}

const TextAreaField: React.FC<Props> = ({
  field, // { name, value, onChange, onBlur }
  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  title,
  ...props
}) => {
  return (
    <>
      <TitleContainer>{title}</TitleContainer>
      <div
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Input {...field} {...props} />
      </div>
      {touched[field.name] && errors[field.name] && (
        <InputErrorMessage style={{marginLeft: -20, marginRight: -20}}>
          {errors[field.name]}
        </InputErrorMessage>
      )}
    </>
  );
};

export default TextAreaField;
