import React from 'react';
import styled from 'styled-components';

import '../App.css';

const BannerContainer = styled.div`
  background-color: blue;
  width: 100%;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 16px;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  z-index: 99;
`;

const CloseButton = styled.button`
  border: 0;
  background: transparent;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  font-family: Avenir, Roboto, Sans-serif;
  font-weight: bold;
  color: white;
  font-size: 21px;
  z-index: 100;
  width: 5rem;
`;

interface Props {
  onClick: Function;
}

const Banner: React.FC<Props> = props => {
  return (
    <BannerContainer>
      <CloseButton onClick={() => props.onClick()}>X</CloseButton>
      <p>{props.children}</p>
    </BannerContainer>
  );
};

export default Banner;
