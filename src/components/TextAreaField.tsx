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
  margin: 20px 0;
  padding: 20px 20px;
  resize: none;
  :focus {
    outline: none;
    box-shadow: 0 0 3pt 2pt #75f2a9;
  }
`;

const TitleContainer = styled.div`
  width: 30vw + 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  font-family: Avenir, Roboto, Sans-serif;
  font-weight: regular;
  color: white;
  font-size: 24px;
  margin: 0 -20px;
`;

type Props = {
  type?: string;
  required?: boolean;
  placeholder?: string;
  name?: string;
  title?: string;
};

const TextAreaField: React.FC<Props> = props => {
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
        <Input placeholder={props.placeholder}></Input>
      </div>
    </div>
  );
};

export default TextAreaField;
