import React, {useState, ChangeEventHandler, FormEventHandler} from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  background-color: red;
  min-width: 200px;
  width: 100%;
  padding: 12px 20px;
  margin: 0 0 20px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-family: Avenir, Roboto, Sans-serif;
  font-weight: bold;
  color: white;
  font-size: 16px;
`;

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errorText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

const Input = styled.input.attrs({
  maxLength: 120
})`
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
  height: 50px;
  font-size: 24px;
  margin: 20px 0 5px 0;
  padding: 12px 20px;
  :focus {
    outline: none;
    box-shadow: 0 0 3pt 2pt #75f2a9;
  }
`;

const InputField: React.FC<Props> = props => {
  return (
    <>
      <Input
        placeholder={props.placeholder}
        type={props.type}
        required={props.required}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
      {props.errorText && <ErrorContainer>{props.errorText}</ErrorContainer>}
    </>
  );
};

export default InputField;
