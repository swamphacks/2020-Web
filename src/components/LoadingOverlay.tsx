import React from 'react';
import styled from 'styled-components';

import Spinner from 'react-bootstrap/Spinner';
// import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';

const Container = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 10px;
  left: calc(50vw - 50px);
  z-index: 999;
  top: calc(50vh - 50px);
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Banner: React.FC = () => {
  return (
    <Container>
      <Spinner animation="border" role="status" variant="light">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Banner;
