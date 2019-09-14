import React, {useState} from 'react';
import styled from 'styled-components';
import sun from './assets/sun.svg';
import backBushes from './assets/back-bushes.svg';
import middleBushes from './assets/middle-bushes.svg';
import frontBushes from './assets/front-bushes.svg';
import dock from './assets/dock.png';
import cloud1 from './assets/cloud-1.svg';
import cloud2 from './assets/cloud-2.svg';
import cloud3 from './assets/cloud-3.svg';
import cloud4 from './assets/cloud-4.svg';
import cloud5 from './assets/cloud-5.svg';
import cloud6 from './assets/cloud-6.svg';
import officialText from './assets/official_text_logo.svg';

import Button from './components/Button';

// Notes: Use styled components. Use react hooks in functional components for state.

const Background = styled.div`
  background-image: linear-gradient(180deg, #ffccaa, #ffeeaa, #ffeeaa);
  height: 100vh;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const Sun = styled.img.attrs(props => ({
  src: sun,
  width: '80%',
  height: '80%'
}))`
  position: absolute;
  top: 8vh;
`;

const Cloud1 = styled.img.attrs(props => ({
  src: cloud1,
  width: 300
}))`
  position: absolute;
  top: 60px;
  left: 60px;
`;

const Cloud2 = styled.img.attrs(props => ({
  src: cloud2,
  width: 200
}))`
  position: absolute;
  top: 180px;
  left: 80px;
`;

const Cloud3 = styled.img.attrs(props => ({
  src: cloud3,
  width: 240
}))`
  position: absolute;
  top: 300px;
  left: -80px;
`;

const Cloud4 = styled.img.attrs(props => ({
  src: cloud4,
  width: 240
}))`
  position: absolute;
  top: 20px;
  right: 160px;
`;

const Cloud5 = styled.img.attrs(props => ({
  src: cloud5,
  width: 340
}))`
  position: absolute;
  top: 120px;
  right: 20px;
`;

const Cloud6 = styled.img.attrs(props => ({
  src: cloud6,
  width: 160
}))`
  position: absolute;
  top: 260px;
  right: 30px;
`;

const OfficialText = styled.img.attrs(props => ({
  src: officialText,
  width: '40%'
}))`
  display: flex;
  z-index: 1;
`;

const Dock = styled.img.attrs(props => ({
  src: dock,
  width: '40%'
}))`
  position: absolute;
  bottom: 0;
`;

const BackBushes = styled.img.attrs(props => ({
  src: backBushes,
  width: '100%'
}))`
  position: absolute;
  bottom: 35vh;
`;

const MiddleBushes = styled.img.attrs(props => ({
  src: middleBushes,
  width: '100%'
}))`
  position: absolute;
  bottom: 25vh;
`;

const FrontBushes = styled.img.attrs(props => ({
  src: frontBushes,
  width: '100%'
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

const App: React.FC = () => {
  return (
    <Background>
      <Sun />
      <Water />
      <BackBushes />
      <MiddleBushes />
      <FrontBushes />
      <Dock />
      <Cloud1 />
      <Cloud2 />
      <Cloud3 />
      <Cloud4 />
      <Cloud5 />
      <Cloud6 />
      <OfficialText />
      <Button onClick={() => {}} title="Hi" />
    </Background>
  );
};

export default App;
