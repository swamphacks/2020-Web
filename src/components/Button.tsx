import React, {useState, ReactNode} from 'react';
import styled from 'styled-components';

import buttonImage from '../assets/buttonImage.svg';
import buttonImageRed from '../assets/dark-red-wood-button.svg';
import buttonImageGreen from '../assets/dark-green-wood-button.svg';

import '../css/styles.css';

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

const Text = styled.div`
  position: absolute;
  font-family: Ink Free;
  line-height: 1.2;
  color: black;
`;

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  style?: any;
  variant?: 'red' | 'green' | 'default';
}

const Button: React.FC<Props> = props => {
  const {variant} = props || 'default';
  let src = buttonImage;
  if (variant === 'red') {
    src = buttonImageRed;
  } else if (variant === 'green') {
    src = buttonImageGreen;
  }
  return (
    <CustomButton
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
      style={props.style}
    >
      <img src={src} width={'100%'} />
      <Text>
        <h3>{props.children}</h3>
      </Text>
    </CustomButton>
  );
};

export default Button;
