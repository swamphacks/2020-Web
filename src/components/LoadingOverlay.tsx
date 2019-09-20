import React from 'react';
import styled from 'styled-components';

import Spinner from '@atlaskit/spinner';

import '../App.css';

const Container = styled.div`
  position: fixed;
  background-color: black;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  left: ${window.innerWidth / 2 - 50}px;
  z-index: 999;
  top: ${window.innerHeight / 2 - 50}px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Banner: React.FC = () => {
  return (
    <Container>
      <Spinner size={50} invertColor />
    </Container>
  );
};

export default Banner;
