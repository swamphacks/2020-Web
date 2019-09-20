import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {withRouter, RouteComponentProps} from 'react-router-dom';

import sun from '../assets/sunFix.svg';
import backBushes from '../assets/back-bushes.svg';
import middleBushes from '../assets/middle-bushes.svg';
import frontBushes from '../assets/front-bushes.svg';
import dock from '../assets/dock.svg';
import cloud1 from '../assets/cloud-1.svg';
import cloud2 from '../assets/cloud-2.svg';
import cloud3 from '../assets/cloud-3.svg';
import cloud4 from '../assets/cloud-4.svg';
import cloud5 from '../assets/cloud-5.svg';
import cloud6 from '../assets/cloud-6.svg';
import officialText from '../assets/official_text_logo.svg';
import boat from '../assets/Luis.svg';
import fbIcon from '../assets/fb-icon.svg';
import igIcon from '../assets/ig-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';
import snapIcon from '../assets/snap-icon.svg';

import '../css/styles.css';
import '../App.css';
import '../css/comingSoon.css';

import Button from '../components/Button';
import Banner from '../components/Banner';
import IconButton from '../components/IconButton';
import ButtonContainer from '../components/ButtonContainer';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const SunGradient = styled.div`
  background-image: linear-gradient(180deg, #ffccaa, #ffeeaa, #ffeeaa);
  user-select: none;
  height: 60vh;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
`;

const Sun = styled.img.attrs(props => ({
  src: sun,
  className: 'hidden-image'
}))`
  width: 80vw;
  height: 80vh;
  min-width: 720px;
  position: absolute;
  top: 8vh;
  animation: loading 120s linear infinite;
  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  z-index: 1;
`;

const horizontalTraverse = (delay?: number) => `
  animation-delay: ${delay || 0}s;
  -webkit-animation-delay: ${delay || 0}s;
  animation: h-traverse ${Math.random() * 20 + 60}s linear infinite;
  @keyframes h-traverse {
    0% {
      left: -400px;
    }
    100% {
      left: 100vw;
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
  className: 'hidden-image'
}))`
  width: 450px;
  position: absolute;
  top: 60px;
  left: 60px;
  ${bounceCss()};
  z-index: 1;
`;

const Cloud2 = styled.img.attrs(props => ({
  src: cloud2,
  className: 'hidden-image'
}))`
  width: 375px;
  position: absolute;
  top: 180px;
  left: 80px;
  ${bounceCss()};
  z-index: 1;
`;

const Cloud3 = styled.img.attrs(props => ({
  src: cloud3,
  className: 'hidden-image'
}))`
  width: 350px;
  position: absolute;
  top: 300px;
  left: -80px;
  ${bounceCss()};
  z-index: 1;
`;

const Cloud4 = styled.img.attrs(props => ({
  src: cloud4,
  className: 'hidden-image'
}))`
  width: 350px;
  position: absolute;
  top: 20px;
  right: 160px;
  ${bounceCss()};
  z-index: 1;
`;

const Cloud5 = styled.img.attrs(props => ({
  src: cloud5,
  className: 'hidden-image'
}))`
  width: 450px;
  position: absolute;
  top: 120px;
  right: 20px;
  ${bounceCss()};
  z-index: 1;
`;

const Cloud6 = styled.img.attrs(props => ({
  src: cloud6,
  className: 'hidden-image'
}))`
  width: 375px;
  position: absolute;
  top: 260px;
  right: 30px;
  ${bounceCss()};
  z-index: 1;
`;

const OfficialText = styled.img.attrs(props => ({
  src: officialText,
  className: 'hidden-image'
}))`
  display: flex;
  z-index: 6;
  max-width: 800px;
`;

const Dock = styled.img.attrs(props => ({
  src: dock,
  className: 'hidden-image'
}))`
  min-width: 600px;
  position: absolute;
  bottom: -50px;
  width: 35vw;
  z-index: 5;
`;

const BackBushes = styled.img.attrs(props => ({
  src: backBushes,
  className: 'hidden-image'
}))`
  min-width: 1920px;
  width: 100vw;
  position: absolute;
  bottom: 32vh;
  z-index: 3;
`;

const MiddleBushes = styled.img.attrs(props => ({
  src: middleBushes,
  className: 'hidden-image'
}))`
  min-width: 1920px;
  width: 100vw;
  position: absolute;
  bottom: 25vh;
  z-index: 4;
`;

const FrontBushes = styled.img.attrs(props => ({
  src: frontBushes,
  className: 'hidden-image'
}))`
  min-width: 1920px;
  width: 100vw;
  position: absolute;
  bottom: 21vh;
  z-index: 5;
`;

const Water = styled.div`
  background-image: radial-gradient(circle at 0 125%, #5599ff 15%, #00ffff 85%);
  height: 40vh;
  width: 100vw;
  min-width: 1920px;
  position: absolute;
  bottom: 0;
  z-index: 2;
`;

const Boat = styled.img.attrs(props => ({
  src: boat,
  className: 'hidden-image'
}))`
  width: 20vw;
  min-width: 200px;
  position: absolute;
  bottom: 25vh;
  right: 0;
  animation: translate 100s linear infinite;
  @keyframes translate {
    from {
      right: -15vw;
    }
    to {
      right: 100vw;
    }
  }
  z-index: 4;
`;

interface Props extends RouteComponentProps<any> {}

const ComingSoon: React.FC<Props> = props => {
  const [bannerMsg, setBannerMsg] = useState(null);

  useEffect(() => {
    if (props.history.location.state) {
      setBannerMsg(props.history.location.state.message);
    }
  });

  return (
    <Container>
      <SunGradient />
      <Sun />
      <Water />
      <Cloud1 />
      <Cloud2 />
      <Cloud3 />
      <Cloud4 />
      <Cloud5 />
      <Cloud6 />
      <BackBushes />
      <MiddleBushes />
      <Boat />
      <FrontBushes />
      <Dock />

      <div
        className="content-container"
        style={{
          zIndex: 7
        }}
      >
        <OfficialText />
        <Button
          onClick={() => {
            props.history.push('/preregister');
          }}
          style={{maxWidth: 400}}
        >
          Pre-Register!
        </Button>
        <Button
          onClick={() => {
            window.location.href = 'mailto:sponsors@swamphacks.com';
          }}
          style={{maxWidth: 400}}
        >
          Sponsor Us!
        </Button>
        <div
          className="social-container"
          style={{
            display: 'flex',
            padding: '20px 20px 20px 20px',
            boxSizing: 'border-box',
            zIndex: 6,
            width: '100%'
          }}
        >
          <IconButton
            icon={fbIcon}
            style={{height: 50, width: 50}}
            onClick={() => {
              window.open('https://www.facebook.com/SwampHacks/', '_blank');
            }}
          />
          <IconButton
            icon={igIcon}
            style={{height: 50, width: 50}}
            onClick={() => {
              window.open('https://www.instagram.com/ufswamphacks/', '_blank');
            }}
          />
          <IconButton
            icon={twitterIcon}
            style={{height: 50, width: 50}}
            onClick={() => {
              window.open('https://twitter.com/swamphacks', '_blank');
            }}
          />
          {/* <IconButton
            icon={snapIcon}
            style={{height: 50, width: 50}}
            onClick={() => {
              window.location.href = 'https://twitter.com/swamphacks?lang=en';
            }}
          /> */}
        </div>
      </div>
      {bannerMsg && (
        <Banner
          onClick={() => {
            props.history.location.state = null;
            setBannerMsg(null);
          }}
        >
          {bannerMsg}
        </Banner>
      )}
    </Container>
  );
};

export default withRouter(ComingSoon);
