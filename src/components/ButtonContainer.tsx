import React from 'react';
import styled from 'styled-components';

import '../App.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const ButtonContainer: React.FC<Props> = props => {
  return (
    <Container className={`${props.className} button-container`}>
      {props.children}
    </Container>
  );
};

export default ButtonContainer;
