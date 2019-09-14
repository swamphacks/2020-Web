import React, {useState, ReactNode} from 'react';
import styled from 'styled-components';

const CustomButton = styled.button.attrs(props => ({}))`
  border: 0;
  border-radius: 0.25rem;
  background: #1e88e5;
  color: white;
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
`;

type Props = {
  onClick: Function;
  title?: String;
  width?: number;
  height?: number;
};

const Button: React.FC<Props> = props => {
  const width = props.width ? props.width : 200;
  const height = props.height ? props.height : 140;
  return (
    <CustomButton
      onClick={() => props.onClick()}
      style={{
        width: width,
        height: height,
        position: 'absolute',
        top: 0,
        left: 40
      }}
    >
      {props.title}
    </CustomButton>
  );
};

export default Button;
