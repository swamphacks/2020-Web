import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button<Props>`
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

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  style?: any;
  icon?: any;
}

const IconButton: React.FC<Props> = props => {
  return (
    <CustomButton
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
      style={props.style}
    >
      <img src={props.icon} width={'100%'} />
    </CustomButton>
  );
};

export default IconButton;
