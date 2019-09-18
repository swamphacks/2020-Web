import React from 'react';
import styled from 'styled-components';

import '../App.css';

const ErrorContainer = styled.div`
  background-color: red;
  min-width: 200px;
  width: 100%;
  padding: 8px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-family: Avenir, Roboto, Sans-serif;
  color: white;
  font-size: var(--paragraph);
  line-height: var(--line-height-xsmall);
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
