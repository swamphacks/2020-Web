import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as firebase from 'firebase/app';

import ComingSoon from './pages/comingSoon';
import PreRegister from './pages/preRegister';
import {firebaseConfig} from './secrets';

firebase.initializeApp(firebaseConfig);

const App: React.FC = () => {
  require('dotenv').config();
  console.log('Y ' + process.env.TEST);
  return (
    <Router>
      <Route path="/" exact component={PreRegister} />
      <Route path="/pre-register" exact component={PreRegister} />
    </Router>
  );
};

export default App;
