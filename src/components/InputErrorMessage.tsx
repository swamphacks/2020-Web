import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  background-color: red;
  min-width: 200px;
  width: 100%;
  padding: 12px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-family: Avenir, Roboto, Sans-serif;
  font-weight: bold;
  color: white;
  font-size: 16px;
  box-sizing: border-box;
`;

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const InputErrorMessage: React.FC<Props> = props => {
  return <ErrorContainer style={props.style}>{props.children}</ErrorContainer>;
};

export default InputErrorMessage;
