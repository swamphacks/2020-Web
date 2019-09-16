import React, {useState, ReactNode} from 'react';
import styled from 'styled-components';

import buttonImage from '../assets/buttonImage.svg';

const CustomButton = styled.button<Props>`
  z-index: 1;
  border: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: transparent;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;

  min-width: 300px;
  min-height: 80px;

  max-width: 500px;
  max-height: 160px;

  -webkit-transition: -webkit-transform 0.25s ease;

  transition: -webkit-transform 0.25s ease;

  -o-transition: transform 0.25s ease;

  transition: transform 0.25s ease;

  transition: transform 0.25s ease, -webkit-transform 0.25s ease;
  :hover {
    -webkit-transform: scale(1.09) rotate(${Math.random() * 3 - 1}deg);
    -ms-transform: scale(1.09) rotate(${Math.random() * 3 - 1}deg);
    transform: scale(1.09) rotate(${Math.random() * 3 - 1}deg);
  }
`;

const Background = styled.img.attrs({
  src: buttonImage
})`
  width: 100%;
`;

const Text = styled.div`
  position: absolute;
  font-family: Ink Free;
  font-size: 2rem;
  line-height: 1.2;
  color: black;
`;

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title?: string;
  width?: number;
  height?: number;
}

const Button: React.FC<Props> = props => {
  return (
    <CustomButton onClick={props.onClick}>
      <Background />
      <Text>{props.title}</Text>
    </CustomButton>
  );
};

export default Button;
