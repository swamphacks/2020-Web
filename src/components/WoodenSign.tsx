import * as React from 'react';
import styled from 'styled-components';

import '../App.css';
import '../css/styles.css';

import buttonImage from '../assets/buttonImage.svg';
import ropeImage from '../assets/rope.svg';

const Rope = styled.img.attrs(props => ({
  src: ropeImage,
  className: 'hidden-image'
}))`
  width: 30px;
  height: 300px;
  bottom: 150px;
  position: relative;
`;

const Sign = styled.img.attrs(props => ({
  src: buttonImage,
  className: 'hidden-image'
}))`
  width: 100%;
  max-width: 600px;
  z-index: 1;
`;

const Text = styled.div`
  position: absolute;
  text-align: center;
  font-family: Ink Free;
  z-index: 2;
`;

const Container = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
`;

interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const WoodenSign: React.FC<Props> = props => {
  return (
    <Container>
      <Rope style={{left: '15%'}} />
      <Sign />
      <Rope style={{right: '15%'}} />
      <Text>
        <h2>{props.children}</h2>
      </Text>
    </Container>
  );
};

export default WoodenSign;
