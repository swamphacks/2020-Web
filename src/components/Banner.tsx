import React from 'react';
import styled from 'styled-components';

import '../App.css';
import IconButton from './IconButton';
import closeIcon from '../assets/close-icon.svg';

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

interface Props {
  onClick: Function;
}

const Banner: React.FC<Props> = props => {
  return (
    <BannerContainer>
      <IconButton
        icon={closeIcon}
        onClick={() => props.onClick()}
        style={{color: 'white', width: 50, minWidth: 50}}
      />
      <p>{props.children}</p>
    </BannerContainer>
  );
};

export default Banner;
