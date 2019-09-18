import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: blue;
  width: 100%;
  padding: 12px 20px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  font-family: Avenir, Roboto, Sans-serif;
  font-weight: regular;
  color: white;
  font-size: 16px;
  position: absolute;
  top: 0;
`;

const CloseButton = styled.button`
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
  font-family: Avenir, Roboto, Sans-serif;
  font-weight: bold;
  color: white;
  font-size: 21px;
`;

interface Props {
  onClick: Function;
}

const Banner: React.FC<Props> = props => {
  return (
    <BannerContainer>
      <CloseButton onClick={() => props.onClick()}>X</CloseButton>
      {props.children}
    </BannerContainer>
  );
};

export default Banner;
