import React, {useState} from 'react';
import ComingSoon from './pages/comingSoon';
import PreRegister from './pages/preRegister';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={PreRegister} />
      <Route path="/pre-register" exact component={PreRegister} />
    </Router>
  );
};

export default App;
