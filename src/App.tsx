import React, {useState, Suspense} from 'react';
import styled from 'styled-components';
import sun from './assets/sun.svg';
import backBushes from './assets/back-bushes.svg';
import middleBushes from './assets/middle-bushes.svg';
import frontBushes from './assets/front-bushes.svg';
import dock from './assets/dock.png';

// Notes: Used styled components. Use react hooks in functional components for state.

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
  top: 20px;
`;

const Dock = styled.img.attrs(props => ({
  src: dock,
  width: '60%'
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
    </Background>
  );
};

export default App;
