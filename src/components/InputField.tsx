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

type Props = {
  type?: string;
  required?: boolean;
  placeholder?: string;
  name?: string;
  errorText?: string;
  onChange: any;
};

const InputField: React.FC<Props> = props => {
  const Input = styled.input.attrs(props => ({
    placeholder: props.placeholder,
    required: props.required,
    type: props.type,
    name: props.name,
    maxLength: 120
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
    height: 50px;
    font-size: 24px;
    margin: 20px 0 5px 0;
    padding: 12px 20px;
    :focus {
      outline: none;
      box-shadow: 0 0 3pt 2pt #75f2a9;
    }
  `;
  return (
    <>
      <Input
        placeholder={props.placeholder}
        type={props.type}
        required={props.required}
        name={props.name}
        onChange={props.onChange}
      ></Input>
      {props.errorText && <ErrorContainer>{props.errorText}</ErrorContainer>}
    </>
  );
};

export default InputField;
