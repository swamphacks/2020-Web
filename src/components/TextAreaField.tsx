import React, {useState} from 'react';
import styled from 'styled-components';

const Input = styled.textarea.attrs(props => ({
  wrap: 'soft',
  maxLength: 240
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

const ErrorContainer = styled.div`
  background-color: red;
  min-width: 200px;
  width: 100%;
  padding: 12px 20px;
  margin: 0 -20px;
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
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  title?: string;
  errorText?: string;
}

const TextAreaField: React.FC<Props> = props => {
  const {title, placeholder} = props;
  return (
    <div>
      <TitleContainer>{props.title}</TitleContainer>
      <div
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Input
          placeholder={placeholder}
          onChange={props.onChange}
          value={props.value}
        ></Input>
      </div>
      {props.errorText && <ErrorContainer>{props.errorText}</ErrorContainer>}
    </div>
  );
};

export default TextAreaField;
