import React, {useState, ReactNode} from 'react';
import styled from 'styled-components';

import buttonImage from '../assets/buttonImage.svg';

const CustomButton = styled.button`
z-index: 99;
width: 200px;
height: 50px;
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
color: white;
font-family: system-ui, sans-serif;
font-size: 1rem;
line-height: 1.2;
white-space: nowrap;
text-decoration: none;
padding: 0.25rem 0.5rem;
margin: 0.25rem;
cursor: pointer;


-webkit-transition: -webkit-transform .25s ease;


transition: -webkit-transform .25s ease;


-o-transition: transform .25s ease;


transition: transform .25s ease;


transition: transform .25s ease, -webkit-transform .25s ease;
:hover {
  -webkit-transform: scale(1.09) rotate(${(Math.random() * 3) - 1}deg);
      -ms-transform: scale(1.09) rotate(${(Math.random() * 3) - 1}deg);
          transform: scale(1.09) rotate(${(Math.random() * 3) - 1}deg);
}  

`;

// const Image = styled.image.attrs(({
//   src: buttonImage,
// }))`
//   position: absolute;
//   height: 100%;
//   width: 100%;
// `;

const Background = styled.img.attrs(({
  src: buttonImage,
}))`
  width: 200px;
  height: 50px;
`;

const Text = styled.div`
  position: absolute;
  color: white;
  font-size: 14px;
  margin-top: 4px;
`;

type Props = {
  onClick: Function;
  title: string;
  width?: number;
  height?: number;
};

const Button: React.FC<Props> = props => {
  // const width = props.width ? props.width : 200;
  // const height = props.height ? props.height : 140;
  return (
    <CustomButton
      onClick={() => props.onClick()}
      style={{
        // width: width,
        // height: height,
        // backgroundColor: 'red',
        // position: 'absolute',
        // top: 0,
        // left: 40
      }}
    >
      <Background />
      <Text>{props.title}</Text>
    </CustomButton>
  );
};

export default Button;
