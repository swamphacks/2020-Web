import React, {useState} from 'react';
import styled from 'styled-components';
import {withRouter, RouteComponentProps} from 'react-router-dom';

import sun from '../assets/sunFix.svg';
import backBushes from '../assets/back-bushes.svg';
import middleBushes from '../assets/middle-bushes.svg';
import frontBushes from '../assets/front-bushes.svg';
import dock from '../assets/dock.png';
import cloud1 from '../assets/cloud-1.svg';
import cloud2 from '../assets/cloud-2.svg';
import cloud3 from '../assets/cloud-3.svg';
import cloud4 from '../assets/cloud-4.svg';
import cloud5 from '../assets/cloud-5.svg';
import cloud6 from '../assets/cloud-6.svg';
import officialText from '../assets/official_text_logo.svg';
import boat from '../assets/gator-boat.svg';
import '../css/styles.css';

import Button from '../components/Button';

// Notes: Use styled components. Use react hooks in functional components for state.

const Container = styled.div`
  height: ${window.innerHeight}px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const SunGradient = styled.div`
  background-image: linear-gradient(180deg, #ffccaa, #ffeeaa, #ffeeaa);
  user-select: none;
  height: 60vh;
  width: 100%;
  position: absolute;
  top: 0;
`;

const Sun = styled.img.attrs(props => ({
  src: sun,
  width: '80%',
  height: '80%',
  className: 'hidden-image'
}))`
  position: absolute;
  top: 8vh;
  animation: loading 360s linear infinite;
  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const bounceCss = () => `
  animation: bounce ${Math.random() * 8 + 3}s linear infinite alternate;
  @keyframes bounce {
    0% {
      transform: translateY(${Math.random() > 0.5 ? -15 : 15}px);
    }
    100% {
      transform: translateY(0);
    }
  } 
`;

const Cloud1 = styled.img.attrs(props => ({
  src: cloud1,
  width: 300,
  className: 'hidden-image'
}))`
  position: absolute;
  top: 60px;
  left: 60px;
  ${bounceCss()}
`;

const Cloud2 = styled.img.attrs(props => ({
  src: cloud2,
  width: 200,
  className: 'hidden-image'
}))`
  position: absolute;
  top: 180px;
  left: 80px;
  ${bounceCss()}
`;

const Cloud3 = styled.img.attrs(props => ({
  src: cloud3,
  width: 240,
  className: 'hidden-image'
}))`
  position: absolute;
  top: 300px;
  left: -80px;
  ${bounceCss()}
`;

const Cloud4 = styled.img.attrs(props => ({
  src: cloud4,
  width: 240,
  className: 'hidden-image'
}))`
  position: absolute;
  top: 20px;
  right: 160px;
  ${bounceCss()}
`;

const Cloud5 = styled.img.attrs(props => ({
  src: cloud5,
  width: 340,
  className: 'hidden-image'
}))`
  position: absolute;
  top: 120px;
  right: 20px;
  ${bounceCss()}
`;

const Cloud6 = styled.img.attrs(props => ({
  src: cloud6,
  width: 160,
  className: 'hidden-image'
}))`
  position: absolute;
  top: 260px;
  right: 30px;
  ${bounceCss()}
`;

const OfficialText = styled.img.attrs(props => ({
  src: officialText,
  className: 'hidden-image'
}))`
  display: flex;
  z-index: 1;
  min-width: 600px;
`;

const Dock = styled.img.attrs(props => ({
  src: dock,
  className: 'hidden-image'
}))`
  position: absolute;
  bottom: 0;
  width: 40%;
`;

const BackBushes = styled.img.attrs(props => ({
  src: backBushes,
  width: '100%',
  className: 'hidden-image'
}))`
  position: absolute;
  bottom: 35vh;
`;

const MiddleBushes = styled.img.attrs(props => ({
  src: middleBushes,
  width: '100%',
  className: 'hidden-image'
}))`
  position: absolute;
  bottom: 25vh;
`;

const FrontBushes = styled.img.attrs(props => ({
  src: frontBushes,
  width: '100%',
  className: 'hidden-image'
}))`
  position: absolute;
  bottom: 21vh;
`;

const Water = styled.div`
  background-image: radial-gradient(circle at 0 125%, #5599ff 15%, #00ffff 85%);
  height: 40vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
`;

const Boat = styled.img.attrs(props => ({
  src: boat,
  className: 'hidden-image'
}))`
  width: 20vw;
  position: absolute;
  bottom: 25vh;
  right: 0;
  animation: translate 200s linear infinite;
  @keyframes translate {
    from {
      right: -15vw;
    }
    to {
      right: 100%;
    }
  }
`;

interface Props extends RouteComponentProps<any> {}

const ComingSoon: React.FC<Props> = props => {
  return (
    <>
      <Container>
        <SunGradient />
        <Sun />
        <Water />
        <BackBushes />
        <MiddleBushes />
        <Boat />
        <FrontBushes />
        <Dock />
        <Cloud1 />
        <Cloud2 />
        <Cloud3 />
        <Cloud4 />
        <Cloud5 />
        <Cloud6 />
        <div
          style={{
            width: '50%',
            height: '40%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'column'
          }}
        >
          <OfficialText />
          <Button
            onClick={() => {
              props.history.push('/pre-register');
            }}
            title="Pre-Register!"
          />
          <Button
            onClick={() => {
              window.location.href = 'mailto:sponsors@swamphacks.com';
            }}
            title="Sponsor Us!"
          />
        </div>
      </Container>
      <div
        style={{
          height: 100,
          width: '100%',
          backgroundColor: 'red'
        }}
      />
    </>
  );
};

export default withRouter(ComingSoon);
